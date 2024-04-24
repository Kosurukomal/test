import  React from 'react';
import { AddItemContext } from './Usercontext';
const Addnewitem=()=>{
    const getData=AddItemContext();
    const {formData,setFormData}=getData;
    const style={
        width:"75%",
        display:"flex",
        flexWrap:"wrap",
        marginLeft:"auto",
        marginRight:"auto",
    }

    return(
     <>
     <div className='w-100 d-flex justify-content-center align-item-center'>
        <form className='w-75'>
            <h1 className='text-center'>AddItem</h1>
            <div className='input-fields' style={style}>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <label htmlFor="Itemname" className='form-label'>
                    Itemname</label><span>*</span>
                    <input type="text" 
                    name="Itemname" 
                    id="itemname" 
                    className='form-control'
                    value={formData.itemname}
                    onChange={(e)=>setFormData({...formData,itemname:e.target.value})}
                    />
                </div>   
            
            
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <label htmlFor="Itemname" className='form-label'>
                    Itemname</label><span>*</span>
                    <input type="text" 
                    name="Itemname" 
                    id="itemname" 
                    className='form-control'
                    value={formData.itemname}
                    onChange={(e)=>setFormData({...formData,itemname:e.target.value})}
                    />
                   
            </div>
            
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <label htmlFor="Itemname" className='form-label'>
                    Itemname</label><span>*</span>
                    <input type="text" 
                    name="Itemname" 
                    id="itemname" 
                    className='form-control'
                    value={formData.itemname}
                    onChange={(e)=>setFormData({...formData,itemname:e.target.value})}
                    />
                   
            </div>
            
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <label htmlFor="Itemname" className='form-label'>
                    Itemname</label><span>*</span>
                    <input type="text" 
                    name="Itemname" 
                    id="itemname" 
                    className='form-control'
                    value={formData.itemname}
                    onChange={(e)=>setFormData({...formData,itemname:e.target.value})}
                    />
                   
            </div>
            </div>
        </form>
        
     </div>
     
     </>

    )
}
export default Addnewitem;