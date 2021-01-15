import React from 'react';
import logo from "./profile_Logo.svg";
const styles={
    main:{
        border:"1px solid black",
        margin:"1%",
        padding:"1%",
        width:"300px",
        heigth:"300px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"


    },
    title:{
        fontWeight:"bold",
        opacity:"0.8"
    },
    company:{
        fontWeight:"bold",
        opacity:"0.7",
        color:"blue"
    }

}
export default function ImgMediaCard(props) {
   const {data}=props;
  //console.log("Profile data:-->",data)

  return (
      <div   style={styles.main}>
        <img src="https://www.flaticon.com/svg/vstatic/svg/848/848043.svg?token=exp=1610703872~hmac=9c5f44186383c582226190ef8f20dec7" alt="oops" width="30%"/>
            <h4 >{data.name}</h4>
            <span style={styles.title}>{data.role}</span>
            <span style={styles.company}>{data.company}</span>
  <span> <span style={styles.title}>PHONE:</span>{data.phone}</span>
  <span><span style={styles.title}>EMAIL:</span>{data.email}</span>

      
    </div>
  );
}