import React from 'react'
import list from "../Backend/Data"
import Card from './Card';

const Myweb = ({addcart}) => {

 
    return ( 
        <>
         <h1>mydata</h1>
         <section>
            {
                list.map((item) =>(
                     <Card item={item} addcart={addcart}/>
                ))
            }
         </section>
        </>
     );
}
 
export default Myweb;