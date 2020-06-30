import React, { useState } from "react";
import Item from "./Item";
import InputArea from "./InputArea";


function App() {

  
  const [items, setItems] = useState([]);

 
  function addItem(inputText){
       
    setItems(function (prevItems){
       
      return [...prevItems, inputText];
    })

  }  
  
  function deleteItem(id){
    
    setItems((prevItems) => {
      return prevItems.filter((item,index) => {
        return index !== id;
      })
    })
    
    
    console.log("clicked");
    
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem}/>
      <div>
        <ul>
          {items.map((item,index) => {
           return <Item 
           key={index}
           id={index}
           listItem={item}
           onChecked={deleteItem}
           / >;
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
