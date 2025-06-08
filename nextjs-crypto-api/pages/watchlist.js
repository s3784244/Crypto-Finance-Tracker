import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import Layout from '../components/Layout';
import CoinHeader from '../components/CoinHeader';
import Coins from '../components/Coins';
import styles from '../styles/Watchlist.module.css';

const Watchlist = () => {
  const { favorites } = useFavorites();
  const [watchlistCoins, setWatchlistCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWatchlistData = async () => {
    if (favorites.length === 0) {
      setWatchlistCoins([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get coin IDs from favorites
      const coinIds = favorites.map(coin => coin.id).join(',');
      
      // Fetch updated data for favorite coins
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&ids=${coinIds}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setWatchlistCoins(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching watchlist data:', error);
      setError('Failed to load watchlist data. Please try again.');
      // Fallback to stored favorites data
      setWatchlistCoins(favorites);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchlistData();
  }, [favorites]);

  const handleRefresh = () => {
    fetchWatchlistData();
  };

  return (
    <Layout title="My Watchlist - Crypto Tracker">
      <div className={styles.watchlist_page}>
        <h1 className={styles.watchlist_title}>My Watchlist</h1>
        
        {favorites.length === 0 ? (
          <div className={styles.empty_state}>
            <p>Your watchlist is empty!</p>
            <p>Click the heart icon (🤍) next to any cryptocurrency to add it to your watchlist.</p>
          </div>
        ) : (
          <>
            <div className={styles.watchlist_info}>
              <p>{favorites.length} coin{favorites.length !== 1 ? 's' : ''} in your watchlist</p>
              {lastUpdated && (
                <p>Last updated: {lastUpdated.toLocaleTimeString()}</p>
              )}
              <button 
                onClick={handleRefresh} 
                className={styles.refresh_btn}
                disabled={loading}
              >
                {loading ? 'Refreshing...' : 'Refresh Data'}
              </button>
            </div>

            {error && (
              <div className={styles.error_message}>
                {error}
              </div>
            )}

            {loading && favorites.length === 0 ? (
              <div className={styles.loading}>
                Loading your watchlist...
              </div>
            ) : (
              <div className={styles.coins_container}>
                <CoinHeader />
                {watchlistCoins.map(coin => (
                  <Coins
                    key={coin.id}
                    name={coin.name}
                    id={coin.id}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Watchlist;