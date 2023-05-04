import { TiDeleteOutline } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";
import FormEdit from "./FormEdit";
export default function Student2(props) {
  const {
    student,
    deleteList2,
    toggle_complete,
    toggle_edit,
    editId,
    editList,
  } = props;
  const isEdit = editId === student.id;
  return (  
    <div className="student">
      {isEdit ? (
        <FormEdit value={student} editList={editList} />
      ) : (
        <>
        <input type="checkbox" checked={student.isComplete?true:false} onChange={()=>toggle_complete(student.id)}/>
          <span
            className={`${student.isComplete ? "complete" : ""}`}
            onClick={() => toggle_complete(student.id)}
            onDoubleClick={()=> toggle_edit(student.id)}
          >
            {student.name}
          </span>
          <BiEditAlt onClick={() => toggle_edit(student.id)} />
          <TiDeleteOutline onClick={() => deleteList2(student.id)} />
        </>
      )}
    </div>
  );
}
