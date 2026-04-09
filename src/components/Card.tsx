import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, image }) => {
    return (
        <div className={styles.card}>
            {image && (
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} className={styles.image} />
                </div>
            )}
            <div className={styles.content}>
                {icon && <div className={styles.iconWrapper}>{icon}</div>}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default Card;
