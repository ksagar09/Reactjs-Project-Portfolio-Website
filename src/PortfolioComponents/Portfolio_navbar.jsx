// used framer motion for animation

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {motion} from 'framer-motion';




const Portfolio_navbar = () => {
    const [active, setActive] = useState('');

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About');
        else if(currentURL.endsWith('/Resume'))
            setActive('Resume')
        else if(currentURL.endsWith('/Projects'))
            setActive('Projects')
    },[active]);
        
    const navbar_motion_varient= {
        hidden:{
            x:'-30vh',
            opacity:0,
        },
        visible:{
            x:0,
            opacity:1,
        }
    }
   
    return (
        
            <motion.div className='navbar'
                variants={navbar_motion_varient}
                initial='hidden'
                animate='visible'
            >
                <div className='navbar__active'>
                    {active}
                </div>
                <div className='navbar__items'>
                    {active !== 'About' && 
                    <Link to='About'>
                    <div className='navbar__item' onClick={() => setActive('About')}>About </div>
                    </Link>
                    }
                    
                    {active !== 'Resume' ? 
                    <Link to='Resume'>
                    <div className='navbar__item' onClick={() => setActive('Resume')}> Resume</div>
                    
                    </Link>:null
                    }
                    
                    {active !== 'Projects' && 
                    <Link to='Projects'>
                    <div className='navbar__item' onClick={() => setActive('Projects')} > Projects</div>
                    </Link>
                    }
                    
                </div>

            </motion.div>
    )
}
export default Portfolio_navbar;
