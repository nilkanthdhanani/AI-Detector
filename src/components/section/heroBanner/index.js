import { bannerEllipse } from '@/assets/images/image'
import styles from './heroBanner.module.scss'
import Image from 'next/image'
import StarIcon from '@/assets/images/svg/starIcon'

export default function HeroBanner() {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.container}>
                <div className={styles.bannerHead}>
                    <h1>Instantly <div className={styles.detectTicket}><span>Detect AI</span></div> Generated Content with Confidence</h1>
                    <p>Detect AI-generated content with precision and safeguard authenticity across your digital platforms.</p>
                </div>
                <div className={styles.aiBox}>
                    <div className={styles.aiBoxBg}>
                        <Image src={bannerEllipse} alt="bannerEllipse" />
                    </div>
                    <div className={styles.aiBoxBatch}>
                        <button type="button"><StarIcon /><span>Easy</span></button>
                        <button type="button"><StarIcon /><span>Aggresive</span></button>
                    </div>
                    <div className={styles.aiBoxInner}>
                        <div className={styles.aiBoxInner1}>
                            <div className={styles.aiBoxInner1Text}>
                                <p>To rewrite or check your content, type or paste it here and click on the button below</p>
                            </div>
                            <div className={styles.aiBoxInnerBtn}>
                                <span>0/1000</span>
                                <button type="button">Check For AI</button>
                            </div>
                        </div>
                        <div className={styles.aiBoxInner2}>
                            <div className={styles.aiBoxInner2Text}>
                            </div>
                            <div className={styles.aiBoxInnerBtn2}>
                                <button type="button">Humanize</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
