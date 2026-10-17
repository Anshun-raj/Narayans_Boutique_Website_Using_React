import { useState } from "react";
import productImg1 from "../Images/productImg1.jpg";
import productImg2 from "../Images/productImg2.jpg";
import productImg3 from "../Images/productImg3.jpg";
import "../Style/Product.css";
function Product()
{
  return(
    <div className="product">
        <h2>Our Product</h2>
        <div className="productInfo">
           <HocCard1 cmp={Counter}/>
           <HocCard2 cmp={Counter}/>
           <HocCard3 cmp={Counter}/>
        </div>
    </div>
  )
}

function HocCard1(props)
{
  return(
    <div className="productCard">
     <img src={productImg1} alt="product1" title="card"/> 
     <h3>Women Striped Wrap Shirt</h3>
     <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h3>
        <props.cmp />
      </h3>
  </div>
  )
}

function HocCard2(props)
{
  return(
    <div className="productCard">
     <img src={productImg2} alt="product1" title="card"/> 
     <h3>Button-Down Midi Shirt</h3>
     <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h3>
        <props.cmp />
      </h3>
  </div>
  )
}

function HocCard3(props)
{
  return(
    <div className="productCard">
     <img src={productImg3} alt="product1" title="card"/> 
     <h3>Blend Solid Maxi Dress</h3>
     <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h3>
        <props.cmp />
      </h3>
  </div>
  )
}

function Counter()
{
  const[count,setCount]=useState(0);
  return(
    <div>
        <h4>
          {count>=1?"Ordered":"Order Now"}:{count>0?count:'0'}
        </h4>
        <button onClick={()=>setCount(count+1)}>
            +
        </button>
        <button onClick={()=>setCount(count-1)}>
          -
        </button>
    </div>
  )
}
export default Product;