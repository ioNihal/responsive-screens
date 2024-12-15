import { useState } from 'react';
import styles from '../../styles/Forms/CompanyForm.module.css';
import { FiUploadCloud } from 'react-icons/fi';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CompanyForm = () => {
    const [logoFileName, setLogoFileName] = useState("");
    const [bannerFileName, setBannerFileName] = useState("");
    const [logo, setLogo] = useState([]);
    const [banner, setBanner] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [content, setContent] = useState("");


    const handleChange = (value) => {
        setContent(value);
    };


    const handleDrop = (event, setFileState, setFileNameState) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFile = droppedFiles[0];
            setFileState([newFile]);
            setFileNameState(newFile.name);
        }
    };

    const handleFileChange = (event, setFileState, setFileNameState) => {
        const file = event.target.files[0];
        if (file) {
            setFileState([file]);
            setFileNameState(file.name);
        }
    };

    const handleTextChange = (event) => {
        setCompanyName(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.uploadsCon}>
                <h3 className={styles.title}>Logo & Banner Image</h3>
                <div className={styles.uploads}>
                    {/* Logo Upload */}
                    <div className={styles.logoUpload}>
                        <span>Upload Document</span>
                        <input
                            type="file"
                            id="logo"
                            name="logo"
                            accept="image/*"
                            onChange={(event) => handleFileChange(event, setLogo, setLogoFileName)}
                            hidden
                        />
                        <label
                            htmlFor="logo"
                            className={styles.label}
                            onDrop={(event) => handleDrop(event, setLogo, setLogoFileName)}
                            onDragOver={(event) => event.preventDefault()}
                        >
                            <div className={styles.uploadIcon}>
                                <FiUploadCloud size="2rem" />
                            </div>
                            <p className={styles.uploadText}>
                                {logoFileName || <><span>Browse photo</span> or drop here</>}
                            </p>
                            <p className={styles.uploadInfo}>
                                A photo larger than 400 pixels works best. Max photo size 5 MB.
                            </p>
                        </label>
                    </div>

                    {/* Banner Upload */}
                    <div className={styles.bannerUpload}>
                        <span>Banner Image</span>
                        <input
                            type="file"
                            id="banner"
                            accept="image/*"
                            onChange={(event) => handleFileChange(event, setBanner, setBannerFileName)}
                            hidden
                        />
                        <label
                            htmlFor="banner"
                            className={styles.label}
                            onDrop={(event) => handleDrop(event, setBanner, setBannerFileName)}
                            onDragOver={(event) => event.preventDefault()}
                        >
                            <div className={styles.uploadIcon}>
                                <FiUploadCloud size="2rem" />
                            </div>
                            <p className={styles.uploadText}>
                                {bannerFileName || <><span>Browse photo</span> or drop here</>}
                            </p>
                            <p className={styles.uploadInfo}>
                                Banner images optimal dimension 1520x400. Supported
                                format JPEG, PNG. Max photo size 5 MB.
                            </p>
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.companyInfo}>
                <div className={styles.companyName}>
                    <label htmlFor="companyName">Company Name</label>
                    <input type='text' id="companyName" value={companyName} onChange={handleTextChange} />
                </div>
                <div className={styles.aboutUs}>
                    <label htmlFor="about-us" style={{ fontWeight: 'bold', display: 'block'}}>
                        About Us
                    </label>
                    <ReactQuill
                        id="about-us"
                        theme="snow"
                        value={content}
                        onChange={handleChange}
                        placeholder="Write down about your company here. Let the candidate know who we are..."
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
        </div>
    );
};

export default CompanyForm;
