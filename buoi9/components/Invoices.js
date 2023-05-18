import axios from "axios";
import { useState } from "react";
import {Link,Outlet} from "react-router-dom"
export default function Invoices(){
    let list=[]
    const[data,setData]=useState(null)
    const getData = async () => {
        const url = `https://645640b35f9a4f23613ecb2d.mockapi.io/list/studentlist`;
        axios
          .get(url)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((error) => {
            if (error.reponse.status === "404") {
              setError("invalid");
            }
          });
      };
      
      useEffect(()=>{
        getData()
      },[])
      console.log(data)
      return(
        <div>
            <nav>
                {data && data.map((item,index)=>(
                    <Link key={index} to={`/data/${item.id}`}>{item.name}

                    </Link>
                ))}
            </nav>
                    <Outlet/>
        </div>
      )
}