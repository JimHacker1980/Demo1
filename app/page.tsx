'use client'
import Image from 'next/image'
import { MacBookAir1 } from '../components/MacBookAir1/MacBookAir1';
import { IPhone141 } from '../components/iPhone141/iPhone141'
import classes from './App.module.css';
import resets from '../components/_resets.module.css';
import {useEffect,useState} from 'react';


export default function Home() {
    const [mobile,SetMobile]=useState(0);

    

        useEffect(() => {
          if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) 
              //当用户用手机端打开时，控制打开移动端网站
            SetMobile(1);
        }, []);
  

  if (mobile)
    return(
      <div className={`${resets.storybrainResets} ${classes.root}`}>
        <IPhone141/>
      </div>
    );
  else
    return (
      <div className={`${resets.storybrainResets} ${classes.root}`}>
        <MacBookAir1 />
      </div>
    )
    
}
