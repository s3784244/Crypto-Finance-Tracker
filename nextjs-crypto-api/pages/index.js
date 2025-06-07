import { useState } from 'react';
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList'
import CategoryFilter from '../components/CategoryFilter'
import Layout from '../components/Layout'

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')
  const [coins, setCoins] = useState(filteredCoins || []) // Add default empty array
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Ensure coins is always an array before filtering
  const allCoins = Array.isArray(coins) ? coins.filter(coin => 
    coin && coin.name && coin.name.toLowerCase().includes(search.toLowerCase())
  ) : []

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  const handleCategoryChange = async (category) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/coins-by-category?category=${category}`)
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const newCoins = await res.json()
      
      // Ensure we have an array
      if (Array.isArray(newCoins)) {
        setCoins(newCoins)
      } else {
        console.error('API returned non-array data:', newCoins)
        setError('Invalid data received from server')
        setCoins([])
      }
    } catch (error) {
      console.error('Error fetching coins by category:', error)
      setError('Failed to load coins. Please try again.')
      setCoins([]) // Set empty array on error
    }
    setLoading(false)
  }

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder='Search'
          onChange={handleChange}
        />
        <CategoryFilter onCategoryChange={handleCategoryChange} />
        {error && (
          <p style={{ color: 'red', textAlign: 'center', margin: '1rem 0' }}>
            {error}
          </p>
        )}
        {loading ? (
          <p style={{ textAlign: 'center', margin: '2rem 0' }}>Loading...</p>
        ) : (
          <CoinList filteredCoins={allCoins} />
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const filteredCoins = await res.json()

    // Ensure we return an array
    return {
      props: {
        filteredCoins: Array.isArray(filteredCoins) ? filteredCoins : []
      }
    }
  } catch (error) {
    console.error('Error fetching initial coins:', error);
    return {
      props: {
        filteredCoins: []
      }
    }
  }
}