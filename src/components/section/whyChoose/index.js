import EducationIcon from '@/assets/images/svg/educationIcon'
import styles from './whyChoose.module.scss'
import PublisherIcon from '@/assets/images/svg/publisherIcon'
import CreatorIcon from '@/assets/images/svg/creatorIcon'
import BusinessIcon from '@/assets/images/svg/businessIcon'

export default function WhyChoose() {
    return (
        <section className={styles.whyChoose}>
            <div className={styles.container}>
                <div className={styles.whyChooseDiv}>
                    <div className={styles.whyChooseBox}>
                        <div className={styles.whyChooseBoxDiv}>
                            <div className={styles.whyChooseBoxHead}>
                                <div className={styles.whyChooseIcon}>
                                    <EducationIcon />
                                </div>
                                <h3>For Education</h3>
                            </div>
                            <p>Uphold academic standards by detecting AI-generated assignments, helping students maintain originality in their work.</p>
                        </div>
                        <div className={styles.whyChooseBoxDiv}>
                            <div className={styles.whyChooseBoxHead}>
                                <div className={styles.whyChooseIcon}>
                                    <CreatorIcon />
                                </div>
                                <h3>For Content Creators</h3>
                            </div>
                            <p>Keep your platforms genuine by verifying content authenticity, protecting your brand’s voice and message.</p>
                        </div>
                    </div>
                    <div className={styles.whyChooseHead}>
                        <h2>Why Choose Our AI Content Detector?</h2>
                    </div>
                    <div className={styles.whyChooseBox}>
                        <div className={styles.whyChooseBoxDiv}>
                            <div className={styles.whyChooseBoxHead}>
                                <div className={styles.whyChooseIcon}>
                                    <PublisherIcon />
                                </div>
                                <h3>For Publishers</h3>
                            </div>
                            <p>Improve editorial accuracy by quickly filtering out AI-written material, maintaining high-quality, human-generated content.</p>
                        </div>
                        <div className={styles.whyChooseBoxDiv}>
                            <div className={styles.whyChooseBoxHead}>
                                <div className={styles.whyChooseIcon}>
                                    <BusinessIcon />
                                </div>
                                <h3>For Businesses</h3>
                            </div>
                            <p>Safeguard your brand's reputation by identifying AI-created user content, ensuring only trusted information is displayed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
