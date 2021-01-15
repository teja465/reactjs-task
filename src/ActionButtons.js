import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React, { Component } from 'react';
import ShowSections from "./ShowSections";
import ShowMembers from "./ShowMembers";
import {add_section_item} from "./actions/index";
import AddSecectioModal  from "./AddSectionModal";
import AddMemberModal from "./AddMemberModal"
const styles={
    ActionButtons:{
        paddingTop:"10px",
        backgroundColor:"",
        display:"flex",
        flexWrap:"wrap"
        

        
    }
}
class ActionButtons extends Component {
    constructor(props){
        super(props)
            this.state={
                selectedAction:"Members",
                showAddSectionModal:false,
                showAddMemberModal:false,
                
            }
    }
    changeSelectedAction=(name)=>{
        this.setState({selectedAction:name})
    }

    handleAddSections=()=>{
        const {store}=this.props;
        console.log(add_section_item('rav'))
        this.setState({...this.state,showAddSectionModal:true,showAddMemberModal:false})
        
    }

    handleAddMembers=()=>{
        const {store}=this.props;
        console.log("Add Members clicked")
        console.log(store)
    }
    render() {
         const storeState=this.props.store.getState()
         //console.log("ACTIONBUTTONS.JS:->STATE",this.state)
         const handleAdd=this.state.selectedAction=="Sections"?this.handleAddSections:this.handleAddMembers

        return (
            <>
            <div  className="ActionButtons" style={styles.ActionButtons}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button variant={this.state.selectedAction=="Sections"?"contained":""} onClick={()=>{this.changeSelectedAction("Sections")}} >Sections</Button>
                    <Button  variant={this.state.selectedAction=="Members"?"contained":""}     onClick={()=>{this.changeSelectedAction("Members")}}  >Members</Button>
                    <Button  variant={this.state.selectedAction=="Updates"?"contained":""}      onClick={()=>{this.changeSelectedAction("Updates")}}  >Updates</Button>
                </ButtonGroup>   

                <div style={{marginLeft:"auto",marginRight:"14%"}}>
                    
                    {this.state.selectedAction=="Sections"? <AddSecectioModal  store={this.props.store}/>:< AddMemberModal store={this.props.store}/> }
                </div>
                

            </div>
            

            <div className="showData">
            
                {this.state.selectedAction==="Sections"?<ShowSections  store={this.props.store} />:""}

                {this.state.selectedAction==="Members"?<ShowMembers store={this.props.store} /> :""}
                
                {this.state.selectedAction==="Updates"?<h1 style={{color:"red",marginLeft:"5%"}}>No updates</h1> :""}


            </div>
            </>
        );
    }
}

export default ActionButtons;