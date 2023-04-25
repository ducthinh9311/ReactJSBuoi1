import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
export default function StudentList() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Lê Gia Bảo",
      isComplete: false,
    },
    {
      id: 2,
      name: "Gió Mùa Thu",
      isComplete: false,
    },
  ]);
  const addList = (textName) => {
    setList([...list, { id: 3, name: textName, isComplete: false }]);
  };
  const deleteList = (id) => {
    const newList = list.filter((stu) => stu.id !== id);
    setList(newList);
  };
  return (
    <div className="studentList">
      <h1 className="title">Student List</h1>
      <FormAdd addList={addList} />
      {list.map((value, index) => {
        return <Student student={value} deleteList={deleteList} 
        key={index}/>;
      })}
    </div>
  );
}
