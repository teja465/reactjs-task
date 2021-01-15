import React,{useState} from 'react';

import Modal from "./Modal";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {update_selected_project} from "./actions/index"


const styles={
  App:{
    display:"flex",
    alignItems:"center",
    

  }

}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "",
    overflowX:"auto",
    
    

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function updateOptions(projectName){
  console.log("options update f()",projectName)
  console.log('l')  
  
}

function App(props) {
  const [no, setno] = useState(0)
  const getF=()=>{
    console.log("getF",no)
  }

  

      const store=props.store
      const store_state=store.getState()

    // console.log("Dropdown.js",store.getState())
    const updateOptions_=()=>{
      setno((no)=>no+1)
      return "ello"
    }
    const getProject=(name)=>{
      //console.log("getproject -->>",name)
      const array=store_state.projectsArray
      for( let i=0;i<array.length;i++){
        if (array[i].name===name){
            return array[i]
        }
        
      }
    }





      const classes = useStyles();
      const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
      

      

      const handleChange = (event) => {
        const name = event.target.name;
        const proj_selected=getProject(event.target.value)
        store.dispatch(update_selected_project(proj_selected))
        store.subscribe(()=>{
          //console.log("dropDown SUBSCRIBE",no)
          setno(Math.random())
        })
        setState({
          ...state,
          [name]: event.target.value,
        });
      };


      return (
        <div className="App" style={styles.App}>
          <div>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={state.age}
              onChange={handleChange}
              name="age"
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'age' }}
            >
              {store_state.projectsArray.map((item,index)=> <option  key={index} value={item.name}>{item.name}</option> )}

              {/* <option value="">None</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option> */}
            </NativeSelect>
            <FormHelperText>Select project</FormHelperText>
          </FormControl>
          


          </div>
          
        </div>
      );
}

export default App;
