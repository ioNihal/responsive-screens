import styles from '../../styles/Forms/SocialForm.module.css'

const SocialForm = () => {
    return (
        <div>
            <h2>Social Media Profile</h2>
            <div className="form-group">
                <label>LinkedIn:</label>
                <input type="url" placeholder="Enter LinkedIn profile URL" />
            </div>
            <div className="form-group">
                <label>Twitter:</label>
                <input type="url" placeholder="Enter Twitter profile URL" />
            </div>
        </div>
    )
}

export default SocialForm