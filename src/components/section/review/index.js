import { clientImg } from '@/assets/images/image'
import styles from './review.module.scss'
import Image from 'next/image'
import StarIcon from '@/assets/images/svg/starIconYellow'
import QuotesIcon from '@/assets/images/svg/quotesIcon'
import Marquee from "react-fast-marquee";

export default function Review() {
    return (
        <section className={styles.review}>
            <div className={styles.reviewHead}>
                <h2>Trusted by Experts and Organizations Worldwide</h2>
            </div>
            <Marquee speed={50}>
                <div className={styles.reviewList}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div className={styles.reviewListBox} key={index}>
                            <div className={styles.reviewListProfile}>
                                <div className={styles.profileImage}>
                                    <Image src={clientImg} alt="clientImg" />
                                </div>
                                <h3>Kevin Gohil</h3>
                                <div className={styles.stars}>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className={styles.reviewListBoxText}>
                                <QuotesIcon />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    )
}
