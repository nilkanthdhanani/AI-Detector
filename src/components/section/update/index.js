import { blog1, blog2, blog3 } from '@/assets/images/image'
import styles from './update.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const blogData = [
    {
        image: blog1,
        name: "Kevin Gohil",
        date: "Nov 06, 2024",
        content: "Is it possible for teachers to detect chatgpt?",
    },
    {
        image: blog2,
        name: "Kevin Gohil",
        date: "Nov 06, 2024",
        content: "How to Detect AI Writing - Write like a human",
    },
    {
        image: blog3,
        name: "Kevin Gohil",
        date: "Nov 06, 2024",
        content: "AI Content Detection: How does it work?",
    },
]

export default function Update() {
    return (
        <section className={styles.update}>
            <div className={styles.container2}>
                <div className={styles.updateDiv}>
                    <div className={styles.container}>
                        <div className={styles.updateDivHead}>
                            <h2>Our Regular Update Blog and media </h2>
                        </div>
                        <div className={styles.updateDivBoxes}>
                            {blogData.map((item, index) => (
                                <div className={styles.updateDivBox} key={index}>
                                    <div className={styles.updateDivBoxImage}>
                                        <Image src={item.image} alt="blog" />
                                    </div>
                                    <div className={styles.updateDivBoxContent}>
                                        <div className={styles.updateDivBoxhead}>
                                            <span>{item.name}</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <p>{item.content}</p>
                                        <Link href={"/"}>Read More</Link>
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
