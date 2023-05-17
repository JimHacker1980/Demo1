'use client'

import { memo, use } from 'react';
import type { FC } from 'react';

import React,{useState} from 'react'

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './MacBookAir1.module.css';
import {MacBookAir2} from '../MacBookAir2/MacBookAir2';

interface Props {
  className?: string;
}
/* @figmaId 4:46 */
export const MacBookAir1: FC<Props> = memo(function MacBookAir1(props = {}) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [VerificationSent,SetVerificationSent] = useState(0);
    const [Logging,SetLogging] = useState(0);
    const [fdumail,SetFudanmail] =useState('');

    const SendVerification =async () => {
        SetVerificationSent(1);
        SetFudanmail(input1);
      };

      const LogOn =async () => {
        SetLogging(1);
      };

      const ConnectMetamask=async ()=>{

      }

  if (Logging) 
    return (
      <MacBookAir2 fdumail={fdumail}/>
    );

  else return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.unnamed4}>旦猫计划</div>
      <button onClick={ConnectMetamask}>
      <Component1
        className={classes.component1}
        classes={{ rectangle1: classes.rectangle1 }}
        text={{
          unnamed: <div className={classes.unnamed}>Connect MetaMask</div>,
        }}
      />
      </button>
      <div className={classes.rectangle2}>
      <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div className={classes.unnamed5}>请输入你的复旦邮箱</div>
      <div className={classes.rectangle3}>
      <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div className={classes.unnamed6}>
        <div className={classes.textBlock}>我的验证码</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      
      <button onClick={SendVerification}>
      <Component1
        className={classes.component3}
        text={{
          unnamed: <div className={classes.unnamed2}>发送验证码</div>,
        }}
      />
      </button>

      <button onClick={LogOn}>
      <Component1
        className={classes.component2}
        text={{
          unnamed: <div className={classes.unnamed3}>登陆</div>,
        }}
      />
      </button>

      { VerificationSent? (
        <div className={classes.unnamed7}>验证码已发送到你的复旦邮箱，请查收！</div>
      ) : null}
    </div>
  );
});