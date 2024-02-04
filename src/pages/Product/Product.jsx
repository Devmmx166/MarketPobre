import { useState, useEffect } from "react";
import "./Product.css";
import fetchProducts from "../../Api/fetchProducts ";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/loading/loading";
import { Navigate, useNavigate } from "react-router-dom";




function Product() {
Navigate = useNavigate()
const [procutid, setProductId] = useState('')




 return   (
    <>
  const [products, setProducts] = useState([]);
    </>
  );

}



export default Product;