import React from 'react';
import { Layout } from '../components/Layout';
import cn from 'classnames';
import { ProductDetail } from '../components/ProductDetail';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { useEffect, useState } from 'react';
import { IProduct } from '../models/models';
import { Loader } from '../components/Loader';

export function ProductDetailPage() {
  const params = useParams<'id'>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchDetailProduct() {
    const res = await axios.get<IProduct>(`/products/${params.id}`);
    setProduct(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchDetailProduct().then();
  }, []);

  if (loading) return <Loader />;

  return (
    <Layout>
      <div className={cn('container')}>
        <div>{product?.title}</div>
        <ProductDetail />
      </div>
    </Layout>
  );
}
