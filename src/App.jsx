import React, { useState } from 'react';
import './App.css';
import GenerateBox from './components/GenerateBox';
import DisplayBox from './components/DisplayBox';

function App() {

  const [boxInfo, setBoxInfo] = useState({
    color: "",
    size: 100
  });
  const [boxList, setBoxList] = useState([]);
  
  const handleInfo = (e) => {
    e.preventDefault();
    setBoxInfo({...boxInfo, [e.target.name]: e.target.value});
  }

  const handleAddBox = (e) => {
    e.preventDefault();
    setBoxList([...boxList, boxInfo]);
    setBoxInfo({
      color:"",
      size:100,
      isSelected: false
    });
  }

  const pardon = (idx) => {
    setBoxList([...boxList.slice(0,idx),...boxList.slice(idx+1)])
  }  

  const toggleBox = (idx) => {
    boxList.forEach((box, i) => {
      let updateBox = box
      if (idx === i) {
        updateBox.isSelected = true
      } else {
        box.isSelected = false
      }
      setBoxList([...boxList.slice(0,i), updateBox, ...boxList.slice(i+1)])
    })
  }

  return (
    <div className="app">
      <GenerateBox
        inputs = {boxInfo}
        handleInfo = {handleInfo}
        handleSubmit = {handleAddBox}
      />
      <div style={{display:"flex", flexWrap:"wrap", width:"fit-content", margin:"0 auto"}}>
        {
          boxList.map((box, i) => {
            return <DisplayBox
                      key={i}
                      idx={i}
                      color={box.color}
                      size={box.size}
                      isSelected={box.isSelected}
                      toggleBox={toggleBox}
                      pardonBox={pardon}
                    />
          })
        }
      </div>
      
    </div>
  );
}

export default App;
