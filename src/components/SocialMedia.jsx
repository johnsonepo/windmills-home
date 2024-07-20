import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialMediaLinks from '../data/social-media';

const SocialMedia = () => {
    return (
        <div className="flex space-x-4 items-center pr-3">
            {socialMediaLinks.map((link, key) => (
                <a key={key} href={link.url} target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={link.icon} style={{ fontSize: link.fontSize }} />
                </a>
            ))}
        </div>
    );
};
export default SocialMedia;