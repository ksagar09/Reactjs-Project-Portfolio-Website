import React from "react";
import Bar from './Resume_bar';

import {languages, Tools} from './Portfolio_resume_data';
import {motion} from 'framer-motion';



const Resume = () => {
  const resume_motion_varient ={
    hidden:{ 
        opacity:0
 },
 visible: {
     opacity: 1,
     transition : {
         delay: 0.3, duration:0.6,
     }
 }
 }
  return (
    <motion.div className="container resume"
      variants= {resume_motion_varient}
      initial= 'hidden'
      animate='visible'
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">
            Education
            </h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              B.E Electrnonics
            </h5>

            <p className="resume-card__name">
              Dr. J J Magdum College Of Engineering (Jaysingpur)
            </p>
            <p className="resume-card__details">
              2011-2016
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">
            Experience
            </h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Justdial.com
            </h5>
            <p className="resume-card__name">
              Database Executive <br/>

              New business listing creation, updation of business details by phone calls or by email
            </p>
            <p className="resume-card__details">
              June'2018-Oct'2019
            </p>
          </div>
        </div>
      </div>
      {/* tools section */}

      <div className="row ">
        <div className="col-lg-6 resume-language">
          <h5 className="resume-language__heading">
            Language and framework
          </h5>
          <div className="resume-language__body mt-3">
            {languages.map((Language) => (
              <Bar value={Language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-language">
          <h5 className="resume-language__heading">Tools and software</h5>

          <div className="resume-language__body mt-3">
            {Tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>

      </div>


    </motion.div>
  );
};
export default Resume;




