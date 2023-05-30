import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Movie() {
  const { show, count } = useContext(AppContext);
  console.log(show);
  return (
    <div>
      <h1>Em La Movie</h1>
    </div>
  );
}
