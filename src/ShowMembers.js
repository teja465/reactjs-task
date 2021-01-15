import React, { Component } from 'react'
import Profile from "./Profile"

export default class ShowMembers extends Component {
    constructor(props){
        super(props)
        this.state={}

    }
    render() {
        const {store}=this.props;
        const storeState=store.getState()
        this.props.store.subscribe(()=>{
            //console.log("SUSCRIBE :show sections",sections)
            this.setState({})
            
        })

        return (
            <div style={{display:"flex",flexWrap:"wrap"}}>
                    {storeState.selectedProject.members.map((item,ind)=><Profile  data={item} key={ind} />)}    
                    {storeState.selectedProject.members.length==0? <h3 style={{color:"red"}}>No members in this project</h3>:"" }            
            </div>
        )
    }
}
