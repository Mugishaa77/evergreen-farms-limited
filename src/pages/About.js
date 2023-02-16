import React, { useState } from 'react';
import './About.css';

export default function About () {

    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };


    return (
        <div className="about">
            <div className="container">
                <h1>About Us</h1>
             <div className="row">
                <div className="col-6">
<h6 id="our-story" onClick={handleClick}>Our Story</h6>
<p className={isActive ? 'story-content active' : 'story-content'}>
    Evergreen Farms was started as a small scale vegetable home orchard in Nyalenda slums in
                   Kisumu, Kenya by Leisley Odhiambo (Odhis). 
                   The name Evergreen derives from the fact that amid the difficulties and challenges, the
residents of Nyalenda had an oasis of fresh farm produce, within a desert of strife and
pandemonium  the ever green farm. farm. Later, it became Evergreen Farms when Odhis decided
to take it up as a full-time business. 
</p>

<h6 id="our-story" onClick={handleClick}>Our Team</h6>
<p className={isActive ? 'story-content active' : 'story-content'}> Odhis started a small mentorship group whose agenda was to inspire the young men and women of Nyalenda
    where he met Lavender, Judy and Eric, who all joined
    hands to become, <strong>the Green Team (Founding Four)</strong> with whom
they started what has come to be known as Evergreen Farms.
</p>
</div>
                <div className="col-6">
                    <h6 id="our-story" onClick={handleClick}>We Believe</h6>
<p className={isActive ? 'story-content active' : 'story-content'}>“...We make
a living out
of what we
get, but we
make life,
out of what
we give...”</p>
<h6 id="our-story" onClick={handleClick}>How we operate</h6>
<p className={isActive ? 'story-content active' : 'story-content'}>Evergreen's Mobile Garden innovation creates a direct nexus between farmers,
grocers and the end-consumers hence increasing the farmer's and grocer's profits while
reducing the cost of food by almost half.</p>

<h6 id="our-story" onClick={handleClick}>Our history</h6>
<p className={isActive ? 'story-content active' : 'story-content'}>to be continued later...</p>
                </div>
                
             </div>
<h6 id="our-story" onClick={handleClick}>Our Vision</h6>
<p className={isActive ? 'story-content active' : 'story-content'}>Farmers will sell their produce to grocers at their desired prices,
     The grocers also will in turn sell to the ultimate consumers at fairer prices, making
<strong>food affordable</strong> altogether. 
It also <strong>increases profits</strong> to both the farmer and the grocer,
resulting in <strong>better living standards, and investment in farming as an economic activity within
Africa.</strong> 
</p>
            </div>
        </div>
    );
}