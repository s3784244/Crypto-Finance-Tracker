import styles from './CoinHeader.module.css';

const CoinHeader = ({ onSort, sortField, sortDirection }) => {
  const handleSort = (field) => {
    if (onSort) {
      onSort(field);
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return '';
    return sortDirection === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <div className={styles.coin_header_container}>
      <div className={styles.coin_header_row}>
        <div className={styles.coin_header_left}>
          <p 
            className={`${styles.coin_header_name} ${onSort ? styles.sortable : ''}`}
            onClick={() => handleSort('name')}
          >
            Name{getSortIcon('name')}
          </p>
        </div>
        <div className={styles.coin_header_data}>
          <p 
            className={`${styles.coin_header_price} ${onSort ? styles.sortable : ''}`}
            onClick={() => handleSort('price')}
          >
            Price{getSortIcon('price')}
          </p>
          <p 
            className={`${styles.coin_header_volume} ${onSort ? styles.sortable : ''}`}
            onClick={() => handleSort('volume')}
          >
            Volume{getSortIcon('volume')}
          </p>
          <p 
            className={`${styles.coin_header_percent} ${onSort ? styles.sortable : ''}`}
            onClick={() => handleSort('change')}
          >
            24h Change{getSortIcon('change')}
          </p>
          <p 
            className={`${styles.coin_header_marketcap} ${onSort ? styles.sortable : ''}`}
            onClick={() => handleSort('marketcap')}
          >
            Market Cap{getSortIcon('marketcap')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;