import React from 'react';
import styles from './styles.module.scss';

import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { ProductCard } from '../ProductCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/ActionCreator';

export function ProductsList() {
  const dispatch = useAppDispatch();
  const { loading, error, products } = useAppSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.productList}>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {/*<button className={ cn("btn", styles.btn) } onClick={ showMoreProducts }>Show more</button>*/}
    </div>
  );
}
