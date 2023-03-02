import React from 'react';
import styles from './styles.module.scss';

import { ReactComponent as LoaderSvg } from '../../assets/svg/loader.svg';

export function Loader() {
  return (
    <div className={styles.loader}>
      <LoaderSvg />
    </div>
  );
}
