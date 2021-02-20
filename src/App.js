import React from 'react';

import thumb1 from './images/lake-inniscarra-thumb.jpg';
import trainer1 from './images/lake-inniscarra-trainer.jpg';
import thumb2 from './images/performance-series-thumb.jpg';
import trainer2 from './images/performance-series-trainer.jpg';
import thumb3 from './images/slow-pulls-thumb.jpg';
import trainer3 from './images/slow-pulls-trainer.jpg';
import thumb4 from './images/20-minutes-to-toned-thumb.jpg';
import trainer4 from './images/20-minutes-to-toned-trainer.jpg';
import thumb5 from './images/charles-race-thumb.jpg';
import trainer5 from './images/charles-race-trainer.jpg';
import thumb6 from './images/full-body-hiit-thumb.jpg';
import trainer6 from './images/full-body-hiit-trainer.jpg';
import thumb7 from './images/kafue-river-thumb.jpg';
import trainer7 from './images/kafue-river-trainer.jpg';
import thumb8 from './images/shred-and-burn-thumb.jpg';
import trainer8 from './images/shred-and-burn-trainer.jpg';

function App() {
  const images = [
    {
      thumb: thumb1,
      trainer: trainer1,
    },
    {
      thumb: thumb2,
      trainer: trainer2,
    },
    {
      thumb: thumb3,
      trainer: trainer3,
    },
    {
      thumb: thumb4,
      trainer: trainer4,
    },
    {
      thumb: thumb5,
      trainer: trainer5,
    },
    {
      thumb: thumb6,
      trainer: trainer6,
    },
    {
      thumb: thumb7,
      trainer: trainer7,
    },
    {
      thumb: thumb8,
      trainer: trainer8,
    },
  ];

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

  return (
    <div className='cards-container'>
      {images.map(({ thumb, trainer }, index) => {
        return (
          <div className='card'>
            <img src={thumb} alt={thumb} key={index} className='thumb' />
            <div className='card-bottom'>
              <h3 className='title'>{titles[index].title}</h3>
              <img
                src={trainer}
                alt={trainer}
                key={index}
                className='trainer'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
