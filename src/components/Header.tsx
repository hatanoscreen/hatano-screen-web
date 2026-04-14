// Removed React import
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import logoImg from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLang = () => i18n.changeLanguage(i18n.language?.startsWith('ja') ? 'en' : 'ja');

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link to="/" className={styles.logo}>
                    <div className={styles.stainlessWrapper}>
                        <div className={styles.stainlessGradient}></div>
                        <img src={logoImg} alt={t('common.companyName')} className={styles.hiddenImg} />
                    </div>
                    <span className={styles.logoSubtext}>Hatano Screen Printing Co., Ltd.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        <li><Link to="/" className={styles.navLink}>{t('nav.top')}</Link></li>
                        <li><Link to="/service" className={styles.navLink}>{t('nav.service')}</Link></li>
                        <li><Link to="/company" className={styles.navLink}>{t('nav.company')}</Link></li>
                        <li><Link to="/works" className={styles.navLink}>{t('nav.works')}</Link></li>
                        <li><Link to="/recruit" className={styles.navLink}>{t('nav.recruit')}</Link></li>
                    </ul>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <button onClick={toggleLang} className={styles.langToggle}>
                            {i18n.language?.startsWith('ja') ? 'EN' : 'JP'}
                        </button>
                        <Link to="/contact">
                            <Button variant="primary">{t('nav.contact')}</Button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile menu toggle */}
                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className={styles.mobileNavOverlay} onClick={toggleMenu}>
                    <div className={styles.mobileNavPane} onClick={e => e.stopPropagation()}>
                        <div className={styles.mobileNavHeader}>
                            <span className={styles.logoText}>{t('nav.menu')}</span>
                            <button onClick={toggleMenu} aria-label="Close Menu"><X size={28} /></button>
                        </div>
                        <nav className={styles.mobileNav}>
                            <ul className={styles.mobileNavList}>
                                <li>
                                    <button onClick={toggleLang} className={styles.langToggleMobile}>
                                        {i18n.language?.startsWith('ja') ? 'Switch to English' : '日本語に切り替え'}
                                    </button>
                                </li>
                                <li><Link to="/" onClick={toggleMenu}>{t('nav.top')}</Link></li>
                                <li><Link to="/service" onClick={toggleMenu}>{t('nav.service')}</Link></li>
                                <li><Link to="/company" onClick={toggleMenu}>{t('nav.company')}</Link></li>
                                <li><Link to="/works" onClick={toggleMenu}>{t('nav.works')}</Link></li>
                                <li><Link to="/recruit" onClick={toggleMenu}>{t('nav.recruit')}</Link></li>
                                <li className={styles.mobileContact}>
                                    <Link to="/contact" onClick={toggleMenu}>
                                        <Button variant="primary" style={{ width: '100%' }}>{t('nav.contact')}</Button>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
