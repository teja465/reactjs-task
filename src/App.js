import React,{useState} from 'react';

import Modal from "./Modal";

import DropDown from "./DropDown"
import ActionButtons from "./ActionButtons"

const styles={
  App:{
    border:"1px solid black",
    backgroundColor:"rgb(224,224,224)",
    display:"flex",
    alignItems:"center",


  },
    
  dropDown:{

    width:"70%"
  },

}


function App(props) {
  const [appNo, setappNo] = useState(0)
  //console.log("app.js",props.store.getState())
  props.store.subscribe(()=>{
    //console.log("SUbscribe,App.js")
    setappNo(appNo+1)
  })
  return (
        < div>

        <div  style={styles.App}>
              <div  className="dropDown" style={styles.dropDown}>
                <DropDown  store={props.store}/>
              </div>

              <div className="modalDiv">
                <Modal  store={props.store}/>
              </div>
        </div>

              <div>
                <ActionButtons  store={props.store}/>
              </div>
        </ div>
        

              
      );
  
}

export default App;
