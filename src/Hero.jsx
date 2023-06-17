import React from 'react';
import '../src/css/styles.css';

const Hero = () => {
  return (
    <section className='hero'>

      <div className='hero-image'>
        <img src="src\assets\sushi-1.png" alt="sushi" />
        <h2>
          日 <br />
          本 <br />
          食
        </h2>
        <div className='hero-image__overlay'></div>
      </div>

      <div className='hero__content'>
        <div className='hero__content__info'>
          <h1>Feel the taste of japanese food</h1>
          <p>Feel the taste of the most popular japanese food from anywhere and anytime.</p>
          <div className='hero__content__button'>
            <button className='hero__content-order__button'>Order Now</button>
            <button className='hero__content-play__button'>
              <img src="src\assets\play-circle.svg" alt="play-circle" />
              How to Order
            </button>
          </div>
        </div>

        <div className='hero__content__testimonial'>
          <div className='hero__content__customer flex-center'>
            <h4>24 <span>k+</span></h4>
            <p>Happy Customer</p>
          </div>
          <div className='hero__content__review'>
            <img src="src\assets\user.png" alt="user" />
            <p>"This is the best japanese food delivery service that ever existed"</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;