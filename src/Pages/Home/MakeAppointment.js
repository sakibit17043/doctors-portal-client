import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Button from '../Shared/Button';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section 
        className='flex justify-center items-center'
        style={{background:`url(${appointment})`}}
        >
            <div className='flex-1  hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appointment Today</h2>
                <p className='text-white py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button></Button>
            </div>
        </section>
    );
};

export default MakeAppointment;