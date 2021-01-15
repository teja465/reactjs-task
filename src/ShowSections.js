import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';





const styles={
    gridHead:{
        fontWeight:"900"
    }
}
export default class ShowSections extends Component {
    constructor(props){
        super(props)
        

    }
    
    
    render() {
        //console.log("show sections:-->",this.props.store.)
        this.props.store.subscribe(()=>{
            //console.log("SUSCRIBE :show sections")
        })
        const store=this.props.store
        const sections=store.getState().selectedProject.sections
        //console.log("sections:",sections)
        //console.log(" sections:Store",this.props.store.getState())

        this.props.store.subscribe(()=>{
            //console.log("SUSCRIBE :show sections",)
            this.forceUpdate()
            
        })

        

        return (
            <div style={{margin:"2%"}}>
                <Grid container spacing={3} >
                            <Grid item xs={4}>
                            <span style={styles.gridHead}>Name</span> 
                            </Grid>
                            <Grid item xs={4}>
                                
                            </Grid>
                            <Grid item xs={4}>
                            <span style={styles.gridHead}>Modified date</span> 
                        </Grid>
                    </Grid>
                {sections.map((sec,ind)=>{ 
                     return (
                        <Grid container spacing={3} key={ind}>
                            <Grid item xs={4}>
                            <Paper >{sec.name} <br/>
                            </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                
                            </Grid>
                            <Grid item xs={4}>
                            <Paper >{sec.date} <br/>
                            </Paper>
                        </Grid>
                    </Grid>
                     )
                })}
                
                {sections.length==0? <h1 style={{color:"red"}}>No sections in this project</h1>:"" }
            </div>
        )
    }
}
