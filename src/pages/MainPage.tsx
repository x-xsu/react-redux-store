import React from 'react';
import { Layout } from '../components/Layout';
import { ProductsList } from '../components/ProductsList';
// import { ProductsFilter } from "../components/ProductsFilter";
import { ProductsCategory } from '../components/ProductsCategory';

export function MainPage() {
  return (
    <Layout>
      <div className="container">
        <section>
          <h2>Our Products</h2>

          <ProductsCategory />
          {/*<ProductsFilter />*/}

          <ProductsList />
        </section>
      </div>
    </Layout>
  );
}
