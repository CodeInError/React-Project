import React,  { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = (event) => {
        event.preventDefault();
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleClearClick = (event) => {
        event.preventDefault();
        let clearText = "";
        setText(clearText);
    }
    
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <form>
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control"
                    value= {text} id="myBox" rows="8" 
                    onChange={handleonChange}></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
            </form>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter(word => word.trim() !== "").length} <b>Words</b>, {text.length} <b>Characters</b></p>
            <p>{0.008 * text.split(" ").length} <b>Minutes To Read This Text</b></p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>

    )
}
