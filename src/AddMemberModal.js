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
    const [name, setname] = useState("")
    const [role, setrole] = useState("")
    const [company, setcompany] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("@gmail.com")
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit=()=>{
      if (name.trim()==="" || role.trim()==="" || company.trim()==="" ||phone.trim()=="" ||email.trim()===""){
          alert("cant add empty Data ")
          return 
      }
      else{
        setOpen(false);
        // console.log("MEMBER:-> submit clicked")
        // console.log("NAME",name)
        // console.log("role",role)
        // console.log("company",company)
        // console.log("phone",phone)
        // console.log("email",email)

      props.store.dispatch({
        type:"ADD_NEW_MEMBER",
        member:{
          name,role,company,phone,email
        }

      })

      }
    
  }
  return (
    <div>
      

      <Button  onClick={handleOpen} variant="contained">
       Add Member
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
          <TextField onChange={(event)=>{setname(event.target.value)}}      label=" name"  autoComplete='off'/><br/><br/>
          <TextField onChange={(event)=>{setrole(event.target.value)}}      label=" role"  autoComplete='off'/><br/><br/>
          <TextField onChange={(event)=>{setcompany(event.target.value)}}   label=" Company name"  autoComplete='off'/><br/><br/>
          <TextField onChange={(event)=>{setphone(event.target.value)}}     label=" Phone"  autoComplete='off'/><br/><br/>
          <TextField onChange={(event)=>{setemail(event.target.value)}}     label=" email"  autoComplete='off'/><br/><br/>
          <Button variant="contained" onClick={()=>{onSubmit()}}> Add Member</Button>

          </div>
        </Fade>
      </Modal>

    </div>
  );
}