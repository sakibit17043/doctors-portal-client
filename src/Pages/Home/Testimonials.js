import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';


const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'William Herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California',
            img:people1
        },
        {
            _id:2,
            name:'Eliana Lopez',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'NewYork',
            img:people2
        },
        {
            _id:3,
            name:'Ryan Fernandez',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'Paris',
            img:people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-primary text-xl font-bold">Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patient Say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=><Reviews
                    key={review._id}
                    review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;