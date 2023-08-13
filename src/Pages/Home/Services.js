import React from 'react';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluride Treatment',
            discription:'',
            img:fluride
        },
        {
            _id:2,
            name:'Cavity Filling',
            discription:'',
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            discription:'',
            img:whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-xl text-primary font-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {services.map(service=><Service
                key={service._id}
                service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;