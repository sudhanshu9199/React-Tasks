// Custom Hook
import axios from "../api/axiosConfig";
import { useEffect, useState } from "react";



const useInfiniteProducts = () => {
      const [products, setProducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);
      const fetchProducts = async () => {
        try {
          const { data } = await axios.get(
            `/products?_limit=6&_start=${products.length}`
          );
          if (data.length == 0) {
            sethasMore(false);
          } else {
            sethasMore(true);
            setProducts([...products, ...data]);
          }
        } catch (error) {
          console.log(error);
        }
      };
        useEffect(() => {
    fetchProducts();
  }, []);
  return { products, hasMore, fetchProducts };
}

export default useInfiniteProducts