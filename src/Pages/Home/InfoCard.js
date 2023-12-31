import React from 'react';

const InfoCard = ({img,title,bgClass}) => {
    
    return (
        <div className={`card lg:card-side  shadow-xl text-white ${bgClass}`}>
  <figure className='pt-5 lg:pt-0  lg:pl-5'><img src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    
  </div>
</div>
    );
};

export default InfoCard;