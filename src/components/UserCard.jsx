function UserCard(props) {
    return (
      <div style={{ 
        border: "2px solid #aaa", 
        padding: "10px", 
        margin: "10px", 
        borderRadius: "10px", 
        width: "200px" 
      }}>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <button onClick={props.onDelete} style={{ backgroundColor: "green", color: "white" }}>
        Delete
      </button>
      </div>
    );
  }
  
  export default UserCard;
  