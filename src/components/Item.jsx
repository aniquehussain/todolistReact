import React from "react";


function Item(props){
  
  return <div onClick={() => props.onChecked(props.id)} ><li>{props.listItem}</li></div>

}

export default Item;