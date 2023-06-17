import React from 'react';

const AboutUS = () => {
  return (
    <section className='about-us' id='about-us'>
      
      <div className='about-us__image'>
        <div className='about-us__image-sushi2'>
          <img src="src\assets\sushi-2.png" alt="" />
        </div>
        <button className='about-us__button'>
          Learn more
          <img src="src\assets\arrow-up-right.svg" alt="" />
        </button>
        <div className='about-us__image-sushi3'>
          <img src="src\assets\sushi-3.png" alt="" />
        </div>
      </div>

      <div className='about-us__content'>
        <p className='sushi__subtitle'>
          About US
        </p>
        <h3 className='sushi__title'>
          Our mission is to bring true Japanese flavours to you.
        </h3>
        <p className='sushi__description'>
            We will continue to provide the experience of BBQ, the japanese mindset of hospitality, 
            with our shopping and dinning for our customers.  
        </p>
      </div>

    </section>
  );
}

export default AboutUS;