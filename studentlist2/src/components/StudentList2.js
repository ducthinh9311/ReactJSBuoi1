import FormAdd2 from "./FormAdd2";
import { useState } from "react";
import Student2 from "./Student2";
import uuid from "react-uuid";
import FormEdit from "./FormEdit";
import Footer from "./Footer";
const getList = (stuList, flag) => {
  if (flag === "fillAll") {
    return stuList;
  } else if (flag === "fillNoChecked") {
    return stuList.filter((item) => !item.isComplete);
  } else if (flag === "fillChecked") {
    return stuList.filter((item) => item.isComplete);
  } else {
    return stuList;
  }
};
export default function StudentList2() {
  const [editId, setEditId] = useState("");
  const [flag, setFlag] = useState("filterAll");
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
    {
      id: 3,
      name: "Nguyễn Huou",
      isComplete: false,
    },
  ]);
  console.log(list);

  const addList = (textname) => {
    setList([...list, { id: uuid(), name: textname, isComplete: false }]);
  };
  const deleteList2 = (id) => {
    const newList2 = list.filter((stu) => stu.id !== id);
    setList(newList2);
  };
  const editList = (id, name) => {
    setList(
      list.map((value) =>
        value.id === id ? { ...value, name, isEdit: false } : value
      )
    );
    setEditId("");
  };
  const toggle_edit = (id) => {
    setEditId(id);
  };
  const toggle_complete = (id) => {
    setList(
      list.map((value) =>
        value.id === id ? { ...value, isComplete: !value.isComplete } : value
      )
    );
  };
  const fillAll = () => {
    console.log("meo");
    setFlag("fillAll");
  };
  const fillNoChecked = () => {
    console.log("meo");
    setFlag("fillNoChecked");
  };
  const fillChecked = () => {
    console.log("meo");
    setFlag("fillChecked");
  };
  return (
    <div className="studentList">
      <h1 className="title">Student List</h1>
      <FormAdd2 addList={addList} />
      {getList(list, flag).map((value, index) => (
        // value.isEdit ? (
        //   <FormEdit value={value} editList={editList} key={index} />
        // ) : (
        <Student2
          student={value}
          key={index}
          deleteList2={deleteList2}
          toggle_complete={toggle_complete}
          toggle_edit={toggle_edit}
          editId={editId}
          editList={editList}
        />
      ))}
      <Footer
        fillAll={fillAll}
        fillNoChecked={fillNoChecked}
        fillChecked={fillChecked}
      />
    </div>
  );
}
