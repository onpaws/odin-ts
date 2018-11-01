import React from 'react';
import styles from './Card.module.css';

const Card = ({title, children}) => 
  <div className={styles.parent}>
    <header>{title}</header>
    {children}
  </div>

export default Card