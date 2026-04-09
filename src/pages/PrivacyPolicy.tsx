// Removed React import
import SectionTitle from '../components/SectionTitle';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    return (
        <div style={{ backgroundColor: 'var(--color-bg)' }}>
            <div style={{ backgroundColor: 'var(--color-primary)', padding: '60px 0', textAlign: 'center', color: 'white', marginBottom: '40px' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2rem', letterSpacing: '0.1em', fontWeight: 500, color: 'white' }}>{t('privacyPage.title')}</h1>
                </div>
            </div>

            <div className="container section-padding" style={{ maxWidth: '800px' }}>
                <SectionTitle title={t('privacyPage.subtitle')} center />

                <div style={{ lineHeight: 1.8, color: 'var(--color-text)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <p>{t('privacyPage.intro')}</p>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{t('privacyPage.sec1.title')}</h3>
                        <p>{t('privacyPage.sec1.text')}</p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{t('privacyPage.sec2.title')}</h3>
                        <p>{t('privacyPage.sec2.text')}</p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{t('privacyPage.sec3.title')}</h3>
                        <p>{t('privacyPage.sec3.text')}</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li>{t('privacyPage.sec3.list1')}</li>
                            <li>{t('privacyPage.sec3.list2')}</li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{t('privacyPage.sec4.title')}</h3>
                        <p>{t('privacyPage.sec4.text')}</p>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('privacyPage.contact.title')}</h4>
                        <p>
                            {t('privacyPage.contact.company')}<br />
                            {t('footer.address')}<br />
                            {t('privacyPage.contact.tel')}<br />
                            {t('privacyPage.contact.email')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
