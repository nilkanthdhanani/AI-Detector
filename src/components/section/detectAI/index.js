import UploadIcon from '@/assets/images/svg/uploadIcon'
import styles from './detectAI.module.scss'
import AnalysisIcon from '@/assets/images/svg/analysisIcon'
import ReportIcon from '@/assets/images/svg/reportIcon'

const detectData = [
    {
        icon: <UploadIcon />,
        title: "Upload or Paste Text",
        description: "Easily upload your document or paste the text you want to analyze. The tool is designed for simplicity, requiring no technical setup."
    },
    {
        icon: <AnalysisIcon />,
        title: "Instant Analysis",
        description: "Our AI detection model scans the content, identifying patterns and markers typical of AI-generated text in just seconds."
    },
    {
        icon: <ReportIcon />,
        title: "Receive a Detailed Report",
        description: "Get a comprehensive report with probability scores and confidence levels, giving you a clear assessment of your content's authenticity."
    },
]

export default function DetectAI() {
    return (
        <section className={styles.detectAI}>
            <div className={styles.container}>
                <div className={styles.detectAIHead}>
                    <h2>Detect AI Content in Seconds</h2>
                    <p>Our AI Detection tool makes it easy to instantly analyze and identify AI-generated text. Designed with advanced machine learning algorithms, it delivers precise and reliable detection for educators, publishers, businesses, and more.</p>
                </div>
                <div className={styles.detectBoxes}>
                    {detectData.map((item, index) => (
                        <div key={index} className={styles.detectBox}>
                            <div className={styles.detectBoxInner}>
                                <div className={styles.detectBoxInnerText}>
                                    <div className={styles.imgWrapper}>
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
