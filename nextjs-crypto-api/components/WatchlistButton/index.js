import Link from 'next/link';
import styles from './WatchlistButton.module.css';

const WatchlistButton = () => {
  return (
    <Link href="/watchlist">
      <a className={styles.watchlist_btn} aria-label="Go to watchlist">
        <span className={styles.btn_text}>My Watchlist</span>
        <span className={styles.btn_icon}>★</span>
      </a>
    </Link>
  );
};

export default WatchlistButton;