/**
 * FavoritesContext - Manages user's favorite cryptocurrencies
 * 
 * Provides functionality to:
 * - Add/remove coins from favorites
 * - Check if a coin is favorited
 * - Persist favorites in localStorage
 * - Share favorites state across the application
 */

import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(null);

// Storage key for localStorage
const STORAGE_KEY = 'cryptoFavorites';

/**
 * Custom hook to access favorites context
 * @returns {Object} Favorites context value
 * @throws {Error} If used outside FavoritesProvider
 */
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

/**
 * FavoritesProvider component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(STORAGE_KEY);
      if (savedFavorites) {
        const parsed = JSON.parse(savedFavorites);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      setFavorites([]);
    }
  }, []);

  /**
   * Adds a coin to favorites list
   * @param {Object} coin - Coin object to add
   */
  const addToFavorites = (coin) => {
    try {
      const newFavorites = [...favorites, coin];
      setFavorites(newFavorites);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error adding coin to favorites:', error);
    }
  };

  /**
   * Removes a coin from favorites list
   * @param {string} coinId - ID of coin to remove
   */
  const removeFromFavorites = (coinId) => {
    try {
      const newFavorites = favorites.filter(coin => coin.id !== coinId);
      setFavorites(newFavorites);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error removing coin from favorites:', error);
    }
  };

  /**
   * Checks if a coin is in favorites
   * @param {string} coinId - ID of coin to check
   * @returns {boolean} True if coin is favorited
   */
  const isFavorite = (coinId) => {
    return favorites.some(coin => coin.id === coinId);
  };

  /**
   * Toggles a coin's favorite status
   * @param {Object} coin - Coin object to toggle
   */
  const toggleFavorite = (coin) => {
    if (isFavorite(coin.id)) {
      removeFromFavorites(coin.id);
    } else {
      addToFavorites(coin);
    }
  };

  const contextValue = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};