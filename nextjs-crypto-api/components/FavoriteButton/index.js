import { createContext, useContext, useState, useEffect } from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import styles from './FavoriteButton.module.css';



const FavoriteButton = ({ coin }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isCurrentlyFavorite = isFavorite(coin.id);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the heart
    e.stopPropagation(); // Stop event bubbling
    toggleFavorite(coin);
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.favorite_btn} ${isCurrentlyFavorite ? styles.favorite : styles.not_favorite}`}
      aria-label={isCurrentlyFavorite ? "Remove from favorites" : "Add to favorites"}
      title={isCurrentlyFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <span className={styles.heart_icon}>
        {isCurrentlyFavorite ? '❤️' : '🤍'}
      </span>
    </button>
  );
};

export default FavoriteButton;