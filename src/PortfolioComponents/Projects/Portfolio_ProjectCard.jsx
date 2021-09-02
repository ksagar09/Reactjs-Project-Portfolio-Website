import React from 'react';
import github from '../../Images/icons/github.svg'

const ProjectCard = ({ project: { pro_name, img, deployed_url, github_url } }) => {
    return (
        <div className='projectCard col-md-6 col-lg-4 my-2 scrollbar'>
            <figure className='projectCard__wrapper'>
                <a href={deployed_url} target='_blank' rel="noopener noreferrer" >
                    <img src={img} alt={'name'} className='projectCard__image' />
                </a>
                <div className='projectCard__title'>
                    <a href={github_url} target='_blank' rel="noopener noreferrer" >
                        <img src={github} alt={'github link'} className='projectCard__icon'></img>
                    </a>
                    {pro_name}
                </div>
            </figure>
        </div>
    )
}
export default ProjectCard;