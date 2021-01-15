


const InitialState={
    selectedProject:{
        name:"CHILDREN HOUSING",
        sections:[ {name:"Living Room",date:"2/11/90"}, {name:"Boundry wall",date:"2/11/90"},
                {name:"Kitchen",date:"4/05/90"},
                {name:"Flooring",date:"1/2/90"},
                ],
        members:[
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},

        ],
    updates:"No updates "
    },

    projectsArray:[
        {
        name:"CHILDREN HOUSING",
        sections:[ {name:"Living Room",date:"2/11/90"}, {name:"Boundry wall",date:"2/11/90"},
                {name:"Kitchen",date:"4/05/90"},
                {name:"Flooring",date:"1/2/90"},
                ],
        members:[
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},

        ],
    updates:"No updates "
    },
    {
        name:"SKY HEIGHT HOUSING",
        sections:[ {name:"Big Living Room",date:"2/11/90"}, {name:"Boundry wall",date:"2/11/90"},
                {name:"Small Kitchen",date:"12/04/12"},
                {name:"Flooring",date:"1/2/90"},
                ],
        members:[
            {name:"Ravi teja",role:"developer",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"krishna",role:"Engineer",company:"inpysis tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"Rahul",role:"MAnager",company:"Lipsum tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},
            {name:"yeshwanth",role:"Professor",company:"snist tech labs",phone:"725961797",email:"katukuri.raviteja465@gmail.com"},

        ],
    updates:"No updates "
    },
]
}

const getNewList=(state,project)=>{
    
    state.projectsArray.push(project)
    //console.log("In get new list()")
    //console.log("NEW PROJECT CREATED",project)
    //console.log("AFTER CREATION STATE->",state)
    
    return state

}

const addNewSection=(state,secItem)=>{
    
    //console.log("added new section in reducer util f()",state.selectedProject)
    state.selectedProject.sections.push({name:secItem,date:new Date().toLocaleString()})
    for(var i=0;i<state.projectsArray.length;i++){
        if (state.projectsArray[i].name===state.selectedProject['name']){
            state.projectsArray[i]=state.selectedProject
        } 
        
   }
    return state

}

const addNewMember=(state,member)=>{
    //console.log("ADD NEW MEMBER F() inreduces")
    state.selectedProject.members.push(member)


    for(var i=0;i<state.projectsArray.length;i++){
        if (state.projectsArray[i].name===state.selectedProject['name']){
            state.projectsArray[i]=state.selectedProject
        } 
        
   }

   
    return state
}
export default function projects(state=InitialState,action){
    if(action.type==="initialize"){
        return state

    }
    if(action.type==="CHANGE_SELECTED_PROJECT"){
        //console.log("REDUCER:CHANGE SELECTED PROJECT-->",state,action)
        return {
            ...state,
            selectedProject:action.selectedProject
        }
    }

    if(action.type==="ADD_NEW_PROJECT"){
       // console.log("REDUCER:ADD NEW PROJECT-->",action)
         return getNewList(state,action.project)
        
    }

    if(action.type==="ADD_NEW_SECTION"){
         //console.log("REDUCER:ADD_NEW_SECTION-->",action)
          return addNewSection(state,action.section);
          
         
     }
    if(action.type==="ADD_NEW_MEMBER"){
        // console.log("REDUCER:ADD_NEW_MEMBER-->",action)
          return addNewMember(state,action.member);
          
         
     }

}