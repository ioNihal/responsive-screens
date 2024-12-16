
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import styles from '../styles/Header.module.css';
import { useProgress } from './ProgressContext';

const Header = () => {
    const { step, progress } = useProgress();

    return (
        <header className={styles.container}>
            <div className={styles.title}>
                <PiSuitcaseSimpleLight color="var(--blue)" size={"2rem"} />
                <span>MyJob</span>
            </div>
            <div className={styles.progressContainer}>
                <div className={styles.progressInfo}>
                    <span>Setup Progress</span>
                    <span>{Math.round(progress)}% Completed</span>
                </div>
                <div className={styles.progressBar}>
                    <progress value={progress} max="100"></progress>
                </div>
            </div>
        </header>
    );
};

export default Header;