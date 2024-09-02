import React from 'react';
import '../App.css';
import section1 from '../img/section-1-background.png';
import section2 from '../img/section-2-background.png';
import section3 from '../img/section-3-background.png';
import section5 from '../img/section-5-background.png';
import dreamcard from '../img/dreamcard.png';
import synescapecard from '../img/synescapecard.png';
import flaculacard from '../img/flaculacard.png';
import Section from './Section';
import Button from './Button';

function SubFrequencies() {

    return(
        <div className="page">

            {/* Section 1 - What is this? */}
            <Section bg={section1}>
                <div className="spacer" />
                <h2 className="has-text-align-center">
                    <strong>
                        SubFrequencies
                    </strong>
                </h2>
                
                <p className="has-text-align-center">Started in March of 2020, SubFrequencies was our relief effort for the quarantined club kids of the world, an attempt to bring us back together in a time of isolation.</p>
                <p className="has-text-align-center">Since that first faithful broadcast, it has evolved into a live broadcast club night, connecting our international community and entertaining in three dimensions</p>
                <p className="has-text-align-center">You can find us on:</p>

                <div className="button-container">
                    <Button href='https://twitch.tv/subfrequencies'>
                        Twitch.tv
                    </Button>
                    <Button href='https://discord.gg/gxvy7qBtfb'>
                        Discord
                    </Button>
                    <Button href='https://vrchat.com/home/world/wrld_0c4485c2-660b-4bca-b629-813b483ec11b'>
                        VRChat
                    </Button>
                    <Button href='https://www.facebook.com/groups/549158555743930'>
                        Facebook
                    </Button>
                </div>
                <div className="spacer" />
            </Section>

            {/* Section 2 - why we do this */}
            <Section bg={section2}>
                <div className="spacer" />
                <div className="columns wide">
                    <div className="column flex-base-33">
                        <p className="has-text-align-left margin-bottom-half">Why we do this</p>
                        <h2 className="has-text-align-left margin-top-half">
                            <strong>Because People</strong>
                        </h2>
                    </div>
                    <div className="column flex-base-66">
                        <p className="has-text-align-left">To put it simply, we exist to bring all of you together.</p>
                        <p className="has-text-align-left">We built this event, the infrastructure behind it, the bots, the avatars, the merch and everything to give back to a community that has always been there for us in times of need. We built this to reclaim some normalcy in the face of a terrifying future. </p>
                        <p className="has-text-align-left">We built this for you.</p>
                    </div>
                </div>
                <div className="spacer" />
            </Section>

            {/* Section 3 - who we are */}
            <Section bg={section3}>
                <h2>
                    <strong>
                        Who we are
                    </strong>
                </h2>
                <div className="columns wide">
                    <div className="column flex-base-33">
                        <img src={flaculacard} alt='Count FLACula.'/>
                    </div>
                    <div className="column flex-base-33">
                        <img src={dreamcard} alt='Dreamstate Seven'/>
                    </div>
                    <div className="column flex-base-33">
                        <img src={synescapecard} alt='Synescape'/>
                    </div>
                </div>
            </Section>

            {/* Section 4 - Well, you found us! */}
            <Section bg={section3}>
                <p className="has-text-align-center margin-bottom-half">
                    If you landed here by scanning a QR code off a club wall
                </p>
                <h2 className="has-text-align-center margin-top-half margin-bottom-half">
                    <strong>WELL YOU FOUND US</strong>
                </h2>
                <p className="has-text-align-center margin-top-half">
                    And we will be back with another show
                </p>
                <div className="columns wide">
                    <div className="column flex-base-50">
                        <blockquote>
                            <p>We broadcast every other Thursday from our home base in Toronto.</p>
                            <p>Tune in and subscribe to our Twitch Channel to stay in touch.</p>
                            <cite>
                                <a href='https://twitch.tv/subfrequencies' target='_blank' rel='noreferrer'>
                                    twitch.tv/subfrequencies
                                </a>
                            </cite>
                        </blockquote>
                    </div>
                    <div className="column flex-base-50">
                        <blockquote>
                            <p>You can also join the madness in our VRChat club.</p>
                            <p>HUNKERDOWNS is now a public venue and will be broadcast to directly during live shows.</p>
                            <cite>
                                <a href='https://vrchat.com/home/world/wrld_0c4485c2-660b-4bca-b629-813b483ec11b' target='_blank' rel='noreferrer'>
                                    Here's how
                                </a>
                            </cite>
                        </blockquote>
                    </div>
                </div>
            </Section>

            {/* Section 5 - FAQ */}
            <Section bg={section5}>
                <div className="spacer" />
                <p className="has-text-align-center margin-bottom-half">Everything else</p>
                <h2 className="has-text-align-center margin-top-half">
                    <strong>A few more FAQS to give</strong>
                </h2>
                <div className="columns">
                    <div className="column flex-base-33">
                        <p>
                            <strong>What's up with the cats?</strong>
                        </p>
                        <p>
                            Idk man, we just love cats and so do our viewers, so sooner or later, someone’s paws are gonna end up on the screen and the chat will go mad over it.
                        </p>
                        <p>Deal with it.</p>
                    </div>
                    <div className="column flex-base-33">
                        <p>
                            <strong>Twitch engagement</strong>
                        </p>
                        <p>
                            If you’re tuning in live on Twitch.tv you can add your requests to our queue by typing !request followed by ArtistName – SongName.
                        </p>
                        <p>
                            You can also type !meet for a link to the Google Hangout and go live on camera to show us your cat(s).
                        </p>
                        <p>
                            Archives of previous shows are available for download as full video or mp3 audio.
                        </p>
                    </div>
                    <div className="column flex-base-33">
                        <p>
                            <strong>Epic Loot</strong>
                        </p>
                        <p>
                            SubFrequencies shirts were made to order for our viewers and can be purchased provided we gather some volume of orders.
                        </p>
                        <p>
                            Other loot includes several series of stickers, the OOPS All Covers cereal box and printable BINGO cards. 
                        </p>
                        <p>
                            Twitch Subscribers also have access to our custom avatars including the infamous DopeFish.
                        </p>
                    </div>
                </div>
                <div className="spacer" />
            </Section>

            {/* Section 6 - Keep in touch */}
            <Section bg={section2}>
                <div className='spacer' />
                <h2 className='has-text-align-center'>
                    Keep in touch
                </h2>
                <p className='has-text-align-center'>
                    Subscribe on <a href='https://twitch.tv/subfrequencies' target='_blank' rel='noreferrer'>Twitch</a> or join our <a href='https://www.facebook.com/groups/549158555743930' target='_blank' rel='noreferrer'>Facebook group</a> for future updates on show dates and broadcasts
                </p>
                <Button href='mailto:subfrequencies@gmail.com'>
                    Contact
                </Button>
                <div className='spacer' />
            </Section>
        </div>
    )
}



export default SubFrequencies;
