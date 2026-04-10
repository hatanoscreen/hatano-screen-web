// Removed React import
import styles from './Company.module.css';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import ceoImg from '../assets/ceo.jpg';
import buildingNewImg from '../assets/building_new.jpg';

const Company = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.pageWrapper}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>{t('companyPage.title')}</h1>
                    <p className={styles.pageSubtitle}>{t('companyPage.subtitle')}</p>
                </div>
            </div>

            <div className="container section-padding">

                {/* Intro */}
                <section className={styles.introSection}>
                    <div className={styles.introContent}>
                        <SectionTitle title={t('companyPage.intro.title')} subtitle={t('companyPage.intro.subtitle')} />
                        <p className={styles.introText} dangerouslySetInnerHTML={{ __html: t('companyPage.intro.text') }} />
                        <p className={styles.ceoName}>{t('companyPage.intro.ceo')}</p>
                    </div>
                    <div className={styles.introImageWrapper}>
                        <img src={ceoImg} alt={t('companyPage.intro.title')} className={styles.introImg} />
                    </div>
                </section>

                {/* Philosophy details */}
                <section className={styles.philosophySection}>
                    <div className={styles.philosophyCard}>
                        <SectionTitle title={t('companyPage.philosophy.title')} subtitle={t('companyPage.philosophy.subtitle')} center />
                        <h3 className={styles.philosophyCatch}>{t('companyPage.philosophy.catch')}</h3>
                        <p className={styles.philosophyText} dangerouslySetInnerHTML={{ __html: t('companyPage.philosophy.text') }} />
                    </div>
                </section>

                {/* Company Info Table */}
                <section className={styles.infoSection}>
                    <SectionTitle title={t('companyPage.overview.title')} subtitle={t('companyPage.overview.subtitle')} center />
                    <div className={styles.infoFlex}>
                        <div className={styles.infoImageWrapper}>
                            <img src={buildingNewImg} alt="Exterior" className={styles.infoBuildingImg} />
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.infoTable}>
                                <tbody>
                                    <tr><th>{t('companyPage.overview.table.name')}</th><td>{t('companyPage.overview.table.nameVal')}</td></tr>
                                    <tr><th>{t('companyPage.overview.table.ceo')}</th><td>{t('companyPage.overview.table.ceoVal')}</td></tr>
                                    <tr><th>{t('companyPage.overview.table.founded')}</th><td>{t('companyPage.overview.table.foundedVal')}</td></tr>
                                    <tr><th>{t('companyPage.overview.table.address')}</th><td>{t('footer.address')}</td></tr>
                                    <tr><th>{t('companyPage.overview.table.phone')}</th><td>052-412-5003</td></tr>
                                    <tr><th>{t('companyPage.overview.table.fax')}</th><td>052-412-4337</td></tr>
                                    <tr><th>{t('companyPage.overview.table.email')}</th><td>hatano@mac.email.ne.jp</td></tr>
                                    <tr><th>{t('companyPage.overview.table.employees')}</th><td>{t('companyPage.overview.table.employeesVal')}</td></tr>
                                    <tr><th>{t('companyPage.overview.table.business')}</th><td>{t('companyPage.overview.table.businessVal')}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Access Map */}
                <section className={styles.mapSection}>
                    <SectionTitle title={t('companyPage.access.title')} subtitle={t('companyPage.access.subtitle')} center />
                    <div className={styles.mapWrapper}>
                        {/* Google Maps placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.272517865248!2d136.8524458!3d35.1504953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003770deef3b40d%3A0x6b779a528ccfc09f!2z44CSNDUzLTA4NDIg5oSb55-l55yM5ZCN5Y-k5bGL5biC5Lit5p2R5Yy65Ymj55S677yT77yQ77yX!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Company;
