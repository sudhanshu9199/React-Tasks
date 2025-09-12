import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { asyncCreateProduct } from '../../src/store/actions/productActions';
const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log('here products:',product);
        dispatch(asyncCreateProduct(product));
        reset();
        navigator('/products');
    }
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)} className='flex flex-col w-1/2'>
        <input {...register('image')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="url" placeholder='product image url'/>
        <input {...register('title')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="text" placeholder='title'/>
        <input {...register('price')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' step={0.1} type="number" placeholder='0.00'/>
        <textarea  {...register('desc')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' placeholder='product details...'></textarea>
        <input {...register('category')} className='mb-3 outline-0 border-0 border-b p-2 text-4xl' type="text" placeholder='category...'/>

        <button>Create Product</button>
    </form>
  )
}

export default CreateProduct