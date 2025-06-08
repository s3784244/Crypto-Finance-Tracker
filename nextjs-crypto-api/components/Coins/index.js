/**
 * Coins Component - Displays individual cryptocurrency data in a table row
 * 
 * Features:
 * - Responsive grid layout
 * - Favorite button integration
 * - Formatted price and percentage display
 * - Click navigation to coin details
 */

import styles from './Coins.module.css';
import Link from 'next/link';
import FavoriteButton from '../FavoriteButton';
import { formatNumber, formatPercentage, formatPrice } from '../../utils/formatters';

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
  // Create coin object for favorites functionality
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
        {/* Coin Information with Favorite Button */}
        <div className={styles.coin}>
          <img 
            src={image} 
            alt={`${name} logo`} 
            className={styles.coin_img}
            onError={(e) => {
              e.target.src = '/fallback-coin-icon.png'; // Add fallback image
            }}
          />
          <div className={styles.coin_info}>
            <h1 className={styles.coin_h1}>{name}</h1>
            <p className={styles.coin_symbol}>{symbol}</p>
          </div>
          <div className={styles.favorite_container}>
            <FavoriteButton coin={coinData} />
          </div>
        </div>
        
        {/* Price */}
        <Link href={`/coin/${id}`}>
          <a className={styles.coin_link} aria-label={`View ${name} details`}>
            <div className={styles.coin_price}>
              {formatPrice(price)}
            </div>
          </a>
        </Link>
        
        {/* Volume */}
        <Link href={`/coin/${id}`}>
          <a className={styles.coin_link} aria-label={`View ${name} volume details`}>
            <div className={styles.coin_volume}>
              ${formatNumber(volume)}
            </div>
          </a>
        </Link>
        
        {/* 24h Price Change */}
        <Link href={`/coin/${id}`}>
          <a className={styles.coin_link} aria-label={`View ${name} price change`}>
            <div className={`${styles.coin_percent} ${priceChange < 0 ? styles.red : styles.green}`}>
              {formatPercentage(priceChange)}
            </div>
          </a>
        </Link>
        
        {/* Market Cap */}
        <Link href={`/coin/${id}`}>
          <a className={styles.coin_link} aria-label={`View ${name} market cap details`}>
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