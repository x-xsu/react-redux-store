import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../models/models';

import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';
import { ReactComponent as StarSvg } from '../../assets/svg/star.svg';
import { ReactComponent as FavouriteSvg } from '../../assets/svg/like.svg';

interface ProductProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductProps) {
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/product/${product.id}`);

  return (
    <div className={styles.product}>
      <div className={styles.infoTop}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          onClick={clickHandler}
        />
        <div className={styles.rate}>
          <StarSvg />
          <span>{product.rating.rate}</span>
        </div>
        <button className={cn(styles.btnLike)}>
          <FavouriteSvg />
        </button>
      </div>

      <div className={styles.category}>{product.category}</div>

      <div className={styles.title} onClick={clickHandler}>
        {product.title}
      </div>

      <div className={styles.bottom}>
        <div className={styles.price}>$ {product.price}</div>
        <button className={cn('btn', 'btnEmphasize')}>
          <CartSvg />
          Buy now
        </button>
      </div>
    </div>
  );
}
