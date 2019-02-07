import React from 'react';
import styles from './Hello.module.css';

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) =>
  <div className={styles.parent}>
    <h2>Hello from {props.compiler} and {props.framework}!</h2>
  </div>

export default Hello