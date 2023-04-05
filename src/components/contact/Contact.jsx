import React from 'react'
import email from '../../assets/buttons/mail.svg';
import git from '../../assets/buttons/githubbtn.svg';
import linked from '../../assets/buttons/linked.svg';

export const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='text-contact'>
                <h3><span>C</span>ontact</h3>
                <p>Don't by shy, contact me! :)</p>
            </div>

            <div className='contacts'>
                <div className='contact'>
                    <a href="#"> <img src={linked} alt="linked icon" width={20}/> LinkedIn</a>
                </div>

                <div className='contact'>
                    <a href="#"> <img src={git} alt="git icon" width={20}/> GitHub</a>
                </div>

                <div className='contact'>
                    <a href="#"> <img src={email} alt=" mail icon" width={20}/> Email</a>
                </div>


            </div>
        </div>
    )
}
