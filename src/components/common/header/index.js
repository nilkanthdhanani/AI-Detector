
import Link from 'next/link'
import styles from './header.module.scss'
import Logo from '@/assets/images/svg/logo'
import MenuIcon from '@/assets/images/svg/menuIcon'
import Sidebar from '../sidebar'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen (!sidebarOpen);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerDiv}>
            <div className={styles.logo}>
              <Link href={"/"} aria-label='Logo'>
                <Logo />
              </Link>
            </div>
            <nav>
              <Link href={"/"} className={pathname === "/" ? styles.active : ""}>Home</Link>
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
            <div className={styles.menu} onClick={toggleSidebar}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </header>
      <Sidebar sidebarOpen={sidebarOpen} sidebarClose={toggleSidebar} />
    </>
  )
}
