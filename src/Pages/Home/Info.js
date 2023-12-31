import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard img={clock} title="Opening Ours" bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard img={marker} title="Ours Location" bgClass="bg-accent"></InfoCard>
            <InfoCard img={phone} title="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;