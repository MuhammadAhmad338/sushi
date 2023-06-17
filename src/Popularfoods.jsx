import React from 'react';

const Popularfoods = () => {
    return (
        <section className='popular-foods' id='menu'>
            <h2 className='popular-foods__title'>Popular food / ALL</h2>
            <div className='popular-foods__filter sushi__hide-scrollbar'>
                <button className='popular-foods__filter-btn active'>
                    All
                </button>
                <button className='popular-foods__filter-btn'>
                    <img src="src\assets\sushi-9.png" alt="" />
                    Sushi
                </button>
                <button className='popular-foods__filter-btn'>
                    <img src="src\assets\sushi-8.png" alt="" />
                    Muhammad
                </button>
                <button className='popular-foods__filter-btn'>
                    <img src="src\assets\sushi-7.png" alt="" />
                    BBQ
                </button>
                <button className='popular-foods__filter-btn'>
                    <img src="src\assets\sushi-6.png" alt="" />
                    Ahmad
                </button>
            </div>

            <div className='popular-foods__catalogue'>
                <article className='popular-foods__card'>
                    <img className='popular-foods__card-images' src="src\assets\sushi-12.png" alt="" />
                    <h4 className='popular-foods__card-title'>Original Sushi</h4>

                    <div className='popular-foods__card-details'>
                        <div className='popular-foods__card-rating'>
                            <img src="src\assets\star.svg" alt="star" />   
                            <p>4.9</p>
                        </div>               
                        <p className='popular-foods__card-price'>$25.00</p>
                    </div>
                </article>

                <article className='popular-foods__card active-card'>
                    <img className='popular-foods__card-images' src="src\assets\sushi-11.png" alt="" />
                    <h4 className='popular-foods__card-title'>Original Sushi</h4>

                    <div className='popular-foods__card-details'>
                        <div className='popular-foods__card-rating'>
                            <img src="src\assets\star.svg" alt="star" />   
                            <p>4.9</p>
                        </div>               
                        <p className='popular-foods__card-price'>$25.00</p>
                    </div>
                </article>

                <article className='popular-foods__card'>
                    <img className='popular-foods__card-images' src="src\assets\sushi-10.png" alt="" />
                    <h4 className='popular-foods__card-title'>Original Sushi</h4>

                    <div className='popular-foods__card-details'>
                        <div className='popular-foods__card-rating'>
                            <img src="src\assets\star.svg" alt="star" />   
                            <p>4.9</p>
                        </div>               
                        <p className='popular-foods__card-price'>$25.00</p>
                    </div>
                </article>
            </div>

            <button className='popular-foods__button'>
                Explore foods
                <img src="src\assets\arrow-right.svg" alt="" />
            </button>
        </section>
    );
}

export default Popularfoods;