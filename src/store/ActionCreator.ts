import axios from '../axios';
import { AppDispatch } from './index';
import { IProduct } from '../models/models';
import { productSlice } from './slices/ProductSlice';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching());
    const response = await axios.get<IProduct[]>('products');
    dispatch(productSlice.actions.productsFetchSuccess(response.data));
  } catch (e) {
    dispatch(productSlice.actions.productsFetchError(e as Error));
  }
};
