import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const App = ()=>{
  const [addItem, setaddItem]= useState([]);


  const addNote=(note)=>{
    setaddItem((prevData)=>{
      return [...prevData,note];
    });
  };

  const onDelete = (id)=>{
      setaddItem((oldData)=>oldData.filter((curreData,indx)=>
      {return indx !==id;}));
  };

  return(
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
      {addItem.map((val,index)=>{
        return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem = {onDelete}
        />
      })}
      <Footer/>
    </>
  );
};

export default App;