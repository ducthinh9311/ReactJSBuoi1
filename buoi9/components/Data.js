import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Data() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const param = useParams();
  const getData = async () => {
    const url = `https://645640b35f9a4f23613ecb2d.mockapi.io/list/studentlist/${parseInt(
      param.id
    )}`;
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
  useEffect(() => {
    getData();
  }, [param]);
  return (
    <div>
      <h2>{data && data.name}</h2>
    </div>
  );
}
