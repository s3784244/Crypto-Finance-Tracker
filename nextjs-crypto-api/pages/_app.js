import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import { FavoritesProvider } from '../context/FavoritesContext' ;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
