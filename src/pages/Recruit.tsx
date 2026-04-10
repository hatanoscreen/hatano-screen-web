// Removed React import
import styles from './Recruit.module.css';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Sparkles, Hammer, HeartHandshake, MapPin } from 'lucide-react';

const Recruit = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.pageWrapper}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>{t('recruit.title')}</h1>
                    <p className={styles.pageSubtitle}>{t('recruit.subtitle')}</p>
                </div>
            </div>

            <div className="container section-padding">

                {/* Intro */}
                <section className={styles.introSection}>
                    <div className={styles.messageBox}>
                        <SectionTitle title={t('recruit.intro.title')} subtitle={t('recruit.intro.subtitle')} center />
                        <p className={styles.messageText} dangerouslySetInnerHTML={{ __html: t('recruit.intro.text') }} />
                    </div>
                </section>

                {/* 求める人物像 */}
                <section className={styles.requirementsSection}>
                    <SectionTitle title={t('recruit.requirements.title')} subtitle={t('recruit.requirements.subtitle')} center />
                    <div className={styles.requirementsGrid}>
                        <Card
                            icon={<Sparkles size={32} />}
                            title={t('recruit.requirements.req1.title')}
                            description={t('recruit.requirements.req1.desc')}
                        />
                        <Card
                            icon={<Hammer size={32} />}
                            title={t('recruit.requirements.req2.title')}
                            description={t('recruit.requirements.req2.desc')}
                        />
                        <Card
                            icon={<HeartHandshake size={32} />}
                            title={t('recruit.requirements.req3.title')}
                            description={t('recruit.requirements.req3.desc')}
                        />
                        <Card
                            icon={<MapPin size={32} />}
                            title={t('recruit.requirements.req4.title')}
                            description={t('recruit.requirements.req4.desc')}
                        />
                    </div>
                </section>

                {/* 募集要項 */}
                <section className={styles.jobDetailsSection}>
                    <SectionTitle title={t('recruit.details.title')} subtitle={t('recruit.details.subtitle')} center />
                    <div className={styles.tableWrapper}>
                        <table className={styles.detailsTable}>
                            <tbody>
                                <tr><th>{t('recruit.details.table.role')}</th><td>{t('recruit.details.table.roleVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.empType')}</th><td>{t('recruit.details.table.empTypeVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.work')}</th><td>{t('recruit.details.table.workVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.qualifications')}</th><td>{t('recruit.details.table.qualificationsVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.location')}</th><td>{t('recruit.details.table.locationVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.hours')}</th><td>{t('recruit.details.table.hoursVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.holidays')}</th><td>{t('recruit.details.table.holidaysVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.salary')}</th><td>{t('recruit.details.table.salaryVal')}</td></tr>
                                <tr><th>{t('recruit.details.table.benefits')}</th><td>{t('recruit.details.table.benefitsVal')}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 応募アクション */}
                <section className={styles.applySection}>
                    <div className={styles.applyCard}>
                        <SectionTitle title={t('recruit.apply.title')} center />
                        <p className={styles.applyText} dangerouslySetInnerHTML={{ __html: t('recruit.apply.text') }} />
                        <div className={styles.contactMethods}>
                            <div className={styles.contactBox}>
                                <p>{t('recruit.apply.phoneText')}</p>
                                <div className={styles.contactValue}>052-412-5003</div>
                                <p className={styles.contactSubtext}>{t('recruit.apply.phoneHours')}</p>
                            </div>
                            <div className={styles.contactBox}>
                                <p>{t('recruit.apply.emailText')}</p>
                                <div className={`${styles.contactValue} ${styles.emailValue}`}>hatano@mac.email.ne.jp</div>
                                <p className={styles.contactSubtext}>{t('recruit.apply.emailSubtext')}</p>
                            </div>
                        </div>
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className={styles.applyBtn}>{t('recruit.apply.btn')}</Button>
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Recruit;
