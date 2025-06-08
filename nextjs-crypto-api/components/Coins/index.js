/* filepath: /Users/kajalsoni/Documents/Personal Project/Crypto-Finance-Tracker/nextjs-crypto-api/components/Coins/index.js */
import styles from './Coins.module.css';
import Link from 'next/link';
import FavoriteButton from '../FavoriteButton';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id
}) => {
  // Helper function to safely format numbers
  const formatNumber = (num) => {
    if (num === null || num === undefined || isNaN(num)) {
      return 'N/A';
    }
    return num.toLocaleString();
  };

  // Helper function to safely format percentage
  const formatPercentage = (percent) => {
    if (percent === null || percent === undefined || isNaN(percent)) {
      return 'N/A';
    }
    return percent.toFixed(2) + '%';
  };

  // Helper function to format price
  const formatPrice = (price) => {
    if (price === null || price === undefined || isNaN(price)) {
      return 'N/A';
    }
    return `$${price.toLocaleString()}`;
  };

  // Create coin object for favorites
  const coinData = {
    id,
    name,
    symbol,
    image,
    current_price: price,
    market_cap: marketcap,
    total_volume: volume,
    price_change_percentage_24h: priceChange
  };

  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        {/* Coin Info with Favorite Button */}
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.coin_img} />
          <div className={styles.coin_info}>
            <h1 className={styles.coin_h1}>{name}</h1>
            <p className={styles.coin_symbol}>{symbol}</p>
          </div>
          <div className={styles.favorite_container}>
            <FavoriteButton coin={coinData} />
          </div>
        </div>
        
        {/* Price */}
        <Link href='/coin/[id]' as={`/coin/${id}`}>
          <a className={styles.coin_link}>
            <div className={styles.coin_price}>
              {formatPrice(price)}
            </div>
          </a>
        </Link>
        
        {/* Volume */}
        <Link href='/coin/[id]' as={`/coin/${id}`}>
          <a className={styles.coin_link}>
            <div className={styles.coin_volume}>
              ${formatNumber(volume)}
            </div>
          </a>
        </Link>
        
        {/* 24h Change */}
        <Link href='/coin/[id]' as={`/coin/${id}`}>
          <a className={styles.coin_link}>
            <div className={`${styles.coin_percent} ${priceChange < 0 ? styles.red : styles.green}`}>
              {formatPercentage(priceChange)}
            </div>
          </a>
        </Link>
        
        {/* Market Cap */}
        <Link href='/coin/[id]' as={`/coin/${id}`}>
          <a className={styles.coin_link}>
            <div className={styles.coin_marketcap}>
              ${formatNumber(marketcap)}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Coins;