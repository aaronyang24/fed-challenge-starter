import React from 'react';

let titles = [
  { title: 'Lake Innascarra, Ireland— Pyramid' },
  { title: 'Performance Series' },
  { title: 'Slow Pulls and Fast Intervals' },
  { title: '20 Minutes to Tones' },
  { title: 'Charles Race, Boston, Massachusetts' },
  { title: 'Full-Body HIIT Series' },
  { title: 'Kafue River, Zambia— Power Stroke Pyramid' },
  { title: 'Shred & Burn Series' },
];

const Card = ({ thumb, trainer, index }) => {
  return (
    <div className='card'>
      <img src={thumb} alt={thumb} key={index} className='thumb' />
      <div className='card-bottom'>
        <h3 className='title'>{titles[index].title}</h3>
        <img src={trainer} alt={trainer} key={index} className='trainer' />
      </div>
      <h2 className='view-details'>VIEW DETAILS</h2>
    </div>
  );
};

export default Card;
