import { getProducts } from "./data"
import { Link,Outlet } from "react-router-dom"
export default function Products(){
    const data=getProducts();
    return(
        <div>Products
            <nav>
                {
                    data.map((item,index)=>(
                        <Link key={index} to={`/product/${item.id}`}>
                        {item.name}
                        </Link>
                    ))
                }
            </nav>
            <Outlet/>
        </div>
    )
}
