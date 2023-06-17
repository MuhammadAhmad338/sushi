import React from 'react'

const Subcription = () => {
  return (
    <section className='subscription flex-center' id='services'>
        <h2>Get offers straight <br />to your box</h2>
         <p>SignUp for the sushi newsletter</p>    
         <div className='subscription__form'>
             <input type="text" placeholder='Enter your email address' onChange={(e) => console.log(e)}/>
             <button>Get Started</button> 
         </div>        
    </section>
  );
}

export default Subcription;