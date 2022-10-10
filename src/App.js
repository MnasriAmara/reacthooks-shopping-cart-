import "./App.css";
import ListProd from "./Components/ListProd";
import { list } from "./Data";
import { useState } from "react";
import FilterProduct from "./Components/FilterProduct";
import { Panier } from "./Components/Panier";

function App() {
  const [productlist, setProductlist] = useState(list);
  const [searchbyname, setSearchbyname] = useState("");
  const handlefilterByN = (name) => {
    setSearchbyname(name);
  };
  const [searchbyrate, setSearchbyrate] = useState(0);
  const handlefilterByR = (rate) => {
    setSearchbyrate(rate);
  };
  const [searchbycat, setSearchbycat] = useState("");
  const handlefilterByCat = (category) => {
    setSearchbycat(category);
  };
  const [panier, setPanier] = useState([]);
  const handleaddpanier = (newprod) => {
    setPanier([...panier,newprod]);
  };
  

  return (
    <div className="App">
      <FilterProduct
        fbn={handlefilterByN}
        fbr={handlefilterByR}
        fbc={handlefilterByCat}
      />
      <ListProd addpanier={handleaddpanier}
        productlist={searchbycat? 
          productlist.filter(
          (prod) =>
            prod.name.toLowerCase().includes(searchbyname.toLowerCase()) &&
            prod.rate >= searchbyrate && prod.category === searchbycat
        ):
        productlist.filter(
          (prod) =>
            prod.name.toLowerCase().includes(searchbyname.toLowerCase()) &&
            prod.rate >= searchbyrate 
        )}
      />
      <Panier panier={panier}/>
    </div>
  );
}

export default App;
