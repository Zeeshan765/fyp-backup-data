import React from "react";
import "./CustomScreen.css";   
import ProgressBar from "@ramonak/react-progress-bar";
import Modal from "../../Modal/Modal";
import { useState } from "react";
import Processors from "./Processors";
import GPU from "./GPU";
import Motherboard from "./Motherboard"
import Ram from "./Ram";
import PSUScreen from "./PSUScreen";
import Cooling from "./Cooling";
import Casing from "./Casing";
import Storage from "./Storage";
import BuildCompleted from "./BuildCompleted";
import { useSelector } from "react-redux";
import {getpsucount, getgpuCount, getmoboCount, getproCount, getramCount } from "../../../Redux/cartRedux";
const CustomScreen = (props) => {
const [proc, setProc] = useState(true)
const [gpu, setGpu] = useState(false)
const [hdd, setHdd] = useState(false)
const [mobo, setMobo] = useState(false)
const [ram,setRam] = useState(false)
const [psu,setPsu] = useState(false)
const [cooling,setCooling] = useState(false)
const [casing,setCasing] = useState(false)
const [fin,setFin] = useState(false)
const proCount = useSelector(getproCount)
const gpuCount = useSelector(getgpuCount)
const moboCount = useSelector(getmoboCount)
const ramCount = useSelector(getramCount)
const psuCount = useSelector(getpsucount)
function step1(){  
  
    setProc(true)
    setGpu(false)

}
function step2(){
    if (proCount<1){
        return alert("Processor is required for the for the build")
     }
 
    setProc(false)
    setGpu(true)
}
function step3(){
    console.log("i am clicked")
    if (gpuCount<1){
        return alert("Gpu is required for the for the build")
     }
    setGpu(false)
    setMobo(true)
}
function step4(){
    console.log("i am clicked")
    if (moboCount<1){
        return alert("Motherboard is required for the build")
     }
    setMobo(false)
    setRam(true)
}

function step5(){
    console.log("i am clicked")
    if (ramCount<1){
        return alert("Rams(s) is required for the build")
     }
    setRam(false)
    setHdd(true)
}
function step6(){
    console.log("i am clicked")
    
    setHdd(false)
    setPsu(true)
}
function step7(){
    console.log("i am clicked")
    if (psuCount<1){
        return alert("PSU is required for the build")
     }
    setPsu(false)
    setCasing(true)
}
function step8(){
    console.log("i am clicked")
    
    
    setCasing(false)
    setCooling(true)
}
function finish(){
    console.log(fin)
    setFin(true);
    setCooling(false)
    
    
}





 if (proc === true)
 return(
    <div className="container"><h1 style={{color:"red"}}>Processor Screen</h1>
    <Modal/>
    <ProgressBar  
  completedClassName="barCompleted" completed={0}/>
    <Processors  />
    <button className="next" onClick={()=>step2()} >Next</button>
    </div>


  );
else if(gpu === true)
return(
  
    <div className="container"><h1 style={{color:"red"}}>Gpu</h1>
    <Modal/>
     <ProgressBar  completed={14}/>
    <GPU  />
      <button  onClick={()=>step1()} >Back</button>
      
    <button className="next" onClick={()=>step3()} >Next</button>
  
    </div>
)
else if(mobo === true)
return(
    <div className="container"><h1 style ={{color:"red"}}>Motherboard</h1>
    <Modal/>
       <ProgressBar  completed={28}/>
    <Motherboard/>
     <button  onClick={()=>step2()} >Back</button>
     <button    className="next" onClick={()=>step4()} >Next</button>
   
    
    
    </div>
)

else if(ram === true)
return(
    <div className="container"><h1 style ={{color:"red"}}>RAM</h1>
    <Modal/>
    <ProgressBar  completed={42}/>
    <Ram/>
     <button  onClick={()=>step3()} >Back</button>
     <button    className="next" onClick={()=>step5()} >Next</button>
   
    
    
    </div>
)
else if(hdd === true)
return(
    <div className="container"><h1 style ={{color:"red"}}>Storage</h1>
    <Modal/>
    <ProgressBar  completed={56}/>
    <Storage/>
     <button  onClick={()=>step4()} >Back</button>
     <button    className="next" onClick={()=>step6()} >Next</button>
   
    
    
    </div>
)

else if(psu === true)
return(
    <div className="container"><h1 style ={{color:"red"}}>PSU</h1>
    <Modal/>
    <ProgressBar  completed={70}/>
    <PSUScreen  />
     <button  onClick={()=>step5()} >Back</button>
     <button    className="next" onClick={()=>step7()} >Next</button>
   
    
    
    </div>
)
else if(casing === true)
return(
    <div className="container"><h1 style ={{color:"red"}}>Casing</h1>
    <Modal/>
    <ProgressBar  completed={86}/>
    <Casing  />
     <button  onClick={()=>step6()} >Back</button>
     <button    className="next" onClick={()=>step8()} >Next</button>
   
    
    
    </div>
)
else if(cooling === true)
return(
    <div className="container"><h1 style ={{color:"red"}}>Cooling</h1>
    <Modal/>
    <ProgressBar  completed={90}/>
    <Cooling  />
     <button  onClick={()=>step7()} >Back</button>
     <button    className="next" onClick={()=>finish()} >Finish Building</button>
   
    
    
    </div>
)
else if(fin === true)
return(
    
    <div className="container"><h1 style ={{color:"red"}}>Build Complete</h1>
   
   <ProgressBar  completed={100}/>
     
   <BuildCompleted/>
   
    
    
    </div>
)
};

export default CustomScreen;
