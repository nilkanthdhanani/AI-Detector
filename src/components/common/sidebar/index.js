import Logo from '@/assets/images/svg/logo'
import styles from './sidebar.module.scss'
import Link from 'next/link'
import CloseIcon from '@/assets/images/svg/closeIcon'
import HomeIcon from '@/assets/images/svg/homeIcon'
import HumanizeIcon from '@/assets/images/svg/humanizeIcon'
import PriceIcon from '@/assets/images/svg/priceIcon'
import BlogIcon from '@/assets/images/svg/blogIcon'
import ContactIcon from '@/assets/images/svg/contactIcon'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarDiv}>
                <div>
                    <div className={styles.sidebarDivHead}>
                        <Link href={"/"} aria-label='Logo'>
                            <Logo />
                        </Link>
                        <div className={styles.closeBtn}>
                            <CloseIcon />
                        </div>
                    </div>
                    <nav>
                        <Link href={"/"}><HomeIcon /> Home</Link>
                        <Link href={"/"}><HumanizeIcon /> Humanize</Link>
                        <Link href={"/"}><PriceIcon /> Pricing</Link>
                        <Link href={"/"}><BlogIcon /> Blog</Link>
                        <Link href={"/"}><ContactIcon /> Contact Us</Link>
                    </nav>
                </div>
                <div className={styles.loginSignin2}>
                    <Link href={"/"}>
                        <button type="button" className={styles.signinBtn}><span>SIGN IN</span></button>
                    </Link>
                    <Link href={"/"}>
                        <button type="button" className={styles.loginBtn}><span>LOG IN</span></button>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
