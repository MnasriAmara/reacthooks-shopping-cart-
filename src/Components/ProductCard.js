export function ProdCart() {
    return(
        <div className="layout-inline row">
        <div className="col col-pro layout-inline">
          <img src="http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-my-first-kitten.jpg" alt="kitten" />
          <p>Curious Little Begger</p>
        </div>
        <div className="col col-price col-numeric align-center ">
          <p>£59.99</p>
        </div>
        <div className="col col-qty layout-inline">
          <a href="#" className="qty qty-minus">-</a>
          <input type="numeric" defaultValue={3} />
          <a href="#" className="qty qty-plus">+</a>
        </div>
        <div className="col col-vat col-numeric">
          <p>£2.95</p>          
        </div>
        <div className="col col-total col-numeric">  
          <p>£182.95</p>
        </div>         
      </div>
    )
}