import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product.js';
import ProductList from './components/ProductList.js';
import React,{useState} from 'react';
import Footer from "./components/Footer.js"
import AddItem from './components/AddItem.js';

function App() {
  const products = [
    {
    price:99999,
    name:"Iphone 10s Max ",
    quantity:0,
  },
  {
    price:99999,
    name:"Redmi Note 10s Max",
    quantity:0,
  }
  ];
  let [productList,setProductList]= useState(products);
  let [totalAmount,setTotalAmount]= useState(0);

  const incrementQuantity=(index) =>{
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  newProductList[index].quantity++;
  newTotalAmount+=newProductList[index].price
   setTotalAmount(newTotalAmount);
  setProductList(newProductList);
  };

  const decrementQuantity=(index) =>{
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  if(newProductList[index].quantity > 0 )
   newProductList[index].quantity-- ;
  newTotalAmount-=newProductList[index].price

  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
 
}
 const resetQuantity=()=>{
  let newProductList = [...productList];
  newProductList.map((products)=>{
    products.quantity=0;
  })
setProductList(newProductList);
setTotalAmount(0);
 }
 const removeItem=(index)=>{
 let newProductList = [...productList];
 let newTotalAmount = totalAmount;
 newTotalAmount-=newProductList[index].quantity * newProductList[index].price;
 newProductList.splice(index,1);
 console.log(newProductList)
 setProductList(newProductList);
 setTotalAmount(newTotalAmount);
 }
 const addItem=(name,price)=>{
let newProductList = [...productList];
newProductList.push({
  price:price,
  name:name,
  quantity:0
});
setProductList(newProductList);
 }

  return (
     <>
  <main className="container mt-5">
   <Navbar/>
   <AddItem addItem={addItem}/>
   <ProductList productList={productList}
   incrementQuantity={incrementQuantity}
   decrementQuantity={decrementQuantity} removeItem={removeItem}/>
<Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
   </main>
   </>
  );

};
export default App;
