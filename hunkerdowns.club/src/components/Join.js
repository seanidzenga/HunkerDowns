import React from 'react';
import Section from './Section';
import background from '../img/bg-entrance.png';

function Join(){
    return(
        <div className='page'>
            
            <div className='bgvideo-container'>
                <div className='bgvideo-cover'/>
                <img className='cover-background' src={background} alt=''/>
            </div>

            <Section>
                <div className='spacer'/>
                <h2 className='has-text-align-center'>How To Join</h2>
                <p className='mono'>Joining us in Hunker Downs is free, easy, and <b>does not require a headset!</b></p>
                <div className='list-container'>
                    <ul className='mono'>
                        <li>
                            <a href='https://vrchat.com/home/register' target='_blank' rel='noopener noreferrer'>
                                Make a VRChat account
                            </a>
                        </li>
                        <li>
                            <a href='https://store.steampowered.com/app/438100/VRChat/' target='_blank' rel='noopener noreferrer'>
                                Install VRChat
                            </a>
                        </li>
                        <li>
                            <a href='https://vrchat.com/home/user/usr_4728fe69-9421-4188-abda-401b44a659de' target='_blank' rel='noopener noreferrer'>
                                Add Count FLACula
                            </a>
                        </li>
                    </ul>
                </div>
                <p className='mono'>When the (metaphorical) doors are open - join off of Count FLACula in the "social" menu</p>
                <p className='mono'>We strongly recommend getting acquainted with VRChat before the zero-hour!</p>
                <p className='mono'>
                    Unfortunately, Hunker Downs does <b>NOT support the Oculus Quest</b> - 
                    if you're looking at getting into VR make sure to do your research and find the headset that works best for you!
                </p>
            </Section>

        </div>
    )
}

export default Join;