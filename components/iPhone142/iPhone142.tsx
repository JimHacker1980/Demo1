'use client'

import { memo } from 'react';
import type { FC } from 'react';
import React,{useState} from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './iPhone142.module.css';
import { IPhone143 } from '../iPhone143/iPhone143';
import { IPhone144 } from '../iPhone144/iPhone144';

interface Props {
  className?: string;
}
/* @figmaId 3:5 */
export const IPhone142: FC<Props> = memo(function IPhone142(props = {}) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [VerificationSent,SetVerificationSent] = useState(0);
    const [Logging,SetLogging] = useState(0);
    const [fdumail,SetFudanmail] =useState('');
    const [lotterytimes,SetLotteryTimes]=useState(0);

      const SendVerification =async () => {
        SetVerificationSent(1);
        SetFudanmail(input1);
      };

      const LogOn =async () => {
        SetLogging(1); 
        GetLotteryTimes();
      };

      const GetLotteryTimes=async()=>{
        SetLotteryTimes(1);
      }


      if (Logging)
        if (lotterytimes>0)
            return <IPhone143 fdumail={fdumail}/>; 
        else
            return <IPhone144 fdumail={fdumail}/>
      else
        return (
            <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.unnamed3}>验证复旦身份</div>
            <div className={classes.rectangle2}>
            <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                />
            </div>
            <div className={classes.unnamed4}>请输入你的复旦邮箱</div>
            <div className={classes.rectangle3}>
            <input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                />
            </div>
            <div className={classes.unnamed5}>
                <div className={classes.textBlock}>我的验证码</div>
                <div className={classes.textBlock2}>
                <p></p>
                </div>
            </div>
            <button onClick={SendVerification}>
            <Component1
                className={classes.component1}
                text={{
                unnamed: <div className={classes.unnamed}>发送验证码</div>,
                }}
            />
            </button>
            <button onClick={LogOn}>
            <Component1
                className={classes.component2}
                text={{
                unnamed: <div className={classes.unnamed2}>确认</div>,
                }}
            />
            </button>
            {VerificationSent?(
                <div className={classes.unnamed6}>验证码已发送到你的复旦邮箱，请查收！</div>
            ):null} 
            </div>
        );
});