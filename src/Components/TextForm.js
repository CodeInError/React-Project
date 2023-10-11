import React,  { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = (event) => {
        event.preventDefault();
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to LowerCase",  "success");
    }

    const handleClearClick = (event) => {
        event.preventDefault();
        let clearText = "";
        setText(clearText);
        props.showAlert("Text Clear", "danger");
    }
    
    const handleonChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = (event) =>{
        event.preventDefault();
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copy to Clipboard", "success");
    }

    const handleExtraSpaces = (event) => {
        event.preventDefault();
        let removeSpaces = text.split(/[  ]+/);
        setText(removeSpaces.join(" "));
        props.showAlert("Extra Space Removed Sucessfully", "success");
    }
    return (
        <>
        <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <form>
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control"
                    value= {text} id="myBox" rows="8" 
                    onChange={handleonChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-info mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
            </form>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter(word => word.trim() !== "").length} <b>Words</b>, {text.length} <b>Characters</b></p>
            <p>{0.008 * text.split(" ").length} <b>Minutes To Read This Text</b></p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter Something in the text-box above to preview it here "}</p>
        </div>
        </>

    )
}
