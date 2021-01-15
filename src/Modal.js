import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import {add_new_project} from "./actions/index";

import {updateOptions} from "./DropDown"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
   const [no, setno] = useState(0)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=()=>{
    const store=props.store;
    setOpen(false);
    //console.log("project created :",projectName)

    store.subscribe(()=>{
      //console.log("Modal Subscribe:-->",store.getState())
      setno(no+1)
      
    })


    //console.log(add_new_project(projectName))
    store.dispatch(add_new_project(projectName))
    

  }
  const handleOnChange=(event)=>{
    projectName=event.target.value;
  }
  let projectName="";

  return (
    <div>
        
      {/* <button type="button" onClick={handleOpen}>
        Add project
      </button> */}
      <Button variant="contained" onClick={handleOpen}>Add project </Button >

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div>
              <h3>Enter project detail below </h3>

       
           Project Name: <input type="input" name="" id="project_name" onChange={handleOnChange}/><br/><br/>
        <input type="button" value="submit" onClick={handleSubmit} />
        <p>You can add remaining detail of project after creating project <br/>just enter name now</p>
        </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}