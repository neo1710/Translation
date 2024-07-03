
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";


function App() {
const [fr,setFr]=useState("");
const [to,setTo]=useState("");
const [frText,setFrtx]=useState("");
const [resTx,setRestx]=useState("");


function handleTrans(e){
  e.preventDefault();
  axios.get(`https://api.mymemory.translated.net/get?q=${frText}&langpair=${fr}|${to}`).then((res)=>{
    console.log(res);
    console.log(res.data.responseData.translatedText)
    setRestx(res.data.responseData.translatedText);
    console.log(resTx);
        }).catch ((error)=>{
        console.error("Error translating text:", error)
      });
}



  return (
    <div className="App">
      <h1>Translate your text here</h1>
      <div className='tra'>
      <div>
        <h2>From</h2>
        <select value={fr} onChange={(e)=>{setFr(e.target.value)}}>
          <option value={""}>From</option>
          <option value={"en"}>English</option>
          <option value={"it"}>Italian</option>
          <option value={"es"}>Spanish</option>
          <option value={"zh-hans"}>Chinese</option>
          </select>
<input value={frText} onChange={(e)=>{setFrtx(e.target.value)}}
 type='text' placeholder='type here to translate'/>
      </div>
      <div>
      <h2>To</h2>
        <select value={to} onChange={(e)=>{setTo(e.target.value)}}>
        <option value={""}>To</option>
          <option value={"en"}>English</option>
          <option value={"it"}>Italian</option>
          <option value={"es"}>Spanish</option>
          <option value={"zh-hans"}>Chinese</option>
          </select>
          <input style={{color:"green"}} value={resTx}
 type='text' placeholder='Translated text' disabled="true"/>
      </div>
      </div>
<button onClick={(e)=>{handleTrans(e)}}>Translate</button>
    </div>
  );
}

export default App;
