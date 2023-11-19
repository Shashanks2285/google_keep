
import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props)=>{

    const [note, setnote] =  useState({title:'',content :''});

    const inputEvent = (event)=>{
        const {name,value} = event.target;

        setnote((prevValue)=>{
            return{
                ...prevValue,
                [name]:value,
            };
        });
    };

    const addEvent = ()=>{
        props.passNote(note);
        setnote({
            title:"",
            content:"",
        });
    };

    return(
        <>
        <div className="main_note">
            <form action="">
                <input 
                type="text" 
                placeholder="Title" 
                name="title"
                autoComplete="off" 
                onChange={inputEvent} 
                value={note.title}/>

                <textarea 
                name="content" 
                id="" 
                cols="" 
                rows="" 
                placeholder="Write here..."
                onChange={inputEvent} 
                value={note.content}   
                />
                <Button variant="contained" onClick={addEvent}>   
                    <AddIcon  className="plus_sign"  />
                </Button>
            </form>
        </div>

        </>
    );
};

export default CreateNote;