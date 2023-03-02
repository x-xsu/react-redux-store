import React from 'react';
import styles from './styles.module.scss';
import axios from '../../axios';
import { useEffect, useState } from 'react';

export function ProductsCategory() {
  const [category, setCategory] = useState([]);

  async function productsCategory() {
    const res = await axios.get('products/categories').then(res => res.data);
    setCategory(res);
  }

  useEffect(() => {
    productsCategory();
  });

  return (
    <div className={styles.category}>
      {category.map((category, index: number) => (
        <button className={'btn btnBorder'} key={index}>
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
}
