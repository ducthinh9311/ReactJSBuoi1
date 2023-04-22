function Box(props) {
  return (
    <div onClick={props.handle_click}>
      <h1>
        Tôi la {props.name} và tuổi là {props.old}
      </h1>
    </div>
  );
}
export default Box;
