export function ProdCart({prod}) {
    return(
        <div className="layout-inline row">
        <div className="col col-pro layout-inline">
          <img src={prod.img} alt="kitten" />
          <p>{prod.name}</p>
        </div>
        <div className="col col-price col-numeric align-center ">
          <p>{prod.price}</p>
        </div>
        <div className="col col-qty layout-inline">
          <a href="#" className="qty qty-minus">-</a>
          <input type="numeric" defaultValue={1} />
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