import Logo from '@/assets/images/svg/logo'
import styles from './sidebar.module.scss'
import Link from 'next/link'
import CloseIcon from '@/assets/images/svg/closeIcon'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarDiv}>
                <div className={styles.sidebarDivHead}>
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                    <div className={styles.closeBtn}>
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </aside>
    )
}
