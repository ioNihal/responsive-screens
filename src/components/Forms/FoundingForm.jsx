import { IoIosArrowDown } from 'react-icons/io';
import styles from '../../styles/Forms/FoundingForm.module.css';
import { BiLinkAlt } from 'react-icons/bi';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FoundingForm = () => {
    const [organizationType, setOrganizationType] = useState('');
    const [industryType, setIndustryType] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [yearEstablishment, setYearEstablishment] = useState('');
    const [website, setWebsite] = useState('');
    const [content, setContent] = useState('');

    const handleSelectChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleChange = (value) => {
        setContent(value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <label htmlFor="o-type">Organization Type</label>
                    <div className={styles.selectWrapper}>
                        <select
                            id="o-type"
                            value={organizationType}
                            onChange={(e) => handleSelectChange(e, setOrganizationType)}
                        >
                            <option value="">Select</option>
                            <option value="Example-One">Example One</option>
                            <option value="Example-two">Example Two</option>
                            <option value="Example-three">Example Three</option>
                        </select>
                        <IoIosArrowDown className={styles.arrow} />
                    </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="i-type">Industry Types</label>
                    <div className={styles.selectWrapper}>
                        <select
                            id="i-type"
                            value={industryType}
                            onChange={(e) => handleSelectChange(e, setIndustryType)}
                        >
                            <option value="">Select</option>
                            <option value="Example-One">Example One</option>
                            <option value="Example-two">Example Two</option>
                            <option value="Example-three">Example Three</option>
                        </select>
                        <IoIosArrowDown className={styles.arrow} />
                    </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="t-size">Team Size</label>
                    <div className={styles.selectWrapper}>
                        <select
                            id="t-size"
                            value={teamSize}
                            onChange={(e) => handleSelectChange(e, setTeamSize)}
                        >
                            <option value="">Select</option>
                            <option value="Example-One">Example One</option>
                            <option value="Example-two">Example Two</option>
                            <option value="Example-three">Example Three</option>
                        </select>
                        <IoIosArrowDown className={styles.arrow} />
                    </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="year-e">Year of Establishment</label>
                    <div className={styles.dateWrapper}>
                        <input
                            type="date"
                            id="year-e"
                            value={yearEstablishment}
                            onChange={(e) => handleInputChange(e, setYearEstablishment)}
                        />
                    </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="web-url">Company Website</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            id="web-url"
                            placeholder="Website url..."
                            value={website}
                            onChange={(e) => handleInputChange(e, setWebsite)}
                        />
                        <BiLinkAlt className={styles.inputIcon} />
                    </div>
                </div>
            </div>
            <div className={styles.texteditor}>
                <label htmlFor="c-vision" style={{ fontWeight: 'bold', display: 'block' }}>
                    Company Vision
                </label>
                <ReactQuill
                    id="c-vision"
                    theme="snow"
                    value={content}
                    onChange={handleChange}
                    placeholder="Tell us about your company vision..."
                    modules={{
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['link'],
                        ],
                    }}
                    formats={[
                        'bold',
                        'italic',
                        'underline',
                        'strike',
                        'link',
                        'list',
                        'bullet',
                    ]}
                    className={styles.reactQuill}
                />
            </div>
        </div>
    );
};

export default FoundingForm;
