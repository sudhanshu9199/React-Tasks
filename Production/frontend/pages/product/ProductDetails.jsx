import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { asyncDeleteProduct, asyncUpdateProduct } from "../../src/store/actions/productActions";
const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { productsReducer: {products}, userReducer: { users } } = useSelector((state) => state);
  const product = products?.find((products) => products.id == id);
  console.log('product detail:',product,'user detail:', users);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      desc: product?.desc,
      category: product?.category,
    },
  });
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const UpdateProductHandler = (product) => {
    console.log("here products:", product);
    dispatch(asyncUpdateProduct(id,product));
    // reset();
  };

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigator('/products');
  }

  return product ? (
    <>
      <div className="flex justify-around">
        <div>
          <img src={product.image} alt="" />
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <p>{product.price} rs.</p>
          <button className="bg-blue-800 px-5 py-2 mt-5 active:scale-90">Add to cart</button>
        </div>
      </div>

      <div>
        {users && users?.isAdmin &&         <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="flex flex-col w-1/2"
        >
          <input
            {...register("image")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            type="url"
            placeholder="product image url"
          />
          <input
            {...register("title")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            type="text"
            placeholder="title"
          />
          <input
            {...register("price")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            step={0.1}
            type="number"
            placeholder="0.00"
          />
          <textarea
            {...register("desc")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            placeholder="product details..."
          ></textarea>
          <input
            {...register("category")}
            className="mb-3 outline-0 border-0 border-b p-2 text-4xl"
            type="text"
            placeholder="category..."
          />

          <button>Update Product</button>
          <button type="button" onClick={DeleteHandler}>Delete Product</button>
        </form>}

      </div>
    </>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
