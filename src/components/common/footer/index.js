import Link from 'next/link'
import styles from './footer.module.scss'
import Linkdin from '@/assets/images/svg/linkdin'
import Facebook from '@/assets/images/svg/facebook'
import Instagram from '@/assets/images/svg/instagram'
import Twitter from '@/assets/images/svg/twitter'
import Logo from '@/assets/images/svg/logo'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerSubscribe}>
            <div className={styles.footerSubscribeHead}>
              <h2>Subscribe to our newsletter</h2>
              <p>Sign up for our newsletter to receive updates and exclusive offers</p>
            </div>
            <form className={styles.footerForm}>
              <input type='email' placeholder='Enter your email' />
              <button type='submit'><span>Subscribe Now</span></button>
            </form>
          </div>
          <div className={styles.footerMain}>
            <div className={styles.footerMainText}>
              <Link href={"/"} className={styles.logo} aria-label='Logo'>
                <Logo />
              </Link>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className={styles.footerMainLinks}>
              <div className={styles.footerMainLinksDiv}>
                <h3>Useful Links</h3>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>Blog</Link>
                <Link href={"/"}>Contact Us</Link>
              </div>
              <div className={styles.footerMainLinksDiv}>
                <h3>Company</h3>
                <Link href={"/"}>Sitemap</Link>
                <Link href={"/"}>Privacy Policy</Link>
                <Link href={"/"}>Terms & Condition</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        <div className={styles.container}>
          <div className={styles.footerCopyRightDiv}>
            <p>Copyright AI Detector © 2024. All Rights ReservedF</p>
            <div className={styles.footerLink}>
              <Link href={'https://in.linkedin.com/'} target='_blank' aria-label='Linkdin'>
                <div className={styles.footerLinkDiv}><Linkdin /></div>
              </Link>
              <Link href={'https://www.facebook.com/'} target='_blank' aria-label='Facebook'>
                <div className={styles.footerLinkDiv}><Facebook /></div>
              </Link>
              <Link href={'https://www.instagram.com/'} target='_blank' aria-label='Instagram'>
                <div className={styles.footerLinkDiv}><Instagram /></div>
              </Link>
              <Link href={'https://x.com/'} target='_blank' aria-label='Twitter'>
                <div className={styles.footerLinkDiv}><Twitter /></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
