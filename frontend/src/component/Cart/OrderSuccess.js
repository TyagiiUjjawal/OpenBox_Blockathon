import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
  const { product } = useSelector((state) => state.productDetails);
  console.log(product.price);
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View {product.price}</Link>
    </div>
  );
};

export default OrderSuccess;
