import { queriesImg } from '@/assets/images/image'
import styles from './queries.module.scss'
import Image from 'next/image'
import WrongIcon from '@/assets/images/svg/wrongIcon'
import { useState } from 'react'

const faq = [
    {
        title: "How accurate is the AI detection?",
        content: "Our tool uses advanced algorithms trained on the latest AI models, providing over 95% accuracy in identifying AI-generated content.",
    },
    {
        title: "Can your tool detect AI content in multiple languages?",
        content: "Our tool uses advanced algorithms trained on the latest AI models, providing over 95% accuracy in identifying AI-generated content.",
    },
    {
        title: "How long does it take to analyze content?",
        content: "Our tool uses advanced algorithms trained on the latest AI models, providing over 95% accuracy in identifying AI-generated content.",
    },
    {
        title: "Is my data safe and private?",
        content: "Our tool uses advanced algorithms trained on the latest AI models, providing over 95% accuracy in identifying AI-generated content.",
    },
]

export default function Queries() {
    const [active, setActive] = useState(0);

    const toggleActive = (index) => {
        setActive (active === index ? null : index);
    };

    return (
        <section className={styles.queries}>
            <div className={styles.container}>
                <div className={styles.queriesHead}>
                    <h2>Your common queries answered with additional FAQs</h2>
                    <p>Get the insights you need to make the most of our platform's features and capabilities.</p>
                </div>
                <div className={styles.queriesList}>
                    <div className={styles.queriesListDiv}>
                        {faq.map((item, index) => (
                            <div className={`${styles.faqDiv} ${(active === index ? styles.active : "")}`} key={index}>
                                <div className={styles.faqHead}>
                                    <h3>{item.title}</h3>
                                    <div className={styles.faqIcon} onClick={() => toggleActive(index)}>
                                        <WrongIcon />
                                    </div>
                                </div>
                                <div className={styles.faqContent}>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.queriesListImg}>
                        <Image src={queriesImg} alt="queriesImg" />
                    </div>
                </div>
            </div>
        </section>
    )
}
