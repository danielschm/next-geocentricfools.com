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
                <p>{props.slogan}</p>
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
            
            p {
                color: white;
                width: 18rem;
                margin-top: 1rem;
                padding: 0.5rem 0 0.5rem 0;
                border-top: 1px solid rgba(255,255,255,0.1);
                border-bottom: 1px solid rgba(255,255,255,0.1);
                transition: color 1000ms ease;
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