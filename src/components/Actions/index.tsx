import React from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as FavouriteSvg } from '../../assets/svg/like.svg';
import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';

export function Actions() {
  return (
    <nav className={styles.actions}>
      <Link to="/favourite" className={styles.item}>
        <FavouriteSvg className={styles.iconFav} />
      </Link>
      <Link to="/cart" className={styles.item}>
        <CartSvg className={styles.iconCart} />
      </Link>
    </nav>
  );
}
