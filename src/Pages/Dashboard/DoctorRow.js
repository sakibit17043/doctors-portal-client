import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,index,refetch}) => {
    const{name,email,speciality,img} = doctor;
    const deleteDoctor = () =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount){
                toast.success(`Doctor ${name} is deleted successfully`);
                refetch()
            }
            else{
                toast.error('Something is wrong!!!')
            }
        })
    }
    return (
        <tr className='hover'>
        <th>
         {index}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt={name} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{speciality}</div>
            </div>
          </div>
        </td>
        <td>
            {email}
        </td>
        <td>{speciality}</td>
        <th>
          <button onClick={deleteDoctor} className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default DoctorRow;