import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return (
        <div className="flex space-x-4 items-center pr-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '20px'}} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '20px'}}  />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '20px'}} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '20px'}}  />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px'}}  />
            </a>
        </div>
    );
};
export default SocialMedia;