import { TiDeleteOutline } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";
export default function Student2(props) {
  const { student, deleteList2, toggle_complete,toggle_edit } = props;
  return (
    <div className="student">
      <span
        className={`${student.isComplete ? "complete" : ""}`}
        onClick={() => toggle_complete(student.id)}
      >
        {student.name}
      </span>
      <BiEditAlt onClick={() => toggle_edit(student.id)} />
      <TiDeleteOutline onClick={() => deleteList2(student.id)} />
    </div>
  );
}
