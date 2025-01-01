import TrueIcon from '@/assets/images/svg/trueIcon'
import styles from './plans.module.scss'
import WrongIcon from '@/assets/images/svg/wrongIcon'

const featuresList = [
    {
        icon: <WrongIcon />,
        desc: <>Unlock the Full Pro Experience</>,
    },
    {
        icon: <TrueIcon />,
        desc: <>Analyze up to <span>1,00,000</span> words for AI detection</>,
    },
    {
        icon: <WrongIcon />,
        desc: <>file upload checks included</>,
    },
    {
        icon: <WrongIcon />,
        desc: <>Generate detailed PDF reports for your AI detections</>,
    },
    {
        icon: <TrueIcon />,
        desc: <>Access the complete history of all your AI Detection</>,
    },
    {
        icon: <TrueIcon />,
        desc: <>Transform up to <span>15,00</span> words with the AI Humanizer</>,
    },
    {
        icon: <TrueIcon />,
        desc: <>Upgrade plan at anytime</>,
    },
];

const plans = [
    {
        index: 1,
        title: "Free",
        price: "$0",
        time: "/Unlimited",
    },
    {
        index: 2,
        title: "Pro",
        price: "$4.49",
        time: "/monthly",
    },
    {
        index: 3,
        title: "Max",
        price: "$5.99",
        time: "/monthly",
    },
    {
        index: 4,
        title: "Lifetime",
        price: "$99.99",
        time: "/lifetime",
    },
];

export default function Plans() {
    return (
        <section className={styles.plans}>
            <div className={styles.container2}>
                <div className={styles.plansDiv}>
                    <div className={styles.container}>
                        <div className={styles.plansDivHead}>
                            <h2>Flexible Plans to Fit Your Needs</h2>
                        </div>
                        <div className={styles.plansDivBoxes}>
                            <div className={styles.plansDivBox1}>
                                <div className={styles.plansDivBox1Select}>
                                    <button type="button">Monthly</button>
                                    <button type="button">Yearly</button>
                                </div>
                                <h3>Features</h3>
                                <div className={styles.feturesDiv}>
                                    {featuresList.map((item, index) => (
                                        <div className={styles.feturesDivLine} key={index}>
                                            <div>{item.icon}</div>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.plansDivBox2}>
                                {plans.map((item, index) => (
                                    <div className={styles.planDiv} key={index}>
                                        <div className={styles.planDivTitle}>
                                            <div className={styles.radio}></div>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className={styles.planDivPrice}>
                                            <div className={styles.planDivPriceText}>
                                                <h4>{item.price}</h4>
                                                <p>{item.time}</p>
                                            </div>
                                            <button type="button">Choose Plan</button>
                                        </div>
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
