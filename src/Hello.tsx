import * as React from 'react';
import styles from './Hello.module.css';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) =>
  <div className={styles.hello}>
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
  </div>