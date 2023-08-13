import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const {data:doctors,isLoading,refetch} = useQuery('doctors',()=>
        fetch('http://localhost:5000/doctor',{
          headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }  
        })
        .then(res=>res.json())
);
    // const [doctor,setDoctor] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/doctor',{
    //         headers:{
    //           'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    //         }  
    //       })
    //       .then(res=>res.json()
    //       )
    //       .then(data =>setDoctor(data))
    // },[])

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors:{doctors?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Speciality</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            doctors?.map((doctor,index)=><DoctorRow
            key={doctor._id}
            index={index+1}
            doctor={doctor}
            refetch={refetch}
            ></DoctorRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctors;