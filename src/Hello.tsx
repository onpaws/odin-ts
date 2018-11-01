import * as React from 'react';
import styles from './Hello.module.css';

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) =>
  <div className={styles.parent}>
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
  </div>

export default Hello