import "./panier.css"
import { ProdCart } from "./ProductCard"

export function Panier() {
    return (
        <div className="pannier">
           <div className="container">
  <div className="heading">
    <h1>
      <span className="shopper">s</span> Shopping Cart
    </h1>
    <a href="#" className="visibility-cart transition is-open">X</a>    
  </div>
  <div className="cart transition is-open">
    <a href="#" className="btn btn-update">Update cart</a>
    <div className="table">
      <div className="layout-inline row th">
        <div className="col col-pro">Product</div>
        <div className="col col-price align-center "> 
          Price
        </div>
        <div className="col col-qty align-center">QTY</div>
        <div className="col">VAT</div>
        <div className="col">Total</div>
      </div>
      <ProdCart/>
      
      
      <div className="tf">
        <div className="row layout-inline">
          <div className="col">
            <p>VAT</p>
          </div>
          <div className="col" />
        </div>
        <div className="row layout-inline">
          <div className="col">
            <p>Shipping</p>
          </div>
          <div className="col" />
        </div>
        <div className="row layout-inline">
          <div className="col">
            <p>Total</p>
          </div>
          <div className="col" />
        </div>
      </div>         
    </div>
    <a href="#" className="btn btn-update">Update cart</a>
  </div>
</div>

  

        </div>
    )
    
}