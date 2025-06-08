/**
 * Application constants and configuration
 */

// API Configuration
export const API_CONFIG = {
  COINGECKO_BASE_URL: 'https://api.coingecko.com/api/v3',
  DEFAULT_CURRENCY: 'aud',
  DEFAULT_PER_PAGE: 50,
  CACHE_DURATION: 60000, // 1 minute in milliseconds
};

// Local Storage Keys
export const STORAGE_KEYS = {
  FAVORITES: 'cryptoFavorites',
  THEME: 'theme',
};

// Theme Configuration
export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

// Responsive Breakpoints
export const BREAKPOINTS = {
  SMALL_MOBILE: 479,
  MEDIUM_MOBILE: 639,
  LARGE_MOBILE: 767,
  TABLET: 1023,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1400,
};

// Sorting Categories
export const SORT_CATEGORIES = [
  { value: 'market_cap_desc', label: 'Market Cap (High to Low)' },
  { value: 'market_cap_asc', label: 'Market Cap (Low to High)' },
  { value: 'volume_desc', label: 'Volume (High to Low)' },
  { value: 'price_change_percentage_24h_desc', label: '🚀 Top Gainers (24h)' },
  { value: 'price_change_percentage_24h_asc', label: '📉 Top Losers (24h)' }
];

// Color Scheme
export const COLORS = {
  PRIMARY: '#2fffe5',
  PRIMARY_HOVER: '#00FFFF',
  SECONDARY: '#00bcd4',
  SUCCESS: '#22c55e',
  ERROR: '#ef4444',
  DARK_BG: '#101012',
  LIGHT_BG: '#ffffff',
};