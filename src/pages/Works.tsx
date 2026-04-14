import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Works.module.css';
import Button from '../components/Button';
import worksHeroImage from '../assets/works_hero.png';

const Works = () => {
    const { t } = useTranslation();

    // items is an array of objects defined in translation.json
    const worksItems = t('worksPage.items', { returnObjects: true }) as Array<{
        title: string;
        category: string;
        desc: string;
    }>;

    return (
        <div className={styles.pageWrapper}>
            {/* Page Header */}
            <div className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>{t('worksPage.title')}</h1>
                    <p className={styles.pageSubtitle}>{t('worksPage.subtitle')}</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className={styles.introSection}>
                    <p dangerouslySetInnerHTML={{ __html: t('worksPage.intro') }} />
                </div>

                <div className={styles.heroSection}>
                    <div className={styles.heroImageWrapper}>
                        <img src={worksHeroImage} alt="Works Showcase" className={styles.heroImage} />
                        <span className={styles.imageCaption}>※イメージ画像です</span>
                    </div>
                    <div className={styles.extraDescSection}>
                        <p>{t('worksPage.extraDesc')}</p>
                    </div>
                </div>

                <div className={styles.worksGrid}>
                    {Array.isArray(worksItems) && worksItems.map((item, index) => (
                        <div key={index} className={styles.workItem}>
                            <div className={styles.imagePlaceholder}>
                                <div className={styles.placeholderText}>Works Image {index + 1}<br />(Dummy)</div>
                            </div>
                            <div className={styles.workContent}>
                                <span className={styles.categoryBadge}>{item.category}</span>
                                <h3 className={styles.workTitle}>{item.title}</h3>
                                <p className={styles.workDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <section className={styles.contactCta}>
                    <h2>{t('worksPage.cta.title')}</h2>
                    <p>{t('worksPage.cta.desc')}</p>
                    <Link to="/contact">
                        <Button variant="primary">{t('worksPage.cta.btn')}</Button>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default Works;
