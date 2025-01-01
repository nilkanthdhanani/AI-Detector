import styles from './powerful.module.scss'

const powerfulList = [
    {
        number: "01.",
        title: 'High Accuracy Detection',
        description: 'Built on advanced AI models, providing you with highly accurate and reliable detection results every time.'
    },
    {
        number: "02.",
        title: 'Easy-to-Use Interface',
        description: 'Simply upload your text and analyze instantly—no technical expertise is required.'
    },
    {
        number: "03.",
        title: 'Detailed Insights',
        description: 'Get probability scores and breakdowns that help you understand content origin and authenticity.'
    },
    {
        number: "04.",
        title: 'Customizable Settings',
        description: 'Adjust detection sensitivity to meet the unique needs of your institution or business.'
    },
    {
        number: "05.",
        title: 'Data Privacy & Security',
        description: 'Your data remains private, encrypted, and is not stored after analysis, ensuring complete confidentiality.'
    },
]

export default function Powerful() {
    return (
        <section className={styles.powerful}>
            <div className={styles.container2}>
                <div className={styles.powerfulDiv}>
                    <div className={styles.container}>
                        <div className={styles.powerfulDivMain}>
                            <div className={styles.powerfulDivHead}>
                                <h2>Powerful Features for Accurate AI Detection</h2>
                                <p>Our AI detection tool is designed for precision and ease of use, helping you detect AI-generated content with confidence. Each feature is crafted to ensure reliability, speed, and security in your detection process.</p>
                                <button type="button">Trial For Free Now</button>
                            </div>
                            <div className={styles.powerfulDivList}>
                                {powerfulList.map((item, index) => (
                                    <div className={styles.powerfulDivList1} key={index}>
                                        <div className={styles.powerfulDivList1Head}>
                                            <h3><span>{item.number}</span> {item.title}</h3>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
