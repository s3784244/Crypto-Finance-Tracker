import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        {/* Logo and Brand Section */}
        <div className={styles.footer_brand}>
          <div className={styles.footer_logo}>
            <svg
              width="60"
              height="35"
              viewBox="0 0 675 375"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M217 125.5L446.5 5L666.5 125.5L446.5 250L217 125.5Z"
                stroke="#11FFFF"
                strokeWidth="8"
              />
              <path
                d="M9 125.5L238.5 5L458.5 125.5L238.5 250L9 125.5Z"
                stroke="#11FFFF"
                strokeWidth="8"
              />
              <line
                x1="9"
                y1="125"
                x2="660"
                y2="125"
                stroke="#11FFFF"
                strokeWidth="6"
              />
              <path
                d="M124 125.5L353.5 5L573.5 125.5L353.5 250L124 125.5Z"
                fill="url(#paint0_linear_footer)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_footer"
                  x1="348.75"
                  y1="5"
                  x2="348.75"
                  y2="250"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#06F0FF" />
                  <stop offset="1" stopColor="#00FFFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3 className={styles.footer_title}>Crypto Tracker</h3>
          <p className={styles.footer_description}>
            Your ultimate destination for real-time cryptocurrency market data, 
            insights, and portfolio tracking.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.footer_section}>
          <h4 className={styles.section_title}>Quick Links</h4>
          <ul className={styles.footer_links}>
            <li>
              <Link href="/">
                <a className={styles.footer_link}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/watchlist">
                <a className={styles.footer_link}>My Watchlist</a>
              </Link>
            </li>
            <li>
              <a href="#top" className={styles.footer_link}>Back to Top</a>
            </li>
          </ul>
        </div>

        {/* Features Section */}
        <div className={styles.footer_section}>
          <h4 className={styles.section_title}>Features</h4>
          <ul className={styles.footer_links}>
            <li>
              <span className={styles.footer_link}>Real-time Prices</span>
            </li>
            <li>
              <span className={styles.footer_link}>Market Cap Data</span>
            </li>
            <li>
              <span className={styles.footer_link}>24h Price Changes</span>
            </li>
            <li>
              <span className={styles.footer_link}>Favorites System</span>
            </li>
            <li>
              <span className={styles.footer_link}>Dark/Light Mode</span>
            </li>
          </ul>
        </div>

        {/* Data Source Section */}
        <div className={styles.footer_section}>
          <h4 className={styles.section_title}>Data & Resources</h4>
          <ul className={styles.footer_links}>
            <li>
              <a 
                href="https://www.coingecko.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footer_link}
              >
                Powered by CoinGecko
              </a>
            </li>
            <li>
              <a 
                href="https://nextjs.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footer_link}
              >
                Built with Next.js
              </a>
            </li>
            <li>
              <span className={styles.footer_link}>AUD Currency</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_container}>
          <p className={styles.copyright}>
            © {currentYear} Developed by Kajal Soni.
          </p>
          <div className={styles.footer_credits}>
            <p className={styles.credits_text}>
              Data provided by{' '}
              <a 
                href="https://www.coingecko.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.credits_link}
              >
                CoinGecko
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;