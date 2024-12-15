import { AiOutlineUser } from 'react-icons/ai'
import styles from '../styles/Form.module.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { GoGlobe } from 'react-icons/go'
import { PiAt } from 'react-icons/pi'

const Form = () => {
    return (
        <main className={styles.container}>
            <ul className={styles.navbar}>
                <li className={styles.navItem}>
                    <AiOutlineUser />
                    <span>Company Info</span>
                </li>
                <li className={styles.navItem}>
                    <FaRegUserCircle />
                    <span>Founding Info</span>
                </li>
                <li className={styles.navItem}>
                    <GoGlobe />
                    <span>Social Media Profile</span>
                </li>
                <li className={styles.navItem}>
                    <PiAt />
                    <span>Contact</span>
                </li>
            </ul>
        </main>
    )
}

export default Form