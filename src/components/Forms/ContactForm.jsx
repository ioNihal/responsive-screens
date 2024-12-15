import styles from '../../styles/Forms/ContactForm.module.css'

const ContactForm = () => {
    return (
        <div>
            <h2>Contact</h2>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter company email" />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input type="tel" placeholder="Enter phone number" />
            </div>
        </div>
    )
}

export default ContactForm