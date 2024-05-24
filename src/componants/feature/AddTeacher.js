import React, { useEffect, useState } from 'react'
import { useFormik} from 'formik'
import axios from 'axios'
import * as YUP from 'yup'
import API_URL from '../../util/API_URL'
import { useNavigate, useParams } from 'react-router-dom'


let addfromSchema = YUP.object({
name : YUP.string().required("Insert Full Name"),
fee : YUP.string().required("Insert Fee"),
gender : YUP.string().required("Select Gender"),
address : YUP.string().required("Insert Address")

})


const AddTeacher = () => {
    let navigate = useNavigate();
    let param = useParams();
    let [teach, setTeach] = useState({
        name : '',
        fee : '',
        gender : '',
        address : ''

    })






    let addform = useFormik({
    validationSchema : addfromSchema,
    enableReinitialize : true,
        initialValues :teach,
        onSubmit : async(formdata)=>{
            if(param.id){
                let result = await axios.put(`${API_URL}/${param.id}`,formdata);
                navigate('/teacher')
            }else{
                let result = await axios.post(`${API_URL}`,formdata);
                navigate('/teacher')

            }
            // console.log(result.data);
        }
    })
    useEffect(()=>{
        if(param.id){
            getData();
        }

    },[])

    let getData = async()=>{
        let result = await axios.get(`${API_URL}/${param.id}`);
        setTeach(result.data);
    }
    
    


  return (
    <>
    <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <form onSubmit={addform.handleSubmit}> 
            <h2 className='text-center'> {param.id ? "Update" : "Add"} Teachers </h2> 
            <div className='my-3'>
           <label>Name </label>
           <input type='text' name='name' value={addform.values.name} onChange={addform.handleChange} className={'form-control '+(addform.errors.name && addform.touched.name ? 'is-invalid' : '')}/> 
           {
              addform.errors.name && addform.touched.name ? <small className='text-danger'>{addform.errors.name} </small> : '' 
           }
           
            </div>
            <div className='my-3'>
           <label>Fee </label>
           <input type='text' name='fee' value={addform.values.fee} onChange={addform.handleChange} className={'form-control '+(addform.errors.fee && addform.touched.fee ? 'is-invalid' : '')}/> 
           {
              addform.errors.fee && addform.touched.fee ? <small className='text-danger'>{addform.errors.fee} </small> : '' 
           }
            </div>
            <div className='my-3'>
           <label>Gender </label>
           <br/>        
          Male <input type='radio' name='gender' checked={teach.gender=="male"} onChange={addform.handleChange} value='male'/> 
          Female <input type='radio' name='gender' checked={teach.gender=="female"} onChange={addform.handleChange} value='female'/> 
          {
              addform.errors.gender && addform.touched.gender ? <small className='text-danger'>{addform.errors.gender} </small> : '' 
           }
            </div>  
            <div className='my-3'>
           <label>Address </label>
           <textarea type='text' name='address' value={addform.values.address} onChange={addform.handleChange} className={'form-control '+(addform.errors.address && addform.touched.address ? 'is-invalid' : '')}></textarea> 
           {
              addform.errors.address && addform.touched.address ? <small className='text-danger'>{addform.errors.address} </small> : '' 
           }
            </div>
            <br/>
            <button type="submit" className='btn btn-primary btn-lg'> {param.id ? "Update" : "Add"} </button>
            </form>
        
        
        </div> 

    </div>
    
    
    
    </>
  )
}

export default AddTeacher