import { PiSuitcaseSimpleLight } from 'react-icons/pi'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.title}>
                <PiSuitcaseSimpleLight color='var(--blue)' size={'2rem'}/>
                <span>MyJob</span>
            </div>
            <div className={styles.progressContainer} >
                <div className={styles.progressInfo} >
                    <span>Setup Progress</span>
                    <span>0% Completed</span>
                </div>
                <div className={styles.progressBar}>
                    <progress></progress>
                </div>
            </div>
        </header >
    )
}

export default Header
