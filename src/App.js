import './App.css';
import ListProd from './Components/ListProd';
import {list} from "./Data"
import {useState} from "react"
import FilterProduct from './Components/FilterProduct';
import { Panier } from './Components/Panier';

function App() {
  const [productlist,setProductlist]=useState(list)
  return (
    <div className="App">
      <FilterProduct/>
        <ListProd productlist={productlist}/>
        <Panier/>
    </div>
  );
}

export default App;
