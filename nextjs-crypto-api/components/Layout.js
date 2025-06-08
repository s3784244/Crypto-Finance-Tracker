import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import WatchlistButton from './WatchlistButton';
import { useEffect } from 'react';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    // Apply theme classes to html and body elements
    const themeClass = isDark ? 'dark' : 'light';
    document.documentElement.className = themeClass;
    document.body.className = themeClass;
    
    // Also update the background immediately
    document.body.style.backgroundColor = isDark ? '#101012' : '#ffffff';
  }, [isDark]);

  return (
    <div className={`layout ${isDark ? 'dark' : 'light'}`}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className='header'>
        <div className='header_left'>
          <WatchlistButton />
        </div>
        
        <div className='header_center'>
          <Link href='/' passHref>
            <a aria-label="Home">
              <svg
                width='675'
                height='375'
                viewBox='0 0 675 375'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='coin_logo'
              >
                <path
                  d='M217 125.5L446.5 5L666.5 125.5L446.5 250L217 125.5Z'
                  stroke='#11FFFF'
                  strokeWidth='8'
                />
                <path
                  d='M9 125.5L238.5 5L458.5 125.5L238.5 250L9 125.5Z'
                  stroke='#11FFFF'
                  strokeWidth='8'
                />
                <line
                  x1='9'
                  y1='125'
                  x2='660'
                  y2='125'
                  stroke='#11FFFF'
                  strokeWidth='6'
                />
                <path
                  d='M124 125.5L353.5 5L573.5 125.5L353.5 250L124 125.5Z'
                  fill='url(#paint0_linear)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear'
                    x1='348.75'
                    y1='5'
                    x2='348.75'
                    y2='250'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#06F0FF' />
                    <stop offset='1' stopColor='#00FFFF' />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </Link>
        </div>

        <div className='header_right'>
          <ThemeToggle />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;