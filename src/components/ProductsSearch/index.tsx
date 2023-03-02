import React from 'react';
import styles from './styles.module.scss';

import { ReactComponent as SearchSvg } from '../../assets/svg/loupe.svg';
import { useInput } from '../../hooks/input';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/debounce';
import { IProduct } from '../../models/models';
import { useNavigate } from 'react-router-dom';

import axios from '../../axios';

export function ProductSearch() {
  const input = useInput('');
  const [results, setResults] = useState<IProduct[]>([]);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const debounced = useDebounce<string>(input.value);

  async function searchProducts(search: string) {
    const res = await axios
      .get<IProduct[]>('products')
      .then(res =>
        res.data.filter(product =>
          product.title.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    setResults(res);
  }

  useEffect(() => {
    if (debounced.length >= 3) {
      searchProducts(debounced).then(() => setDropdown(true));
    } else {
      setDropdown(false);
    }
  }, [debounced]);

  return (
    <div className={styles.search}>
      <div className={styles.boxInput}>
        <input
          type="text"
          className={''}
          placeholder={'Search products'}
          {...input}
        />
        <button>
          <SearchSvg />
        </button>
      </div>

      {dropdown && (
        <ul className={styles.dropdown}>
          {results.map(product => (
            <li
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.title} />
              <span>{product.title}</span>
              <span>$ {product.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
