import { TiDeleteOutline } from "react-icons/ti";
import { BiEditAlt } from "react-icons/bi";
export default function Student(props) {
  const { student, deleteList } = props;
  return (
    <div className="student">
      <span>{student.name}</span>
      <BiEditAlt />
      <TiDeleteOutline onClick={() => deleteList(student.id)} />
    </div>
  );
}
