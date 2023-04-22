import "./App.css";
import { useState, useEffect } from "react";
function App() {
  // Buoi 1

  const [x, setX] = useState(0);
  const [text, setText] = useState("Meo");
  const [name, setName] = useState("");
  //To Do List
  const vd=[
    { name: "Heo", old: 2 },
    { name: "Ga", old: 3 },
  ]
  const [list, setList] = useState(()=>{
    const listLocal=JSON.parse(localStorage.getItem("list"))
    return listLocal;
  });
  //
  const [student, setStudent] = useState({
    name: "Nguyễn Hoàng Gia Bảo",
    old: 5,
  });
  const [check, setCheck] = useState(true);
  const handle_Increase = () => {
    setX((pre) => pre + 1); // pre: giá trị trạng thái ban đầu
    setX((pre) => pre + 1);
  };
  const handle_Change_Text = (e) => {
    e.preventDefault(); // hàm ngưng load website
    setText(name);
    setName("");
    setStudent((pre) => ({ ...pre, name: name }));
  };
  const handle_change_name = (event) => {
    setName(event.target.value);
  };
  const handle_toggle_student = () => {
    setCheck((pre) => !pre);
  };

  const handle_add = () => {
    setList((pre) => {
      const newList = [...pre, { name: name, old: 3 }];
      localStorage.setItem("list", JSON.stringify(newList));
      return newList
    });
  };
  //Bai Tap Calculator
  // const [x,setX]=useState(0);
  // const [y,setY]=useState(0);
  // const [kq,setKq]=useState(0);
  // const handle_ChangeX=(e)=>{
  //   setX(e.target.value);
  // }
  // const handle_ChangeY=(e)=>{
  //   setY(e.target.value);
  // }
  // const handle_Plus=(e)=>{
  //   e.preventDefault();
  //   setKq(Number(x)+Number(y));
  // }
  // const handle_Minus=(e)=>{
  //   e.preventDefault();
  //   setKq(Number(x)-Number(y));
  // }
  // const handle_Multiply=(e)=>{
  //   e.preventDefault();
  //   setKq(Number(x)*Number(y));
  // }
  // const handle_Divide=(e)=>{
  //   e.preventDefault();
  //   setKq(Number(x)/Number(y));
  // }

  return (
    // Buoi 1

    <div>
      <h1>{x}</h1>
      {/* <h2>React js</h2>
      <h2>{text}</h2> */}
      <h1>name: {text}</h1>
      <h1>
        Họ và tên: {student["name"]}, Tuổi: {student.old}
        {""}
        {JSON.stringify(student)}// cách 2 hiện thị nhanh
      </h1>
      <button onClick={handle_Increase}>Increase</button>
      <button onClick={handle_Change_Text}>Change Text</button>
      <form onSubmit={handle_Change_Text}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_change_name}
        />
      </form>
      <button onClick={handle_toggle_student}>Toggle Student</button>
      <ul>
        {list.map((st, key) => {
          return (
            <li>
              Name: {st.name}, Tuoi: {st.old}
            </li>
          );
        })}
      </ul>
      <button onClick={handle_add}>Add Student</button>
      <form onSubmit={handle_Change_Text}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_change_name}
        />
      </form>
    </div>

    //Bai tap Calculator
    // <div class="container">
    //   <div class="contain">
    //   <h1>React JS Calculation</h1>
    //   <form>
    //   <input type="value" placeholder="" onChange={handle_ChangeX}></input>
    //     <br></br>
    //     <input type="value" placeholder="" onChange={handle_ChangeY}></input>
    //   </form>
    //   <h1>Total: {kq}</h1>
    //     <button onClick={handle_Plus}>Plus</button>
    //     <button onClick={handle_Minus}>Minus</button>
    //     <button onClick={handle_Multiply}>Multiply</button>
    //     <button onClick={handle_Divide}>Divide</button>
    //     </div>
    // </div>
  );
}

export default App;
