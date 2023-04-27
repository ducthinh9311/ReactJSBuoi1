import FormAdd2 from "./FormAdd2";
import { useState } from "react";
import Student2 from "./Student2";
import uuid from "react-uuid";
import FormEdit from "./FormEdit";
export default function StudentList2() {
  //   const vd1 = [
  //     {
  //       id: 1,
  //       name: "Lê Văn Thỏ",
  //       isComplete: false,
  //     },
  //     {
  //       id: 2,
  //       name: "Nguyễn Mèo",
  //       isComplete: false,
  //     },
  //   ];
  const [list, setList] = useState([
    {
      id: 1,
      name: "Lê Văn Thỏ",
      isComplete: false,
      isEdit: false,
    },
    {
      id: 2,
      name: "Nguyễn Mèo",
      isComplete: false,
      isEdit: false,
    },
  ]);
  console.log(list);
  //   const [list, setList] = useState(() => {
  //     let listLocal2;
  //     if (localStorage.getItem("list")) {
  //       listLocal2 = JSON.parse(localStorage.getItem("list"));
  //     } else {
  //       listLocal2 = vd1;
  //     }
  //     return listLocal2;
  //   });
  const addList = (textname) => {
    setList([...list, { id: uuid(), name: textname, isComplete: false }]);
    // localStorage.setItem("list", JSON.stringify(addList));
    // return addList;
  };
  const deleteList2 = (id) => {
    const newList2 = list.filter((stu) => stu.id !== id);
    setList(newList2);
  };
  const editList=(id,name)=>{
    setList(
        list.map((value)=> value.id===id?{...value,name,isEdit:false}:value)
    )
  }
  const toggle_edit = (id) => {
    setList(
      list.map((value) =>
        value.id === id ? { ...value, isEdit: !value.isEdit } : value
      )
    );
  };
  const toggle_complete = (id) => {
    setList(
      list.map((value) =>
        value.id === id ? { ...value, isComplete: !value.isComplete } : value
      )
    );
  };
 
  return (
    <div className="studentList">
      <h1 className="title">Student List</h1>
      <FormAdd2 addList={addList} />
      {list.map((value, index) => 
        value.isEdit ? (
          <FormEdit value={value} editList ={editList} key={index} />
        ) : (
          <Student2
            student={value}
            key={index}
            deleteList2={deleteList2}
            toggle_complete={toggle_complete}
            toggle_edit={toggle_edit}
          />
        )
      )}
    </div>
  );
}
