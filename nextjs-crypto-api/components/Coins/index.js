/* filepath: /Users/kajalsoni/Documents/Personal Project/Crypto-Finance-Tracker/nextjs-crypto-api/components/Coins/index.js */
import styles from './Coins.module.css';
import Link from 'next/link';

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

  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            {/* Coin Info */}
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <div className={styles.coin_info}>
                <h1 className={styles.coin_h1}>{name}</h1>
                <p className={styles.coin_symbol}>{symbol}</p>
              </div>
            </div>
            
            {/* Price */}
            <div className={styles.coin_price}>
              {formatPrice(price)}
            </div>
            
            {/* Volume */}
            <div className={styles.coin_volume}>
              ${formatNumber(volume)}
            </div>
            
            {/* 24h Change */}
            <div className={`${styles.coin_percent} ${priceChange < 0 ? styles.red : styles.green}`}>
              {formatPercentage(priceChange)}
            </div>
            
            {/* Market Cap */}
            <div className={styles.coin_marketcap}>
              ${formatNumber(marketcap)}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;