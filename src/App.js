import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import { Typography } from '@mui/material';


function App() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const data = async () =>{
      const fetch = await fetchProducts();
      setProducts(fetch)
    }
    data();
  },[])


  return (
    <div className="App">
      <h1 >productos</h1>
      
      <header className="App-header" style={{backgroundColor:"lightsteelblue"}}>
      
     {products.map((product, index) => <div style={{backgroundColor:'lightseagreen', height:100, width:"70%", margin: '1%', alignItems:'center', justifyContent:'center'}}>  <Typography style={{alignItems:'center', justifyContent:'center', alignContent:'center', fontSize:'80%' }} key={index}> id: {JSON.stringify(product.product_id)} <br/>  name: {product.product_name} <br/> description: {product.product_description}</Typography></div>)}
      </header>
    </div>
  );
}

export default App;
