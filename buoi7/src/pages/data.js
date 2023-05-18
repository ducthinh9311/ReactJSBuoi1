import axios from "axios"
import { useEffect } from "react"
let list=[{
    id:1,
    name:"products 1",
},
{
    id:2,
    name:"products 2",
},
{
    id:3,
    name:"products 3",
},
{
    id:4,
    name:"products 4",
},]
export const getProducts=()=>{
    return list
}
export const getProductsById=(id)=>{
    return list.find((item)=>item.id===id)
}
