import  PropTypes from "prop-types";
import React from "react";

const styles ={
    li:{
  display: "flex",
  justifyContent: "space-between",
  alinItems: "center",
  padding: ".5rem 1rem",
  border: "1px solid #ccc",
  brderRadius: "4px",
  marginBottom: ".5rem"
    },
    input:{
        marginRight:"1rem"
    }
}



 function TodoItem(props){
    return (

        <li style={styles.li}>
            <span>
                <input type="checkbox"
                 style={styles.input}
                 onChange={()=>props.onChange(props.todo.id) } />
                <strong>{props.index + 1}</strong>
            &nbsp;
            {props.todo.title}
            </span>
            <button className="rm">&times;</button>
            </li> 
           
    )
}


TodoItem.propTypes = {
   todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
} 


export default TodoItem