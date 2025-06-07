import Coins from './Coins';
import CoinHeader from './CoinHeader';

export default function CoinList({ filteredCoins }) {
  // Ensure filteredCoins is an array and filter out coins with missing essential data
  const validCoins = Array.isArray(filteredCoins) ? filteredCoins.filter(coin => 
    coin && coin.id && coin.name && coin.symbol
  ) : [];

  if (validCoins.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>No coins found.</p>
      </div>
    );
  }

  return (
    <div>
      <CoinHeader />
      {validCoins.map(coin => {
        return (
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
        );
      })}
    </div>
  );
}
