import { Prod } from "./Prod"


function ListProd({productlist}){
    return(
        <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap" }}>
          {productlist.map((e)=><Prod produit={e} key={e.id} /> )}
        </div>
    )
}
export default ListProd