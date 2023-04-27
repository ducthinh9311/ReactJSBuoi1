import FormAdd2 from "./FormAdd2";
import { useState } from "react";
import Student2 from "./Student2";
export default function StudentList2() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Lê Văn Thỏ",
      isComplete: false,
    },
    {
      id: 2,
      name: "Nguyễn Mèo",
      isComplete: false,
    },
  ]);
  const addList = (textname) => {
    setList([...list, { id: 3, name: textname, isComplete: false }]);
  };
  const deleteList2 = (id) => {
    const newList2 = list.filter((stu) => stu.id !== id);
    setList(newList2);
  };
  return (
    <div className="studentList">
      <h1 className="title">Student List</h1>
      <FormAdd2 addList={addList} />
      {list.map((value, index) => {
        return (
          <Student2 student={value} key={index} deleteList2={deleteList2} />
        );
      })}
    </div>
  );
}
