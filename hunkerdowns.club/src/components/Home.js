import React from 'react';
import '../App.css';
import Button from './Button';
import {ReactComponent as Logo} from '../img/logo.svg';
import bgvideo from '../vid/bgvideo-720p.mp4';

function Home() {

    return(
            <div className='page'> 
            <div className='bgvideo-container'>
                <div className='bgvideo-cover'/>
                <video autoPlay muted loop className='bgvideo'>
                    <source src={bgvideo} type='video/mp4' />
                </video>
            </div>
            
            <div className='cover'>
                <div>
                    <h1>Hunker Downs</h1>
                    <p className='welcome'>metaversally underground</p>
                    <Logo className="hunker-downs-logo big" viewBox='0 0 250 250'/>
                    {/* <div className='spacer'/> */}
                    <p className='mono'>
                        A VR night club built within an abandoned subway station - Hunker Downs is both literally and thematically underground.
                    </p>
                    <div className="button-container">
                        <Button href='#/join'>
                            Join
                        </Button>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default Home;