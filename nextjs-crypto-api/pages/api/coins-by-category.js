/**
 * API route for fetching and sorting cryptocurrency data
 * Supports various sorting categories including market cap, volume, and price changes
 */

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';
const DEFAULT_PER_PAGE = 100;
const DEFAULT_CURRENCY = 'aud';

/**
 * Validates and filters coin data to ensure data integrity
 * @param {Array} coins - Raw coin data from API
 * @returns {Array} Filtered coins with valid data
 */
const validateAndFilterCoins = (coins) => {
  if (!Array.isArray(coins)) {
    throw new Error('Invalid data format: expected array');
  }

  return coins.filter(coin => 
    coin?.id && 
    coin?.name && 
    coin?.symbol &&
    coin?.current_price !== null &&
    coin?.current_price !== undefined
  );
};

/**
 * Sorts coins based on the specified category
 * @param {Array} coins - Array of coin objects
 * @param {string} category - Sorting category
 * @returns {Array} Sorted coins
 */
const sortCoinsByCategory = (coins, category) => {
  const sortingStrategies = {
    'market_cap_desc': (a, b) => (b.market_cap || 0) - (a.market_cap || 0),
    'market_cap_asc': (a, b) => (a.market_cap || 0) - (b.market_cap || 0),
    'volume_desc': (a, b) => (b.total_volume || 0) - (a.total_volume || 0),
    'price_change_percentage_24h_desc': (a, b) => (b.price_change_percentage_24h || -100) - (a.price_change_percentage_24h || -100),
    'price_change_percentage_24h_asc': (a, b) => (a.price_change_percentage_24h || 100) - (b.price_change_percentage_24h || 100)
  };

  const sortFunction = sortingStrategies[category] || sortingStrategies['market_cap_desc'];
  return [...coins].sort(sortFunction);
};

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { category = 'market_cap_desc' } = req.query;

  try {
    const response = await fetch(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=${DEFAULT_CURRENCY}&order=market_cap_desc&per_page=${DEFAULT_PER_PAGE}&page=1&sparkline=false`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status} ${response.statusText}`);
    }

    const rawCoins = await response.json();
    const validCoins = validateAndFilterCoins(rawCoins);
    const sortedCoins = sortCoinsByCategory(validCoins, category);
    
    // Return top 50 results for performance
    const result = sortedCoins.slice(0, 50);
    
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching coins by category:', error);
    
    // Return appropriate error response
    const statusCode = error.message.includes('CoinGecko API error') ? 502 : 500;
    res.status(statusCode).json({ 
      error: 'Failed to fetch cryptocurrency data',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}