import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons/faSpotify";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";

export default props => {
    return (
        <div id="footer" style={{background: props.background || "transparent"}}>
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
                <a href="https://soundcloud.com/geocentricfools" target="_blank">
                    <FontAwesomeIcon icon={faSoundcloud} size="lg"/>
                </a>
                <a href="https://youtube.com/channel/UC7PEKkhCaDoLMfEo0H-apeg" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} size="lg"/>
                </a>
                <a href="https://twitter.com/geocentricfools" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="lg"/>
                </a>
            </div>
            <span>
                    © ℗ {new Date().getFullYear()} GEOCENTRIC FOOLS
                </span>
            <style jsx>{`
                #footer {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding: 0.2rem 0 0.2rem 0;
                    flex-direction: column;
                    align-items: center;
                }
                
                #footer span {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    letter-spacing: 0.1rem;
                    font-size: 0.7rem;
                }
                
                .socialIcons {
                    padding: 0.2rem 0 0.2rem 0;
                }
                
                .socialIcons a:first-child {
                    margin-left: 0;
                }
                
                a {
                    color: white;
                    margin: 0 12px;
                    transition: color 300ms ease;
                }
                
                a:hover {
                    color: var(--primary) !important;
                }
            `}</style>
        </div>

    )
}