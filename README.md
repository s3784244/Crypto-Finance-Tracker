# 🚀 Crypto Finance Tracker

A modern, responsive cryptocurrency tracking application built with Next.js that provides real-time market data, portfolio management, and advanced filtering capabilities.

![Crypto Finance Tracker](https://crypto-finance-tracker-bice.vercel.app/)

## ✨ Features

- **Real-time Data**: Live cryptocurrency prices powered by CoinGecko API
- **Portfolio Management**: Add coins to favorites and create a personal watchlist
- **Advanced Filtering**: Sort by market cap, volume, price changes, and more
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Search Functionality**: Quickly find specific cryptocurrencies
- **Interactive UI**: Smooth animations and hover effects

## 🛠️ Tech Stack

- **Frontend**: Next.js 12+, React 18
- **Styling**: CSS Modules with responsive design
- **API**: CoinGecko REST API
- **State Management**: React Context API
- **Storage**: localStorage for persistence
- **Icons**: Custom SVG components

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kajalsoni/crypto-finance-tracker.git
   cd crypto-finance-tracker/nextjs-crypto-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjs-crypto-api/
├── components/           # Reusable UI components
│   ├── CategoryFilter/   # Sorting and filtering
│   ├── CoinHeader/      # Table header with sorting
│   ├── Coins/           # Individual coin row
│   ├── FavoriteButton/  # Heart icon for favorites
│   ├── Footer/          # Page footer
│   ├── Layout/          # Page layout wrapper
│   ├── SearchBar/       # Search input
│   ├── ThemeToggle/     # Dark/light mode switch
│   └── WatchlistButton/ # Navigation to watchlist
├── context/             # React Context providers
│   ├── FavoritesContext.js  # Favorites management
│   └── ThemeContext.js      # Theme state
├── pages/               # Next.js pages
│   ├── api/            # API routes
│   ├── coin/           # Individual coin details
│   ├── watchlist.js    # User's favorite coins
│   ├── index.js        # Home page
│   └── _app.js         # App wrapper
├── styles/             # Global and component styles
│   ├── globals.css     # Global styles
│   └── *.module.css    # Component-specific styles
└── public/             # Static assets
```

## 🎨 Features Deep Dive

### Portfolio Management
- Click the heart icon (🤍) next to any cryptocurrency to add it to your favorites
- Heart turns red (❤️) when added to watchlist
- View all favorites on the dedicated Watchlist page
- Data persists between browser sessions

### Sorting & Filtering
- Sort by Market Cap (High/Low)
- Sort by Volume (High/Low)
- View Top Gainers (24h)
- View Top Losers (24h)
- Real-time search across all cryptocurrencies

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 640px, 768px, 1024px, 1400px+
- Horizontal scrolling tables on small screens
- Optimized touch interactions

### API Configuration
The app uses CoinGecko's free API. No API key required for basic usage.
