import { useState } from 'react';
import styles from '../../styles/Forms/ContactForm.module.css';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { IoIosArrowDown } from 'react-icons/io';
import { TfiEmail } from 'react-icons/tfi';

const ContactForm = () => {
    const [location, setLocation] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('91');

    const handleTextChange = (event) => setLocation(event.target.value);

    const handleCountryCodeChange = (event) => setSelectedCountryCode(event.target.value);

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <label htmlFor="location">Map Location</label>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={handleTextChange}
                        placeholder="Enter location"
                        className={styles.location}
                        required
                    />
                </div>
            </div>
            <div className={styles.row}>
                <label htmlFor="phone" className={styles.label}>Phone</label>
                <div className={styles.inputWrapper}>
                    <div className={styles.selectWrapper}>
                        <LiaFlagUsaSolid className={styles.platformIcon} />
                        <select
                            id="phone"
                            value={selectedCountryCode}
                            onChange={handleCountryCodeChange}
                            aria-label="Country Code"
                        >
                            <option value="91">+91</option>
                            <option value="92">+92</option>
                            <option value="1">+1</option>
                            <option value="202">+202</option>
                        </select>
                        <IoIosArrowDown className={styles.arrow} />
                    </div>
                    <input
                        type="text"
                        placeholder="Phone number..."
                        required
                        className={styles.phone}
                    />
                </div>
            </div>
            <div className={styles.row}>
                <label htmlFor="email">Email</label>
                <div className={styles.inputWrapper}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        required
                    />
                    <TfiEmail className={styles.inputIcon} />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
