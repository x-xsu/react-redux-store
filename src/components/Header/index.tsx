import React from 'react';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg';

import { Actions } from '../Actions';
import { ProductSearch } from '../ProductsSearch';

export function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const scrollPos = window.scrollY;
      scrollPos > 0 ? setScroll(true) : setScroll(false);
    });
  }, [scroll]);

  return (
    <header className={cn(styles.header, { [styles.headerScroll]: scroll })}>
      <div className={cn('container', styles.container)}>
        <Link to="/" className={styles.logo}>
          <LogoSvg />
          <span>Store</span>
        </Link>
        <ProductSearch />
        <Actions />
      </div>
    </header>
  );
}
