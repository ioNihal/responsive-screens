import { AiOutlineUser } from 'react-icons/ai';
import styles from '../styles/Form.module.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { GoArrowRight, GoGlobe } from 'react-icons/go';
import { PiAt } from 'react-icons/pi';
import { useProgress } from './ProgressContext';
import CompanyForm from './Forms/CompanyForm';
import FoundingForm from './Forms/FoundingForm';
import SocialForm from './Forms/SocialForm';
import ContactForm from './Forms/ContactForm';

const Form = () => {
    const { step, setStep, nextStep, prevStep, } = useProgress();

    return (
        <main className={styles.container}>
            <div className={styles.navbar}>
                <button
                    className={`${styles.navItem} ${step === 1 ? `${styles.active}` : ""}`}
                    onClick={() => setStep(1)}
                >
                    <AiOutlineUser />
                    Company Info
                </button>
                <button
                    className={`${styles.navItem} ${step === 2 ? `${styles.active}` : ""}`}
                    onClick={() => setStep(2)}
                >
                    <FaRegUserCircle />
                    Founding Info
                </button>
                <button
                    className={`${styles.navItem} ${step === 3 ? `${styles.active}` : ""}`}
                    onClick={() => setStep(3)}
                >
                    <GoGlobe />
                    Social Media Profile
                </button>
                <button
                    className={`${styles.navItem} ${step === 4 ? `${styles.active}` : ""}`}
                    onClick={() => setStep(4)}
                >
                    <PiAt />
                    Contact
                </button>
            </div>

            <div className={styles.formContainer}>
                {step === 1 && <CompanyForm />}
                {step === 2 && <FoundingForm />}
                {step === 3 && <SocialForm />}
                {step === 4 && <ContactForm />}
            </div>

            <div className={styles.pagination}>
                <button onClick={prevStep} disabled={step === 1} className={styles.prevBtn}>
                    Previous
                </button>
                <button onClick={nextStep} disabled={step === 4} className={styles.nextBtn}>
                    Save & Next <GoArrowRight />
                </button>
            </div>
        </main>
    );
}

export default Form;
