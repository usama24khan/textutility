import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');
    const upper = ()=>{
    console.log('upper was clicked',text);
    let newtext = text.toUpperCase();
    setText(newtext)
    }
    const lower = ()=>{
    console.log('upper was clicked',text);
    let newtext = text.toLocaleLowerCase();
    setText(newtext)
    }
    const handleonchange=(e)=>{
        console.log('On change')
        setText(e.target.value)
    }
    let remove=()=>{
      console.log('remove btn is clicked');
      setText("")
    }
 
  return (
<div className="container">


<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label text-primary"><h1>TextArea</h1></label>
  <textarea className="form-control" placeholder='Enter Your Text'  onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="mx-3 btn btn-primary" onClick={upper} > Convert to Upper-case</button>
<button className="mx-3 btn btn-primary" onClick={lower} > Convert to Lower-case</button>
<button onClick={remove} className="btn btn-danger">Remove text</button>

<h2 className='my-3' >Text counter</h2>
<div className="container">character you write are {text.length}</div>
<div className="container">words you write are {text.split(" ").length}</div>
<div className="container display">
  <h2>Preview</h2>
  <p>{text}</p>
  
</div>
<div className="card w-25 fix" >
  <img src="./images/samba.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">This is My first Website on react i create many websites but i  publish only this website</p>
  </div>
</div>


</div>

    )
}
