import { whoUseImg1, whoUseImg2, whoUseImg3, whoUseImg4 } from '@/assets/images/image'
import styles from './whoUse.module.scss'
import EducatorsIcon from '@/assets/images/svg/educatorsIcon';
import CreatorsIcon from '@/assets/images/svg/creatorsIcon';
import PublishingIcon from '@/assets/images/svg/publishingIcon';
import EntitiesIcon from '@/assets/images/svg/entitiesIcon';
import Image from 'next/image';

const whoUseList = [
    {
        img: whoUseImg1,
        icon: <EducatorsIcon />,
        title: "Educators",
        description: "Ensure academic integrity by quickly identifying AI-generated assignments and papers. This helps maintain originality and holds students accountable for authentic work, fostering a culture of trust and fairness.",
    },
    {
        img: whoUseImg2,
        icon: <CreatorsIcon />,
        title: "Content Creators",
        description: "Protect the authenticity of your personal or brand voice by detecting AI-generated content across platforms. This tool ensures that followers engage with genuine, human-created material, building deeper trust.",
    },
    {
        img: whoUseImg3,
        icon: <PublishingIcon />,
        title: "Publishing Houses",
        description: "Streamline editorial processes by detecting and removing AI-generated submissions, ensuring all published content is human-written. This improves accuracy, quality, and credibility across publications.",
    },
    {
        img: whoUseImg4,
        icon: <EntitiesIcon />,
        title: "Government and Legal Entities",
        description: "Safeguard information authenticity by analyzing content submissions for AI influence, protecting sensitive data and ensuring transparency in legal or governmental communications.",
    },
];

export default function WhoUse() {
    return (
        <section className={styles.whoUse}>
            <div className={styles.container2}>
                <div className={styles.WhoUseDiv}>
                    <div className={styles.container}>
                        <div className={styles.WhoUseDivHead}>
                            <h2>Who Can Use the AI Detector Tool?</h2>
                            <p>Our AI Detector tool is versatile and valuable across industries, providing accurate content verification to meet diverse needs.</p>
                        </div>
                        <div className={styles.whoUseList}>
                            {whoUseList.map((item, index) => (
                                <div className={styles.whoUseBox} key={index}>
                                    <div className={styles.whoUseBoxImg}>
                                        <Image src={item.img} alt={item.title} />
                                    </div>
                                    <div className={styles.whoUseBoxContent}>
                                        <div className={styles.whoUseIcon}>{item.icon}</div>
                                        <div className={styles.whoUseBoxText}>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
