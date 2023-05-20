import React from 'react'
import email from '../../assets/buttons/mail.svg';
import git from '../../assets/buttons/githubbtn.svg';
import linked from '../../assets/buttons/linked.svg';

export const Contact = () => {
    return (
        <div id='contact' className='contact-container'>
            <div className='text-contact'>
                <p>No seas tímido, <span>contáctame 😊</span> </p>
            </div>

            <div className='contacts'>
                <div className='contact'>
                    <a href="https://www.linkedin.com/in/c-saavedra-c" target="_blank"> <img src={linked} alt="linked icon" width={20}/> LinkedIn</a>
                </div>

                <div className='contact'>
                    <a href="https://github.com/CrisSaavedra" target="_blank"> <img src={git} alt="git icon" width={20}/> GitHub</a>
                </div>

                <div className='contact'>
                    <a href="mailto: crisisaave@gmail.com" target="_blank"> <img src={email} alt=" mail icon" width={20}/> Email</a>
                </div>


            </div>
        </div>
    )
}
