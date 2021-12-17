//import React from 'react'
import React, { useState } from 'react';
export default function TextForm(props) {
    const handleUpclick=()=>
    {
         let newText=text.toUpperCase();
         console.log("on click  ");
         setText(newText)
         props.showAlert("Converted into Uppercase","success");    
    }
    const handleDownclick=()=>
    {
         let newText=text.toLowerCase();
         console.log("on click  ");
         setText(newText)
         props.showAlert("Converted into Lowercase","success");    
       
    }
    const handleCopyclick=()=>
    {
         var text=document.getElementById("myBox");
         console.log("on click  ");
          text.select();
          text.setSelectionRange(0,9999);
          navigator.clipboard.writeText(text.value);  
         props.showAlert("Converted into Lowercase","success");    
       
        }
    const handleClearclick=()=>
    {
         let newText="";
         console.log("on click  ");
         setText(newText)
         props.showAlert("Cleared Text","success");    
   
        }
    
    const handleonChange=(event)=>
    {
        console.log("on change  ");
        setText(event.target.value);
    }
    const [text,setText]=useState('');    
    return (
    <>
    <div className="container mt-5 my-3" style={{color:props.mode=='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode=='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert Text into UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownclick}>Convert Text into LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearclick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyclick}>Copy Text</button>
               
            </div>
    </div>
    <div className="container mt-5 my-3" style={{color:props.mode=='dark'?'white':'black'}}>
        <h2>Text Summary </h2> 
        <p>{text.length===0?0:text.split(" ").length} word and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Preview </h1> 
        <p>{text.length>0?text:"Enter something in above box to preview it here"}</p>
    </div>    
    </>
    )
}
