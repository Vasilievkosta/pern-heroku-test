import React from 'react';
import styles from './NotFoundBlock.module.css';

const NotFoundBlock = () => {
    return (
        <h1 className={styles.root}>
            <span style={{fontSize:'40px'}} className={styles.smile}>🤔</span>
            Мда. Ничего не найдено :(
			<span className={styles.smile}>😊</span>
        </h1>
    )
};

export default NotFoundBlock;