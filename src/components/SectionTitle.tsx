import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false }) => {
    return (
        <div className={`${styles.wrapper} ${center ? styles.center : ''}`}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.decorator}></div>
        </div>
    );
};

export default SectionTitle;
