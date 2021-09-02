import react, { useState } from 'react';
import data_projects from './Portfolio_project_data';
import ProjectCard from './Portfolio_ProjectCard';

import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] =useState()

    const handleFilterCategory = (pro_name) => {
        const newArray = data_projects.filter(project => project.category.includes(pro_name))
        setProjects(newArray)
        setActive(pro_name)
    }

    const project_motion_varient = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3, duration: 0.6,
            }
        }
    }
    return (
        <motion.div className='container projects'
            variants={project_motion_varient}
            initial='hidden'
            animate='visible'
        >
            <div className='projects__navbar'>
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjects(data_projects)
                        setActive('All')
                    }

                } > All </div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react.js')}> ReactJS </div>
                <div className={active === 'Wordpress' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Wordpress')} > Wordpress </div>
                <div className={active === 'Machine Learning' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Machine Learning')} > ML </div>
                <div className={active === 'Python' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Python')} > Python </div>
            </div>
            <div className='row'>
                {
                    projects.map(project =>
                        <ProjectCard key={project.pro_name} project={project} />)
                }
            </div>
        </motion.div>

    )
}
export default Projects;