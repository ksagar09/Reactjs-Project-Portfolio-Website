import React from 'react';

import sagarImage from '../Images/sagarImage.jpeg'
// import facebook from '../Images/icons/facebook.svg';
import instagram from '../Images/icons/instagram.svg';
import github from '../Images/icons/github.svg';
import linkedin from '../Images/icons/linkedin.svg';
import location from '../Images/icons/location.svg';
import downloadPDF from '../Images/icons/downloadPDF.svg';
import resume from '../Images/Sagar-Kamble-Web-ReactJS.pdf';
import {motion} from 'framer-motion'




const sidebar = () => {
    const resumeAlertMsg =() =>{
        window.alert('For Updated Resume Please check my Linked Profile')
    }
    const emailOutlook = () =>{
        window.open('mailto:ksaagar09@gmail.com')
    }

    const sidebar_motion_varient= {
        hidden:{
            x:'-10vh',
            
        },
        visible:{
            x:0,
            
            transition: {
                dealy: 0.1, duration:0.5, type:'spring'
            }
        }
    }
    
    return (
        
        <>
            <motion.div className='sidebar' variants={sidebar_motion_varient}
                initial='hidden'
                animate='visible'
            >
                <img src={sagarImage} alt='avatar' className='sidebar__avatar'></img>
                <div className='sidebar__name'> Sagar <span>Kamble</span> </div>
                <div className='sidebar__item sidebar__title'> Web Developer</div>
                <a href=''>
                    <div className='sidebar__item sidebar__resume'>
                        <a href={resume} target='_blank' onClick={resumeAlertMsg} rel="noopener noreferrer"><img src={downloadPDF}  alt='resume' className='sidebar__icon'/> Download Resume</a>
                    </div>
                </a>
                <figure className='sidebar__social-icons my-2'>
                    <a href='https://www.linkedin.com/in/ksagar09/' target='_blank' rel="noopener noreferrer"> <img src={linkedin} alt='linked_in' className='sidebar__icon mr-3' /> </a>
                    <a href='https://www.instagram.com/sagarspeaks/' target='_blank' rel="noopener noreferrer"> <img src={instagram} alt='Instagram' className='sidebar__icon mr-3' /> </a>
                </figure>
                <div className='sidebar__contact'>
                    <div className='sidebar__item sidebar__github mr-3'>
                        <a href='https://github.com/ksagar09/' target='_blank' rel="noopener noreferrer"> <img src={github} alt='github' className='sidebar__icon'/> github </a>
                    </div>
<a href='https://www.google.com/maps/place/Pune,+Maharashtra/@18.5245649,73.7228812,11z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437' target='_blank' rel="noopener noreferrer">

                    <div className='sidebar__location'> 
                    <img src={location} 
                     alt='location' className='sidebar__icon mr-3'/>
                    Pune, India
                    
                    </div>
</a>
                    <div className='sidebar__item'> ksaagar09@gmail.com </div>
                    <div className='sidebar__item'> 9421538263 </div>
                </div>
                <div className='sidebar__item sidebar__email'onClick={emailOutlook}> email me </div>
            </motion.div>
        </>
    )
}
export default sidebar;