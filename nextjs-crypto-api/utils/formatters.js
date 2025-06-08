/**
 * Utility functions for formatting data display
 */

/**
 * Safely formats numbers with locale string
 * @param {number|null|undefined} num - Number to format
 * @returns {string} Formatted number or 'N/A'
 */
export const formatNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) {
    return 'N/A';
  }
  return num.toLocaleString();
};

/**
 * Formats percentage with 2 decimal places
 * @param {number|null|undefined} percent - Percentage to format
 * @returns {string} Formatted percentage or 'N/A'
 */
export const formatPercentage = (percent) => {
  if (percent === null || percent === undefined || isNaN(percent)) {
    return 'N/A';
  }
  return `${percent.toFixed(2)}%`;
};

/**
 * Formats price with currency symbol
 * @param {number|null|undefined} price - Price to format
 * @param {string} currency - Currency symbol (default: '$')
 * @returns {string} Formatted price or 'N/A'
 */
export const formatPrice = (price, currency = '$') => {
  if (price === null || price === undefined || isNaN(price)) {
    return 'N/A';
  }
  return `${currency}${price.toLocaleString()}`;
};

/**
 * Formats large numbers with abbreviations (K, M, B, T)
 * @param {number} num - Number to format
 * @returns {string} Abbreviated number
 */
export const formatLargeNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) {
    return 'N/A';
  }

  const trillion = 1e12;
  const billion = 1e9;
  const million = 1e6;
  const thousand = 1e3;

  if (num >= trillion) {
    return `${(num / trillion).toFixed(1)}T`;
  } else if (num >= billion) {
    return `${(num / billion).toFixed(1)}B`;
  } else if (num >= million) {
    return `${(num / million).toFixed(1)}M`;
  } else if (num >= thousand) {
    return `${(num / thousand).toFixed(1)}K`;
  }
  
  return num.toLocaleString();
};

/**
 * Determines color class based on value (positive/negative)
 * @param {number} value - Value to check
 * @returns {string} CSS class name
 */
export const getColorClass = (value) => {
  if (value > 0) return 'green';
  if (value < 0) return 'red';
  return '';
};