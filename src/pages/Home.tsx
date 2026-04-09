// Removed React import
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            {/* 1. Hero Section */}
            <section className={styles.hero}>
                <video
                    className={styles.heroVideo}
                    src="/assets/hatano-heroback.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroTextContainer}>
                        <h1 className={`${styles.heroHeadline} fade-in-up`} dangerouslySetInnerHTML={{ __html: t('home.hero.headline') }} />
                        <p className={`${styles.heroSubtext} fade-in-up delay-100`} dangerouslySetInnerHTML={{ __html: t('home.hero.subtext') }} />
                        <div className={`${styles.heroActions} fade-in-up delay-200`}>
                            <Link to="/contact">
                                <Button variant="primary" size="lg" className={styles.heroPrimaryBtn}>{t('home.hero.contactBtn')}</Button>
                            </Link>
                            <Link to="/service">
                                <Button variant="outline" size="lg" className={styles.heroOutlineBtn}>{t('home.hero.serviceBtn')}</Button>
                            </Link>
                            <Link to="/recruit">
                                <Button variant="outline" size="lg" className={styles.heroOutlineBtn}>{t('home.hero.recruitBtn')}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. 経営理念 Section */}
            <section className="section-padding">
                <div className={`container ${styles.philosophyContainer}`}>
                    <SectionTitle title={t('home.philosophy.title')} subtitle={t('home.philosophy.subtitle')} center />
                    <h3 className={`${styles.philosophyCatch} serif`}>{t('home.philosophy.catch')}</h3>
                    <p className={styles.philosophyText} dangerouslySetInnerHTML={{ __html: t('home.philosophy.text') }} />
                </div>
            </section>

            {/* 3. 事業内容 Section */}
            <section className="section-padding">
                <div className="container">
                    <SectionTitle title={t('home.services.title')} subtitle={t('home.services.subtitle')} center />
                    <div className={styles.serviceGrid}>
                        <Card
                            title={t('home.services.silk.title')}
                            description={t('home.services.silk.desc')}
                        />
                        <Card
                            title={t('home.services.inkjet.title')}
                            description={t('home.services.inkjet.desc')}
                        />
                        <Card
                            title={t('home.services.cutting.title')}
                            description={t('home.services.cutting.desc')}
                        />
                        <Card
                            title={t('home.services.signs.title')}
                            description={t('home.services.signs.desc')}
                        />
                    </div>
                    <div className={styles.centerBtn}>
                        <Link to="/service">
                            <Button>{t('home.services.btn')} <ChevronRight size={18} style={{ marginLeft: 8 }} /></Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. 私たちの強み Section */}
            <section className={`section-padding ${styles.strengthsSection}`}>
                <div className={`container ${styles.strengthsContainer}`}>
                    <div className={styles.strengthsTextWrapper}>
                        <SectionTitle title={t('home.strengths.title')} subtitle={t('home.strengths.subtitle')} />
                        <h3 className={styles.strengthsCatch} dangerouslySetInnerHTML={{ __html: t('home.strengths.catch') }} />
                        <p className={styles.strengthsDesc} dangerouslySetInnerHTML={{ __html: t('home.strengths.desc') }} />
                    </div>
                    <div className={styles.strengthsContent}>
                        <ul className={styles.strengthsList}>
                            <li>
                                <CheckCircle2 color="var(--color-accent)" size={28} />
                                <span dangerouslySetInnerHTML={{ __html: t('home.strengths.list1') }} />
                            </li>
                            <li>
                                <CheckCircle2 color="var(--color-accent)" size={28} />
                                <span dangerouslySetInnerHTML={{ __html: t('home.strengths.list2') }} />
                            </li>
                            <li>
                                <CheckCircle2 color="var(--color-accent)" size={28} />
                                <span dangerouslySetInnerHTML={{ __html: t('home.strengths.list3') }} />
                            </li>
                            <li>
                                <CheckCircle2 color="var(--color-accent)" size={28} />
                                <span dangerouslySetInnerHTML={{ __html: t('home.strengths.list4') }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. 会社概要 Section */}
            <section className="section-padding">
                <div className={`container ${styles.companyContainer}`}>
                    <SectionTitle title={t('home.company.title')} subtitle={t('home.company.subtitle')} center />
                    <div className={styles.companyOverviewFlex}>
                        <div className={styles.companyImageWrapper}>
                            <img src="/assets/building_new.jpg" alt="Exterior" className={styles.companyBuildingImg} />
                        </div>
                        <div className={styles.companyTableWrapper}>
                            <table className={styles.companyTable}>
                                <tbody>
                                    <tr><th>{t('home.company.table.name')}</th><td>{t('common.companyName')}</td></tr>
                                    <tr><th>{t('home.company.table.founded')}</th><td>{i18n.language?.startsWith('en') ? 'November 1973' : '昭和48年11月'}</td></tr>
                                    <tr><th>{t('home.company.table.address')}</th><td>{t('footer.address')}</td></tr>
                                    <tr><th>{t('home.company.table.phone')}</th><td>052-412-5003</td></tr>
                                    <tr><th>{t('home.company.table.fax')}</th><td>052-412-4337</td></tr>
                                    <tr><th>{t('home.company.table.email')}</th><td>hatano@mac.email.ne.jp</td></tr>
                                    <tr><th>{t('home.company.table.employees')}</th><td>{i18n.language?.startsWith('en') ? '4 Employees' : '4名'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.centerBtn}>
                        <Link to="/company">
                            <Button>{t('home.company.btn')} <ChevronRight size={18} style={{ marginLeft: 8 }} /></Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. スタッフ募集 & 7. お問い合わせ (Split UI) */}
            <section className={styles.bottomCtaSection}>
                <div className={styles.ctaCardWrapper}>
                    <div className={`${styles.ctaCard} ${styles.recruitBg}`}>
                        <h3>{t('home.cta.recruit.title')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('home.cta.recruit.desc') }} />
                        <Link to="/recruit">
                            <Button variant="outline" className={styles.ctaBtn}>{t('home.cta.recruit.btn')}</Button>
                        </Link>
                    </div>
                    <div className={`${styles.ctaCard} ${styles.contactBg}`}>
                        <h3>{t('home.cta.contact.title')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t('home.cta.contact.desc') }} />
                        <Link to="/contact">
                            <Button variant="primary" className={styles.ctaBtn}>{t('home.cta.contact.btn')}</Button>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
