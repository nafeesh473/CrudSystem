import React ,{useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../../util/API_URL'
import { useNavigate } from 'react-router-dom'

const Teacher = () => {
  let navigate = useNavigate();
  let [allteacher, setAllTeacher] = useState([]);
let [teach, setTeach] = useState({});
let closebtn = useRef();


  useEffect(()=>{
     getData();
      },[])
  
  let getData = async()=>{
    let result = await axios.get(`${API_URL}`);
    setAllTeacher(result.data);
  }
  let askDelete = (obj)=>{
    setTeach(obj);  
  }
  let confDelete = async()=>{
    let result = await axios.delete(`${API_URL}/${teach.id}`);
    setAllTeacher(()=>{
      return allteacher.filter(item=> item.id != teach.id);
    })
    closebtn.current.click();
  }
  
  let askEdit = (obj)=>{
    navigate("/teacher/edit/"+obj.id);
  }



  return (
    <>
    <div className='row'>
      <div className='col-md-12 my-3'>
        <NavLink to='/teacher/add' className='btn btn-primary m-3'>Add New Teachers </NavLink>
        <br/> 
         <table className='table table-dark mt-3'> 
         <thead> 
          <tr>
            <th>S.N </th>  
            <th>Name </th>  
            <th>Fee </th>  
            <th>Gender </th>  
            <th>Edit </th>  
            <th>Delete </th>  
          </tr>
         </thead>
         <tbody> 
          {
            allteacher.map((item, index)=>{
              return(
                <tr key={item.id}>
                  <td>{index+1} </td>
                  <td>{item.name} </td>
                  <td>{item.fee} </td>
                  <td>{item.gender} </td>
                  <td><button onClick={()=>askEdit(item)} className='btn btn-info'>Update </button> </td>
                  <td><button onClick={()=>askDelete(item)} data-bs-toggle="modal" data-bs-target="#delModal" className='btn btn-danger'>Delete </button> </td>
                 </tr>
              )
            })
          }
         </tbody>


         </table>
         
      </div> 
     
    </div>
    <div className="modal fade" id="delModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"> <h3> Delete Teacher</h3> </div> 
          <div className="modal-body">
            <p> Are You sure Want to  Delete <b>{teach.name}</b> </p>
             </div> 
             <div className="modal-footer">
             <button onClick={confDelete} className='btn btn-danger'> Delete </button>
             <button ref={closebtn} data-bs-dismiss="modal" className='btn btn-dark'>Close </button>
             </div> 
          </div>
         </div>
       </div>

    
    </>
  )
}

export default Teacher