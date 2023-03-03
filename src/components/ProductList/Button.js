function Button(props) {
   //console.log("button was clicked");
  return (
    <button onClick={props.eventHandler} className="btn btn-primary" disabled={props.disable} >
      {props.children}
    </button>
  );
}

export default Button;
