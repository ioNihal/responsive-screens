import { PiChecks } from 'react-icons/pi'
import styles from '../styles/Completed.module.css'
import { GiPartyPopper } from 'react-icons/gi'
import { GoArrowRight } from 'react-icons/go'

const Completed = () => {
    return (
        <div className={styles.container}>
            <div className={styles.checkWrapper}>
                <PiChecks className={styles.check} />
            </div>
            <h2 className={styles.title}><GiPartyPopper className={styles.popper} /> Congratulations, You profile is 100% complete!</h2>
            <p className={styles.paragraph}>
                Donec hendrerit, ante mattis pellentesque eleifend, tortor urna
                malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc
                mauris arcu, mattis sed sem vitae.
            </p>
            <div className={styles.btnWrapper}>
                <button disabled={true} className={styles.dashboardBtn}>
                    View Dashboard
                </button>
                <button onClick={() => window.location.reload()} className={styles.postBtn}>
                    Post Job <GoArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Completed