import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Bottle Water',
    image: "https://www.seriouseats.com/images/2017/06/20170620-water-bottle-vicky-wasik-group1-750x563.jpg",
    description: "No matter where you go, water is essential. Buy some for a long space trip!",
    price: "Price:3",
  },

  {
    item: 'Uniqlo Heattech Underwear',
    image: "https://ct.yimg.com/xd/api/res/1.2/mBXmKBt.5oTn0QXFpvtH8w--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD0xMDgwO3E9ODU7cm90YXRlPWF1dG87dz0xMDgw/https://s.yimg.com/ob/image/5a6d6862-4e58-46e0-9c66-183926364630.jpg",
    description: "The best tool to fight against the extreme tempreture on Mars",
    price: "Price:100",
  },

  {
    item: "The North Face Jacket",
    image: "https://cdn.shopify.com/s/files/1/0011/9026/4844/products/IMG_8059_480x480.JPG?v=1549320790",
    description: "Gore-Tex Technology, Waterproof, useful for the life in outerspace",
    price: "Price:1000",
  },

  {
    item: "Powerbank",
    image: "https://intellishoppers.com/wp-content/uploads/2018/11/powerbank-all-1198x800.jpg",
    description: "Charge for your phone! 20000mAh big powerbank. Necessary for long journey!",
    price: "Price:200",
  },

  {
    item: "iPad Pro",
    image: "https://cdn.vox-cdn.com/thumbor/_jlkBlLcbMPIKzoR9dkM2sBkYPc=/0x0:2040x1360/1220x813/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64988828/akrales_181102_3064_0082_hero.0.jpg",
    description: "Watch Moive! Play Games! Share space life with Your friends! You need iPad",
    price: "Price:8000",
  },

  {
    item: "Space Suit",
    image: "http://payload96.cargocollective.com/1/1/34851/4228611/NK_Biosuit_01.jpg",
    description: "Space suit for spacewalking. Super fit and strong!",
    price: "Price:20000",
  },



]

function App() {
  return (
    <div className="background">
      <div className="app">
        <h1> Taobao2100: Mars Shopping Cart</h1>
        <SearchForm />
        <ShoppingCart />
      </div>
    </div>  
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      {shoppingCartItems.map(Product)}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <img src={props.image} width="100"/>

      <div className="item">
      <h3 className="title"> {props.item}</h3>
      </div>

      <div className="detail">
      <p> {props.description}</p>
      </div>

      <div className="money">
      <p> {props.price}</p>
      </div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
