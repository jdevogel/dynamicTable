import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
 const [ orders, setOrders ] = useOrder([]);
 
 useEffect(() => {
   const fetchata = async () => {
 
       const response = await fetch(
         'https://api.arbororders.com/orderdata/orders');
          const data = await response.json();

          //use only 3 sample data
          setOrders( data.slice( 0,3) )
      
   }
 
   // Call the function
   fetchata();
}, []);
 
 return (
   <div className="App">
     <h1>List of Orders</h1>
     <table>
       <thead>
         <tr>
           <th>Order Number</th>
           <th>Total Cost</th>
           <th>Order Date</th>
         </tr>   
       </thead>   
       <tbody>
         {
         countries.map( (country,key) =>
         <tr key={key}>
             <td className='table-data'>{orders.orderNumber}</td>
             <td className='table-data'>{orders.totalCost}</td>
             <td className='table-data'>{orders.orderDate}</td>
         </tr>
         )
       }
       </tbody>
     </table>
   </div>
 );
}
