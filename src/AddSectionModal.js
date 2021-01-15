import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {add_section_item} from "./actions/index"


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
    const [text, setText] = useState("")
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setText("")
    // console.log("closing modal",text)
  };

  const onSubmit=()=>{
      if (text.trim()===""){
          alert("cant add empty section ")
          return 
      }
      else{
        setOpen(false);
        //console.log("submit clicked",text)
        props.store.dispatch(add_section_item(text))


      }
    
  }
  return (
    <div>
      

      <Button  onClick={handleOpen} variant="contained">
       Add section
      </Button>
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
          <TextField onChange={(event)=>{setText(event.target.value)}} id="standard-basic" label="section name"  autoComplete='off'/><br/><br/>
          <Button variant="contained" onClick={()=>{onSubmit()}}> Add section</Button>

          </div>
        </Fade>
      </Modal>

    </div>
  );
}