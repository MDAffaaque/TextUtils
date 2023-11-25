
// import PropTypes from 'prop-types'
import React, {useState} from 'react'
export default function (props) {
    const [text,setText]=useState("Plzz Enter your Text")
   
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleOnClick=()=>{
        // console.log("Hello clicking button" +text);
        let newTxt=text.toUpperCase();
        setText(newTxt)
        props.showAlert("Converted to Upper case","success");
      }
      const handleLowClick=()=>{
        // console.log("Hello clicking button" +text);
        let newTxt=text.toLowerCase();
        setText(newTxt)
        props.showAlert("Converted to Lower case","success");
      }
      const handleCopy=()=>{
        let txt=document.getElementById('exampleFormControlTextarea1');
        txt.select()
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied text to clipboard","success");
    }
    const handleSpaces=()=>{
      let txt=text.split(/[ ]+/);
     setText(txt.join(' '));
     props.showAlert("Handle spaces","success");
    }
    const handleClear=()=>{
         setText('');
         props.showAlert("Text cleared","success");
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#231937'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor :props.mode==='dark'?'#364b4b':'white' , color:props.mode==='dark'?'#ffd4f5':'#231937'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
    </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleOnClick}>Convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Handle Spaces</button>
      <div className="container" style={{color:props.mode==='dark'?'white':'#231937'}}>
      <h1>Number of words and characters are below</h1>
      <p>Number of words is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Number of characters is {text.length}</p>
      <p>Time required to read these all words is {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Type something above to preview it"}</p>
     </div>
    </>
  )
}
