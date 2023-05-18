import axios from "axios";
import { useState, useEffect } from "react";
export default function Api() {
  const [data, setData] = useState(null);
  const [text, setText] = useState("Ha noi");
  const [error, setError] = useState("");
  const getData = async () => {
    const apiKey = "8a9d3b6af083a571d792aa7bd7fd2f1c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        if (error.response.status === "404") {
          setError("invalid city name");
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    // <div>
    //     {data && //get name old tren mockapi.io
    //     data.map((item, index) => {
    //       return (
    //         <h1 key={index}>
    //           {item.name},{item.old}
    //         </h1>
    //       );
    //     })}
    // </div>
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter" && text) {
            getData();
            setText("");
          }
        }}
      />
      {error && <h1>{error}</h1>}
      {data && (
        <>
          <h1>Temp{data.main.temp}</h1>
          <h1>City{data.name}</h1>
          <h1>Country{data.sys.country}</h1>
          <h1>Temp{data.weather[0].description}</h1>
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
        </>
      )}
    </div>
  );
}
