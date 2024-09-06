'use client'

import { updateCart } from "@/redux/slices/cart";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
    const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCartItem = (product) => {
    console.log("product", product);
    const newProduct = { ...product };
    const newCart = [...cartItems];
    const itemIndx = newCart.findIndex((item) => item.id === newProduct.id);

    if (itemIndx === -1) {
      newProduct.quantity = 1;
      newCart.push(newProduct);
    } else {
      const updatedProduct = {
        ...newCart[itemIndx],
        quantity: newCart[itemIndx].quantity + 1,
      };
      newCart.splice(itemIndx, 1, updatedProduct);
    }

    dispatch(updateCart(newCart));
  };

  const handleQuantity = (flag,product) => {
    if(flag === 'plus'){
        handleCartItem(product)
    }else{
        const newProduct = { ...product };
        const newCart = [...cartItems];
        const itemIndx = newCart.findIndex((item) => item.id === newProduct.id);

        if(newProduct.quantity === 1){
            newCart.splice(itemIndx,1)
        }else{
            const updatedProduct = {
                ...newCart[itemIndx],
                quantity: newCart[itemIndx].quantity - 1,
              };
              newCart.splice(itemIndx, 1, updatedProduct);
        }
        dispatch(updateCart(newCart))
    }
  }

  const emptyCart = () => {
    dispatch(updateCart([]))
}

  return {
    handleCartItem,
    handleQuantity,
    emptyCart
  }
} 