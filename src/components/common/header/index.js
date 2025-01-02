
import Link from 'next/link'
import styles from './header.module.scss'
import Logo from '@/assets/images/svg/logo'
import MenuIcon from '@/assets/images/svg/menuIcon'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          <Link href={"/"} className={styles.logo}>
            <Logo />
          </Link>
          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Humanize</Link>
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Contact Us</Link>
          </nav>
          <div className={styles.loginSignin}>
            <Link href={"/"}>
              <button type="button" className={styles.signinBtn}><span>SIGN IN</span></button>
            </Link>
            <Link href={"/"}>
              <button type="button" className={styles.loginBtn}><span>LOG IN</span></button>
            </Link>
          </div>
          <div className={styles.menu}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  )
}
