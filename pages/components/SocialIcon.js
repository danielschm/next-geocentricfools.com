import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faSpotify} from "@fortawesome/free-brands-svg-icons/faSpotify";
import {faMixcloud} from "@fortawesome/free-brands-svg-icons/faMixcloud";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faApple} from "@fortawesome/free-brands-svg-icons/faApple";
import {faBandcamp} from "@fortawesome/free-brands-svg-icons/faBandcamp";

export default props => {
    let icon, link;
    if (props.soundcloud) {
        icon = faSoundcloud;
        link = props.soundcloud;
    } else if (props.facebook) {
        icon = faFacebook;
        link = props.facebook;
    } else if (props.youtube) {
        icon = faYoutube;
        link = props.youtube;
    } else if (props.spotify) {
        icon = faSpotify;
        link = props.spotify;
    } else if (props.mixcloud) {
        icon = faMixcloud;
        link = props.mixcloud;
    } else if (props.instagram) {
        icon = faInstagram;
        link = props.instagram;
    } else if (props.twitter) {
        icon = faTwitter;
        link = props.twitter;
    } else if (props.apple) {
        icon = faApple;
        link = props.apple;
    } else if (props.bandcamp) {
        icon = faBandcamp;
        link = props.bandcamp;
    }

    return (
        <a href={link} target="_blank">
            <FontAwesomeIcon icon={icon} size={props.size}/>
        </a>
    )
}