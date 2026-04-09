// Removed React import
import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.pageWrapper}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>{t('contactPage.title')}</h1>
                    <p className={styles.pageSubtitle}>{t('contactPage.subtitle')}</p>
                </div>
            </div>

            <div className={`container section-padding ${styles.contactContainer}`}>

                <div className={styles.contactIntro}>
                    <p className={styles.introText} dangerouslySetInnerHTML={{ __html: t('contactPage.intro') }} />

                    <div className={styles.directContact}>
                        <div className={styles.contactMethod}>
                            <Phone size={24} className={styles.icon} />
                            <div className={styles.methodInfo}>
                                <h4>{t('contactPage.direct.phone')}</h4>
                                <p className={styles.phoneNumber}>052-412-5003</p>
                                <p className={styles.hours}>{t('contactPage.direct.hours')}</p>
                            </div>
                        </div>
                        <div className={styles.contactMethod}>
                            <Mail size={24} className={styles.icon} />
                            <div className={styles.methodInfo}>
                                <h4>{t('contactPage.direct.mail')}</h4>
                                <p className={styles.mailAddress}>hatano@mac.email.ne.jp</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <SectionTitle title={t('contactPage.form.title')} center />

                    <form className={styles.contactForm} onSubmit={(e) => { e.preventDefault(); alert(t('contactPage.form.alert')); }}>

                        <div className={styles.formGroup}>
                            <label htmlFor="inquiryType" className={styles.label}>{t('contactPage.form.typeLabel')} <span className={styles.required}>{t('contactPage.form.req')}</span></label>
                            <select id="inquiryType" className={styles.input} required defaultValue="">
                                <option value="" disabled>{t('contactPage.form.typePlaceholder')}</option>
                                <option value="business">{t('contactPage.form.typeOpts.business')}</option>
                                <option value="estimate">{t('contactPage.form.typeOpts.estimate')}</option>
                                <option value="recruit">{t('contactPage.form.typeOpts.recruit')}</option>
                                <option value="other">{t('contactPage.form.typeOpts.other')}</option>
                            </select>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>{t('contactPage.form.nameLabel')} <span className={styles.required}>{t('contactPage.form.req')}</span></label>
                                <input type="text" id="name" className={styles.input} placeholder={t('contactPage.form.namePlaceholder')} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="company" className={styles.label}>{t('contactPage.form.companyLabel')} <span className={styles.optional}>{t('contactPage.form.opt')}</span></label>
                                <input type="text" id="company" className={styles.input} placeholder={t('contactPage.form.companyPlaceholder')} />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>{t('contactPage.form.emailLabel')} <span className={styles.required}>{t('contactPage.form.req')}</span></label>
                                <input type="email" id="email" className={styles.input} placeholder={t('contactPage.form.emailPlaceholder')} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>{t('contactPage.form.phoneLabel')} <span className={styles.optional}>{t('contactPage.form.opt')}</span></label>
                                <input type="tel" id="phone" className={styles.input} placeholder={t('contactPage.form.phonePlaceholder')} />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>{t('contactPage.form.msgLabel')} <span className={styles.required}>{t('contactPage.form.req')}</span></label>
                            <textarea id="message" className={styles.textarea} rows={6} placeholder={t('contactPage.form.msgPlaceholder')} required></textarea>
                        </div>

                        <div className={styles.privacyConsent}>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" required />
                                <span className={styles.checkboxText}>
                                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.privacyLink}>{t('footer.privacy')}</a>
                                    {t('contactPage.form.privacyConsent')}
                                </span>
                            </label>
                        </div>

                        <div className={styles.submitWrapper}>
                            <Button type="submit" size="lg" className={styles.submitBtn}>{t('contactPage.form.submitBtn')}</Button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
