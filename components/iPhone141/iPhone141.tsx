'use client'

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './iPhone141.module.css';

import React,{useState} from 'react';
import { IPhone142 } from '../iPhone142/iPhone142';

interface Props {
  className?: string;
}
/* @figmaId 3:2 */
export const IPhone141: FC<Props> = memo(function iPhone141(props = {}) {
  const [enter,SetEnter]=useState(0);

  const SetEnterValue=()=>{
    SetEnter(1);
  }

  if (enter)
    return <IPhone142/>
  else
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.image2}></div>
      <div className={classes.image3}></div>
      <div className={classes.image4}></div>
      <div className={classes.image5}></div>
      <div className={classes.unnamed}>旦猫计划</div>
      <button onClick={SetEnterValue}>
      <Component1 />
      </button>
      <div className={classes.Blockee188309}>
        <div className={classes.textBlock}>福利：</div>
        <div className={classes.textBlock2}>Blockee咖啡月卡188元 30杯</div>
        <div className={classes.textBlock3}>七巧板 9 折</div>
      </div>
    </div>
  );
});