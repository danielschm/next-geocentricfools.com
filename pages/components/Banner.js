import Link from "next/link";
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faSpotify} from "@fortawesome/free-brands-svg-icons/faSpotify";

const Banner = (props) => (
    <div className="bannerContainer">
        <div className="container">
            <div className="banner text-light">
                <div>We are</div>
                <h1>Geocentric Fools</h1>
                <div className="slogan">
                    {props.slogan ? props.slogan.map((e, i) => {
                        return (
                            <div key={i} className={"typewriter"}>
                                <div className={"typewriter-text-" + i}>{e}</div>
                            </div>
                        )
                    }) : ""}
                </div>
                <div className="socialIcons">
                    <a href="https://open.spotify.com/artist/0w1oFjdkV5h4OQG8q8htZK" target="_blank">
                        <FontAwesomeIcon icon={faSpotify} size="lg"/>
                    </a>
                    <a href="https://facebook.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="lg"/>
                    </a>
                    <a href="https://instagram.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                    </a>
                    <a href="https://twitter.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faSoundcloud} size="lg"/>
                    </a>
                    <a href="https://twitter.com/geocentricfools" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="lg"/>
                    </a>
                </div>
            </div>
            <Link href="/about" passHref>
                <a>
                    <Button className="aboutButton">
                        <span className="buttonText">About</span>
                        <FontAwesomeIcon className="navIcon" icon={faArrowRight}/>
                    </Button>
                </a>
            </Link>
        </div>
        <style jsx>{`
            .bannerContainer {
                flex: 1;
            }
            
            .banner {
                padding-top: 15%;
            }
            
            h1 {
                text-transform: uppercase;
            }
            
            .typewriter {
                display: inline-block;
            }
            
            .slogan {
                display: table-caption;
                line-height: 1.3;
                font-size: 1.3rem;
                color: white;
                padding: 0.5rem 0 0.5rem 0;
                margin-bottom: 1rem;
                border-top: 1px solid rgba(255,255,255,0.1);
                border-bottom: 1px solid rgba(255,255,255,0.1);
                transition: color 1000ms ease;
            }

            .typewriter-text-0 {
                overflow: hidden;
                letter-spacing: 0.1rem;
                animation: typing 4s steps(40, end), blink 0.80s step-end 5 forwards;
                white-space: nowrap;
                font-size: 1rem;
                border-right: 4px solid white;
                box-sizing: border-box;
            }
            
            .typewriter-text-1 {
                width: 0%;
                overflow: hidden;
                letter-spacing: 0.1rem;
                animation: typing 4s steps(40, end) 4s forwards, blink 0.9s step-end 4s infinite;
                white-space: nowrap;
                font-size: 1rem;
                border-right: 4px solid transparent;
                box-sizing: border-box;
            }
            
            @keyframes typing {
                from { 
                    width: 0% 
                }
                to { 
                    width: 100%
                }
            }
            
            @keyframes blink {
                from, to { 
                    border-color: transparent; 
                }
                50% { 
                    border-color: white 
                }
            }
            
            p:hover {
                color: lightgray;
            }
            
            .socialIcons {
                margin-bottom: 1.5rem;
            }
            
            .socialIcons a:first-child {
                margin-left: 0;
            }
            
            a {
                color: white;
                margin: 0 12px;
                transition: color 600ms ease;
            }
            
            a:hover {
                color: var(--primary);
            }
            
            .aboutButton {
                font-weight: 500 !important;
            }
            
            .buttonText {
                margin-right: 0.5rem;
            }
        `}</style>
    </div>
);

export default Banner;