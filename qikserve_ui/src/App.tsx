import './App.css';
import HomePage from "./pages/HomePage";
import ProductsResource from './services/ProductsResource'
import {useEffect} from "react";

function App() {

  useEffect(() => {
   /* ProductsResource.getAllId('Dwt5F7KAhi').then(response => {
      console.log(response.data.promotions);
    });*/
  });

  return (
    new HomePage().build()
  )
}

export default App;
