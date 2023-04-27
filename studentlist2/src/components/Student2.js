import { TiDeleteOutline } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";
export default function Student2(props) {
  const { student, deleteList2 } = props;
  return (
    <div className="student">
      <span>{student.name}</span>
      <BiEditAlt />
      <TiDeleteOutline onClick={() => deleteList2(student.id)} />
    </div>
  );
}
