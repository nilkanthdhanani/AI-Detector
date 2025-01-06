import Logo from '@/assets/images/svg/logo'
import styles from './sidebar.module.scss'
import Link from 'next/link'
import CloseIcon from '@/assets/images/svg/closeIcon'
import { usePathname } from 'next/navigation'

export default function Sidebar({ sidebarOpen, sidebarClose }) {
    const pathname = usePathname();

    return (
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
            <div className={styles.sidebarDiv}>
                <div>
                    <div className={styles.sidebarDivHead}>
                        <Link href={"/"} aria-label='Logo'>
                            <Logo />
                        </Link>
                        <div className={styles.closeBtn} onClick={sidebarClose}>
                            <CloseIcon />
                        </div>
                    </div>
                    <nav>
                        <Link href={"/"} className={pathname === "/" ? styles.active : ""}>Home</Link>
                        <Link href={"/"}>Humanize</Link>
                        <Link href={"/"}>Pricing</Link>
                        <Link href={"/"}>Blog</Link>
                        <Link href={"/"}>Contact Us</Link>
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
