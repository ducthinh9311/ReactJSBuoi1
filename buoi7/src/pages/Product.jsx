import { getProductsById } from "./data";
import { useParams } from "react-router-dom";

export default function Product() {
  const param = useParams();
  const data = getProductsById(parseInt(param.id));
  return <div>product detail: {data.name}</div>;
}
