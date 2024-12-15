import styles from '../../styles/Forms/FoundingForm.module.css'

const FoundingForm = () => {
    return (
        <div>
            <h2>Founding Info</h2>
            <div className="form-group">
                <label>Founded Date:</label>
                <input type="date" />
            </div>
            <div className="form-group">
                <label>Founder Name:</label>
                <input type="text" placeholder="Enter founder's name" />
            </div>
        </div>
    )
}

export default FoundingForm