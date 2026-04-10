// Removed React import
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.companyInfo}>
                    <div className={styles.logoBox}>
                        <div className={styles.stainlessWrapper}>
                            <div className={styles.stainlessGradient}></div>
                            <img src="/assets/logo.png" alt={t('common.companyName')} className={styles.hiddenImg} />
                        </div>
                        <span className={styles.logoSubtext}>Hatano Screen Printing Co., Ltd.</span>
                    </div>
                    <p className={styles.address}>{t('footer.address')}</p>
                    <p className={styles.contact}>
                        TEL: 052-412-5003<br />
                        FAX: 052-412-4337<br />
                        Email: hatano@mac.email.ne.jp
                    </p>
                </div>

                <div className={styles.footerLinksWrapper}>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/">{t('nav.top')}</Link></li>
                        <li><Link to="/service">{t('nav.service')}</Link></li>
                        <li><Link to="/works">{t('nav.works')}</Link></li>
                        <li><Link to="/company">{t('nav.company')}</Link></li>
                    </ul>
                    <ul className={styles.footerLinks}>
                        <li><Link to="/recruit">{t('nav.recruit')}</Link></li>
                        <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        <li><Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className="container">
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Hatano Screen Printing Co., Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
