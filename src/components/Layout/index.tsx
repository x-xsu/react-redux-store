import React from 'react';

import styles from './styles.module.scss';
import { Header } from '../Header';

interface PageProps {
  children: React.ReactNode;
}

export function Layout({ children }: PageProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.page}>{children}</div>
    </div>
  );
}
