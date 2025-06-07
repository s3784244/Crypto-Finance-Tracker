export default async function handler(req, res) {
  const { category = 'market_cap_desc' } = req.query
  
  try {
    // Always fetch with a large dataset for sorting
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    let coins = await response.json()
    
    // Ensure we have an array
    if (!Array.isArray(coins)) {
      console.error('API returned non-array data:', coins);
      return res.status(500).json({ error: 'Invalid data format from external API' });
    }
    
    // Filter out coins with missing data
    coins = coins.filter(coin => 
      coin && 
      coin.id && 
      coin.name && 
      coin.symbol &&
      coin.current_price !== null
    );
    
    // Sort based on category
    switch(category) {
      case 'market_cap_desc':
        coins.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0));
        break;
      case 'market_cap_asc':
        coins.sort((a, b) => (a.market_cap || 0) - (b.market_cap || 0));
        break;
      case 'volume_desc':
        coins.sort((a, b) => (b.total_volume || 0) - (a.total_volume || 0));
        break;
      case 'price_change_percentage_24h_desc': // Top Gainers
        coins.sort((a, b) => (b.price_change_percentage_24h || -100) - (a.price_change_percentage_24h || -100));
        break;
      case 'price_change_percentage_24h_asc': // Top Losers
        coins.sort((a, b) => (a.price_change_percentage_24h || 100) - (b.price_change_percentage_24h || 100));
        break;
      default:
        coins.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0));
    }
    
    // Return top 50 results
    const result = coins.slice(0, 50);
    
    res.status(200).json(result)
  } catch (error) {
    console.error('Error fetching coins by category:', error);
    res.status(500).json({ error: 'Failed to fetch coins' })
  }
}