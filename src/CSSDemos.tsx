import React from 'react';

import styles from './CSSDemos.module.css';

const CSSDemos = () =>  
    <main className={styles.content}>
      <article style={{overflow: 'hidden'}}>
        <h1>Main Article Area</h1>
        <p>Dolor sit amet, youtube gluten-free dagobah sullied straw man.</p>
        <figure>
          <img className={styles.shapeDemo} 
               src={require('./assets/yinyang.png')} 
               alt="Yin Yang" 
               height={300} width={300} />
        </figure>
        
        <p className={styles.opener}>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
        <p>More stuff about the thing goes here. Lorem ipsum hipster dipster hipster dipster hipster dipster hipster dipster hipster dipster</p>
      </article>
      
      <article>
        <h1>Preikestolen</h1>
        <figure>
          <img className={styles.clipPathDemo} 
               src={require('./assets/pulpit-rock.jpg')} 
               alt={'Pulpit Rock'}  />
        </figure>
      </article>
    </main>

export default CSSDemos