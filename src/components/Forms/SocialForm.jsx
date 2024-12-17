import styles from '../../styles/Forms/SocialForm.module.css'
import { useState } from 'react';
import { IoIosArrowDown, IoLogoTwitter } from 'react-icons/io';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';
import { LuCirclePlus } from 'react-icons/lu';

const SocialForm = () => {
    const [socialLinks, setSocialLinks] = useState([
        { platform: 'Facebook', url: '' },
        { platform: 'Twitter', url: '' },
        { platform: 'Instagram', url: '' },
        { platform: 'Youtube', url: '' },
    ]);

    const handleInputChange = (index, e) => {
        const newLinks = [...socialLinks];
        newLinks[index].url = e.target.value;
        setSocialLinks(newLinks);
    };

    const handleAddLink = () => {
        if (socialLinks.length > 4) {
            alert('You can only add 5 social links')
            return;
        }
        setSocialLinks([...socialLinks, { platform: '', url: '' }]);
    };

    const handleRemoveLink = (index) => {
        if (socialLinks.length <= 1) {
            alert('You need minimum 1 social link')
            return;
        }
        const newLinks = socialLinks.filter((_, i) => i !== index);
        setSocialLinks(newLinks);
    };

    const getIcon = (platform) => {
        switch (platform) {
            case 'Facebook':
                return <FaFacebookF className={styles.platformIcon} />;
            case 'Twitter':
                return <IoLogoTwitter className={styles.platformIcon} />;
            case 'Instagram':
                return <BiLogoInstagram className={styles.platformIcon} />;
            case 'Youtube':
                return <BiLogoYoutube className={styles.platformIcon} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            {socialLinks.map((link, index) => (
                <>
                    <label htmlFor={`platform-${index}`} className={styles.label}>Social Link {index + 1}</label>
                    <div className={styles.row} key={index}>
                        <div className={styles.inputWrapper}>
                            <div className={styles.selectWrapper}>
                                {getIcon(link.platform)}
                                <select
                                    value={link.platform}
                                    id={`platform-${index}`}
                                    onChange={(e) => {
                                        const newLinks = [...socialLinks];
                                        newLinks[index].platform = e.target.value;
                                        setSocialLinks(newLinks);
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Youtube">Youtube</option>
                                </select>
                                <IoIosArrowDown className={styles.arrow} />
                            </div>
                            <input
                                type="text"
                                placeholder="Profile link/url..."
                                value={link.url}
                                onChange={(e) => handleInputChange(index, e)}
                                className={styles.input}
                            />

                        </div>
                        <div className={styles.removeIcon}>
                            <IoCloseCircleOutline
                                onClick={() => handleRemoveLink(index)}
                            />
                        </div>
                    </div>
                </>
            ))
            }
            <button onClick={handleAddLink} className={styles.addButton}>
                <LuCirclePlus /> Add New Social Link
            </button>
        </div>
    );
}

export default SocialForm;
