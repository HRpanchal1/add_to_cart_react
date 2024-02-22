import React from 'react'
import "./style/card.css"

const Card = ({item , addcart}) => {
   console.log(item);
   const {name , price , amount , img } = item
   return (
      <>
         <div className="cards">
            <div className="image_box">
               <img src={img} alt="Image" />
            </div>
            <div className="details">
               <p>{name}</p>
               <p>Price - {price}Rs</p>
               <p>{amount}</p>
               <button onClick={() => addcart(item)}>Add to Cart</button>
            </div>
         </div>
      </>
   );
}

export default Card;