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

  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>
                ${price ? price.toLocaleString() : 'N/A'}
              </p>
              <p className={styles.coin_volume}>
                ${formatNumber(volume)}
              </p>

              {priceChange < 0 ? (
                <p className={`${styles.coin_percent} ${styles.red}`}>
                  {formatPercentage(priceChange)}
                </p>
              ) : (
                <p className={`${styles.coin_percent} ${styles.green}`}>
                  {formatPercentage(priceChange)}
                </p>
              )}

              <p className={styles.coin_marketcap}>
                Mkt Cap: ${formatNumber(marketcap)}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;