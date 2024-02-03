import './App.css';
import React, { useEffect, useState } from 'react';
import ProductList from './Ecommerce/ProductList';
import Cart from './Ecommerce/Cart';

function App() {

  const [length, setLength] = useState();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showProductList, setShowProductList] = useState(true);
  const [showCart, setShowCart] = useState(false);

  useEffect(()=>{
    const product_details = [
      {
        id: 1,
        product_name: "Peanut",
        product_price: 299,
        product_image: require('./assets/images/product_List/peanut.png')
      },
      {
        id: 2,
        product_name: "Chocolate Bar",
        product_price: 199,
        product_image: require("./assets/images/product_List/chocolate_bar.png")
      },
      {
        id: 3,
        product_name: "Crispy Chips",
        product_price: 149,
        product_image: require("./assets/images/product_List/crispy_chips.png")
      },
      {
        id: 4,
        product_name: "Blueberry Muffin",
        product_price: 99,
        product_image: require("./assets/images/product_List/blubery_muffin.png")
      },
      {
        id: 5,
        product_name: "Fruit Basket",
        product_price: 399,
        product_image: require("./assets/images/product_List/fruit_basket.png")
      },
      {
        id: 6,
        product_name: "Granola Bar",
        product_price: 249,
        product_image: require("./assets/images/product_List/granola_bar.png")
      },
      {
        id: 7,
        product_name: "Coffee Beans",
        product_price: 799,
        product_image: require("./assets/images/product_List/coffe_beans.png")
      },
      {
        id: 8,
        product_name: "Yogurt Cup",
        product_price: 129,
        product_image: require("./assets/images/product_List/yocurd_cub.png")
      },
      {
        id: 9,
        product_name: "Avocado",
        product_price: 349,
        product_image: require("./assets/images/product_List/avacado.png")
      },
      {
        id: 10,
        product_name: "Protein Shake",
        product_price: 499,
        product_image: require("./assets/images/product_List/protein_shake.png")
      },
      {
        id: 11,
        product_name: "Tomato Sauce",
        product_price: 179,
        product_image: require("./assets/images/product_List/tomatto-sauce.png")
      },
      {
        id: 12,
        product_name: "Green Tea",
        product_price: 199,
        product_image: require("./assets/images/product_List/green_tea.png")
      },
      {
        id: 13,
        product_name: "Quinoa",
        product_price: 599,
        product_image: require("./assets/images/product_List/Quinoa.png")
      },
      {
        id: 14,
        product_name: "Honey Jar",
        product_price: 299,
        product_image: require("./assets/images/product_List/honey_jar.png")
      },
      {
        id: 15,
        product_name: "Almond Butter",
        product_price: 449,
        product_image: require("./assets/images/product_List/almond_buttor.png")
      },
      {
        id: 16,
        product_name: "Lemonade",
        product_price: 129,
        product_image: require("./assets/images/product_List/lemonade.png")
      },
      {
        id: 17,
        product_name: "Mixed Nuts",
        product_price: 349,
        product_image: require("./assets/images/product_List/mixed_futs.png")
      },
      {
        id: 18,
        product_name: "Chia Seeds",
        product_price: 279,
        product_image: require("./assets/images/product_List/chia_seeds.png")
      },
      {
        id: 19,
        product_name: "Coconut Water",
        product_price: 199,
        product_image: require("./assets/images/product_List/cocunut_water.png")
      },
      {
        id: 20,
        product_name: "Sourdough Bread",
        product_price: 349,
        product_image: require("./assets/images/product_List/sourdough_bread.png")
      },
      {
        id: 21,
        product_name: "Dried Figs",
        product_price: 179,
        product_image: require("./assets/images/product_List/dried_figs.png")
      },
      {
        id: 22,
        product_name: "Salmon Fillet",
        product_price: 799,
        product_image: require("./assets/images/product_List/saloman_fillet.png")
      },
      {
        id: 23,
        product_name: "Green Smoothie",
        product_price: 249,
        product_image: require("./assets/images/product_List/green_smoothie.png")
      },
      {
        id: 24,
        product_name: "Pasta",
        product_price: 159,
        product_image: require("./assets/images/product_List/pasta.png")
      },
      {
        id: 25,
        product_name: "Greek Yogurt",
        product_price: 199,
        product_image: require("./assets/images/product_List/Greek Yogurt.png")
      },
      {
        id: 26,
        product_name: "Vanilla Ice Cream",
        product_price: 149,
        product_image: require("./assets/images/product_List/vanilla_ice_cream.png")
      },
      {
        id: 27,
        product_name: "Orange Juice",
        product_price: 79,
        product_image: require("./assets/images/product_List/orange_juice.png")
      },
      {
        id: 28,
        product_name: "Popcorn",
        product_price: 99,
        product_image: require("./assets/images/product_List/popcorn.png")
      },
      {
        id: 29,
        product_name: "Cucumber",
        product_price: 49,
        product_image: require("./assets/images/product_List/cucumber.png")
      },
      {
        id: 30,
        product_name: "Cheese Slice",
        product_price: 129,
        product_image: require("./assets/images/product_List/cheese_slice.png")
      }
    
    ];
    setProducts(product_details)
  },[])


  const addToCart = (id) => {
    const addProduct = products.find((item)=>item.id === id)
    setCart([...cart, addProduct]);
  };

  

  const openCart = () => {
    setShowProductList(false)
    setShowCart(true)
  };

  const openProducts = (id) => {
    setShowProductList(true)
    setShowCart(false)
    if(id === 0 ){
      setCart([])
    }
    console.log(id)
  };

  return (
    <>
      {showProductList && <ProductList products={products} addToCart = {addToCart} cart={cart.length} openCart = {openCart}/>}
      {showCart && <Cart  cart = {cart} openProducts = {openProducts}  />}
    </>
  );
}

export default App;
