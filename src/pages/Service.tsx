// Removed React import
import styles from './Service.module.css';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Printer, Image as ImageIcon, Scissors, Megaphone } from 'lucide-react';

const Service = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.pageWrapper}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>{t('service.title')}</h1>
                    <p className={styles.pageSubtitle}>{t('service.subtitle')}</p>
                </div>
            </div>

            <div className="container section-padding">

                {/* Service 1 */}
                <section className={styles.serviceSection}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Printer size={40} /></div>
                        <h2>{t('service.silk.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('service.silk.desc') }} />
                    </div>
                    <div className={styles.serviceImage}>
                        <img src="/assets/service_silk_screen.png" alt={t('service.silk.title')} className={styles.serviceImg} />
                    </div>
                </section>

                {/* Service 2 */}
                <section className={`${styles.serviceSection} ${styles.reverse}`}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><ImageIcon size={40} /></div>
                        <h2>{t('service.inkjet.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('service.inkjet.desc') }} />
                    </div>
                    <div className={styles.serviceImage}>
                        <img src="/assets/service_inkjet.png" alt={t('service.inkjet.title')} className={styles.serviceImg} />
                    </div>
                </section>

                {/* Service 3 */}
                <section className={styles.serviceSection}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Scissors size={40} /></div>
                        <h2>{t('service.cutting.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('service.cutting.desc') }} />
                    </div>
                    <div className={styles.serviceImage}>
                        <img src="/assets/service_cutting.png" alt={t('service.cutting.title')} className={styles.serviceImg} />
                    </div>
                </section>

                {/* Service 4 */}
                <section className={`${styles.serviceSection} ${styles.reverse}`}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Megaphone size={40} /></div>
                        <h2>{t('service.signs.title')}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t('service.signs.desc') }} />
                    </div>
                    <div className={styles.serviceImage}>
                        <img src="/assets/service_signboard.png" alt={t('service.signs.title')} className={styles.serviceImg} />
                    </div>
                </section>

                {/* Flow Section */}
                <section className={styles.flowSection}>
                    <SectionTitle title={t('service.flow.title')} subtitle={t('service.flow.subtitle')} center />
                    <div className={styles.flowGrid}>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNum}>01</div>
                            <h4>{t('service.flow.step1.title')}</h4>
                            <p>{t('service.flow.step1.desc')}</p>
                        </div>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNum}>02</div>
                            <h4>{t('service.flow.step2.title')}</h4>
                            <p>{t('service.flow.step2.desc')}</p>
                        </div>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNum}>03</div>
                            <h4>{t('service.flow.step3.title')}</h4>
                            <p>{t('service.flow.step3.desc')}</p>
                        </div>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNum}>04</div>
                            <h4>{t('service.flow.step4.title')}</h4>
                            <p>{t('service.flow.step4.desc')}</p>
                        </div>
                        <div className={styles.flowStep}>
                            <div className={styles.stepNum}>05</div>
                            <h4>{t('service.flow.step5.title')}</h4>
                            <p>{t('service.flow.step5.desc')}</p>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className={styles.contactCta}>
                    <h2>{t('service.cta.title')}</h2>
                    <p>{t('service.cta.desc')}</p>
                    <Link to="/contact">
                        <Button size="lg" variant="gold">{t('service.cta.btn')}</Button>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default Service;
