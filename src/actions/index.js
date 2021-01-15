

export const CHANGE_SELECTED_PROJECT="CHANGE_SELECTED_PROJECT"
export const ADD_NEW_PROJECT="ADD_NEW_PROJECT"
export const ADD_NEW_SECTION="ADD_NEW_SECTION"




const emptyProject={
    name:"",
    sections:[ ],
    members:[],
updates:"No updates "
}



export function update_selected_project(project){
    // console.log("ACTION:UPDATE SELECTED PROJECT-->",project)
    return {

        type:CHANGE_SELECTED_PROJECT,
        selectedProject:project,
    }
}
export function add_new_project(projectName){
     //console.log("ACTION:ADD_NEW_PROJECT-->",projectName)
    return {

        type:ADD_NEW_PROJECT,
        project:{
            name:projectName,
            sections:[],
            members:[],
            updates:"No updates"

        },
    }
}

export function add_section_item(item){
     //console.log("ACTION:ADD_NEW_SECTION-->",item)
    return {

        type:ADD_NEW_SECTION,
        section:item,
    }
}

