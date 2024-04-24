import {createContext,useContext, useState} from "react";
//for globally access purpose we will create one context
const UserContext=createContext();
//for wrapping the entire app we will use the provider component
 export const UserProvider=({children})=>{
    //for storing the formdetails we should store in one variable(formdata) and for updating(setformdata)
    const[formData,setFormData]=useState({
    itemname: "",
    description: "",
    category: "",
    manufacturer: "",
    unitOfMeasure: "",
    unitPrice: "",
    initialQuantity: "",
    reorderlevel:"",
    supplier:"",
    expirationDate: "",

    imageUpload: null,
    // suppliers:"",
    Actions: ""

    })

    return(
        <UserContext.Provider value={{formData,setFormData}}>{children}</UserContext.Provider>

    )
}
//we will use custom
export const AddItemContext=()=>{
    return useContext(UserContext);
}
