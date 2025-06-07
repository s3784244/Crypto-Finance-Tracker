import { useState } from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('market_cap_desc');

  const categories = [
    { value: 'market_cap_desc', label: 'Market Cap (High to Low)' },
    { value: 'market_cap_asc', label: 'Market Cap (Low to High)' },
    { value: 'volume_desc', label: 'Volume (High to Low)' },
    { value: 'price_change_percentage_24h_desc', label: '🚀 Top Gainers (24h)' },
    { value: 'price_change_percentage_24h_asc', label: '📉 Top Losers (24h)' }
  ];

  const handleChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <div className={styles.category_filter}>
      <label htmlFor="category-select" className={styles.category_label}>
        Sort by:
      </label>
      <select 
        id="category-select"
        value={selectedCategory} 
        onChange={handleChange}
        className={styles.category_select}
      >
        {categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;