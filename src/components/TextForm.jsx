import React,{useState} from 'react'
export default function TextForm(props) {

    const handleSentenceCaseClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
        props.showAlert("Converted to sentence case", "success")
    };
    const handleUpClick = ()=> {       
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted uppercase", "success")

        }
        const handleDownClick = ()=> {           
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase", "success")
 
        }
        const hannleCopyClick = ()=> {           
            navigator.clipboard.writeText(text);
            props.showAlert("copy to clipboard", "success")

        }
        const handleClearClick = () => {
            let newText = '';
            setText(newText)
            props.showAlert("Text cleard", "success")

        }
    const handleOnChange = (event)=> {        
        setText(event.target.value)
    }


    const[text, setText] = useState('')
    return (
        <div className="container" style={{color: props.mode ==='dark'? 'white':'#042743'}} >
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control my-3" placeholder='Enter text here' value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
                {console.log(props)}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    
                    <button id='one' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCaseClick}>Convert to sentencecase</button>
                    <button id='two' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button id='three' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button id='four' disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={hannleCopyClick}> Copy to Clipboard </button>
                    <button id='five' disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                </div>
                <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}></div>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to priview!"}</p>
               

            </div>
        </div>  
    )
}

