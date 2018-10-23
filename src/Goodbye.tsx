import * as React from 'react';

interface GoodbyeProps { compiler: string; framework: string; }

export const Goodbye = (props: GoodbyeProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;