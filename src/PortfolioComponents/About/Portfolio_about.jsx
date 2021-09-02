import React from 'react';
// import api from '../Images/icons/api.svg';
import SkillCard from './Portfolio_about_skillcard';
import skills from './Portfolio_about_skills';
import { motion } from 'framer-motion';



const About = () => {

    const about_motion_varient = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.3, duration: 0.6,
            }
        }
    }
    return (
        <motion.div className='about'
            variants={about_motion_varient}
            initial='hidden'
            animate='visible'
        >
            <h6 className='about__intro'>
                Entry level React JS developer in software industry
            </h6>
            <div className='container about__container'>
                <h6 className='about__heading'>My Skills </h6>
                <div className='row'>
                    {
                        skills.map(skill =>

                            <SkillCard skill={skill} />
                        )
                    }

                </div>
            </div>
        </motion.div>
    )

}

export default About;