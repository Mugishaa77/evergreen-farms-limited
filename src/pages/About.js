import React, { useState } from 'react';
import './About.css';

export default function About () {

  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

    return (
        <div className="about">
            <div className="container">
            <h2>ABOUT US</h2>

<div className="row">
                    <div className="col-6">
           

 <h4 className={activeIndex === 0 ? "active" : ""}
              onClick={() => handleClick(0)}>Our Story</h4>
            <p className={activeIndex === 0 ? "active" : ""}>Evergreen Farms sprouted from a humble beginning as a small-scale vegetable 
                home orchard in the heart of Nyalenda slums in Kisumu, Kenya. It was the brainchild of 
                Leisley Odhiambo (Odhis), who cultivated his passion for farming into a thriving business.
                 What began as a personal endeavor soon blossomed into something much greater, 
                 and Evergreen Farms was born.</p>


                
<h4 className={activeIndex === 1 ? "active" : ""}
              onClick={() => handleClick(1)}>Our Team</h4>
                 <p className={activeIndex === 1 ? "active" : ""}>
                    Odhis understood the power of unity and the importance of nurturing young minds in his community.
                     He started a small mentorship group aimed at inspiring the young men and women of Nyalenda.
                      It was during this journey that he encountered like-minded individuals who shared his vision—Lavender, 
                      Judy, and Eric. Together, they formed the Green Team, also known as the Founding Four,
                       and embarked on a remarkable journey that would redefine farming in their community.
                 </p>

                 <h4 className={activeIndex === 2 ? "active" : ""}
              onClick={() => handleClick(2)}>We Believe</h4>
                  <p className={activeIndex === 2 ? "active" : ""}>At Evergreen Farms, our beliefs are deeply rooted in the transformative power of giving. 
                    As the saying goes,<strong>"We make a living out of what we get, but we make life out of what we give."</strong>  
                    We strive not only to cultivate bountiful crops but also to cultivate a sense of purpose and abundance
                     in the lives of those around us.</p>
                

                 </div>
                <div className="col-6">

                
                    
            
                <div className="col">
                     <h4 className={activeIndex === 3 ? "active" : ""}
              onClick={() => handleClick(3)}>How we operate</h4>
                     <p className={activeIndex === 3 ? "active" : ""}>Innovation lies at the core of Evergreen Farms. 
                        Our groundbreaking Mobile Garden concept establishes a direct connection between farmers, grocers, and end-consumers. 
                        By eliminating unnecessary intermediaries, we ensure that farmers and grocers maximize their profits while 
                        significantly reducing the cost of food for consumers. Through this innovative approach, we are revolutionizing the
                         agricultural industry and making fresh, nutritious food accessible to all.</p>

               
                    <h4 className={activeIndex === 4 ? "active" : ""}
              onClick={() => handleClick(4)}>Our Vision</h4>
                         <p  className={activeIndex === 4 ? "active" : ""}>At Evergreen Farms, we envision a future where <strong>farmers have the autonomy to sell their produce</strong> at fair prices
                             to grocers who, in turn, provide affordable food to consumers. This symbiotic relationship not only enhances 
                             the living standards of farmers and grocers but also fuels investment in agriculture as a thriving economic activity 
                             across Africa. By fostering sustainable farming practices and creating a more equitable food system,
                              we are cultivating a brighter future for our continent.</p>
                </div>
               
                     <h4 className={activeIndex === 5 ? "active" : ""}
              onClick={() => handleClick(5)}>Our History</h4>
                              <p className={activeIndex === 5 ? "active" : ""}>The tale of Evergreen Farms is still being written. It is a story of perseverance, resilience, and the unwavering 
                                determination to transform lives through agriculture. As we continue to make strides in empowering farmers, bridging
                                 the gap between grocers and consumers, and revolutionizing the way food is produced and distributed, our history is 
                                 shaped by the remarkable people and communities we serve.

                                  Join us on this extraordinary journey as we sow the seeds of change, cultivate sustainable growth, and nurture
                                   a greener tomorrow for generations to come.</p>
                </div>
            </div> </div>
        </div>

           
                 
            

                  

                    
                         

         
    );

}