/**
 * CategoryFilter Component - Provides sorting options for cryptocurrency list
 * 
 * Features:
 * - Multiple sorting categories
 * - Responsive design
 * - Accessible form controls
 */

import { useState } from 'react';
import styles from './CategoryFilter.module.css';
import { SORT_CATEGORIES } from '../../utils/constants';

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('market_cap_desc');

  const handleChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    
    if (onCategoryChange) {
      onCategoryChange(newCategory);
    }
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
        aria-label="Sort cryptocurrencies by category"
      >
        {SORT_CATEGORIES.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;