'use client'

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './MacBookAir2.module.css';
import React,{useEffect, useState} from 'react';

export const MacBookAir2=({fdumail}) =>{
    console.log(fdumail);
    const [NFTofMail,SetNFTofMail]=useState('');
    const [InvitationLink,SetInvitationLink]=useState('');
    const [LotteryTimes,SetLotteryTimes]=useState(0);
    const [src,SetSrc]=useState('');
    
    const GetNFTimages=async()=>{
        SetSrc("https://gateway.pinata.cloud/ipfs/QmQVP4pXCJruohUb4ajXzhUAB92V7mVYndijbyjeSgeLuE/1.png");
    }

    const GetInvitationLink=async()=>{
        SetInvitationLink('www.danmao.xyz/reference=woshixxx@fudan.edu.cn');
    }

    const GetLotteryTimes=async()=>{
        SetLotteryTimes(10);
    }

    const DrawNFT=async()=>{
        if (LotteryTimes==0) window.alert('您的抽奖次数已用完，不能再抽');
    }

    const ConnectMetamask=async()=>{

    }

    useEffect(() => {
        GetInvitationLink();
        GetLotteryTimes();
        GetNFTimages();
      }, []);

    return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.unnamed2}>旦猫计划</div>
      <button onClick={ConnectMetamask}>
      <Component1
        className={classes.component1}
        classes={{ rectangle1: classes.rectangle1 }}
        text={{
          unnamed: <div className={classes.unnamed}>Connect MetaMask</div>,
        }}
      />
      </button>
      <div className={classes.NFT}>我的NFT</div>
      <div className={classes.unnamed3}>
        <div className={classes.textBlock}>我的分享链接</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.unnamed4}>
        <div className={classes.textBlock3}>我的剩余头像抽奖次数</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes._10}>
        <div className={classes.textBlock5}>{LotteryTimes}</div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
      <img className={classes.image2} src={src} />
      <div className={classes.image3 }></div>
      <div className={classes.image4}></div>
      <div className={classes.image5}></div>
      <div className={classes.wwwDanmaoXyzReferenceWoshixxxF}>
        <div className={classes.textBlock7}>{InvitationLink}</div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <button onClick={DrawNFT}>
      <Component1 className={classes.component12} />
      </button>
    </div>
  );
}
