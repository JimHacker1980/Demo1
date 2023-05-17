'use client'

import { memo } from 'react';
import type { FC } from 'react';
import React,{useState,useEffect} from 'react';

import resets from '../_resets.module.css';
import classes from './iPhone143.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3:6 */
export const IPhone143=({fdumail}:any)=> {
    console.log(fdumail);
    const [NFTofMail,SetNFTofMail]=useState('');
    const [InvitationLink,SetInvitationLink]=useState('');
    const [LotteryTimes,SetLotteryTimes]=useState(0);
    const [src,SetSrc]=useState('');
    const [Signature,SetSignature]=useState('');
    
    const GetNFTimages=async()=>{
        SetSrc("https://gateway.pinata.cloud/ipfs/QmQVP4pXCJruohUb4ajXzhUAB92V7mVYndijbyjeSgeLuE/1.png");
    }

    const GetInvitationLink=async()=>{
        SetInvitationLink('www.danmao.xyz/reference=woshixxx@fudan.edu.cn');

    }

    const GetSignature=async()=>{
        SetSignature('12345678');//&lt;BASE64编码的NFT密钥&gt;
    }


    useEffect(() => {
        GetInvitationLink();
        GetSignature();
        GetNFTimages();
      }, []);

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={classes.unnamed}>
            <div className={classes.textBlock}>你的专属头像</div>
            <div className={classes.textBlock2}>
            <p></p>
            </div>
        </div>
        <img className={classes.image6} src={src}></img>
        <div className={classes.NFT}>你的NFT密钥：请不要分享给任何人！</div>
        <div className={classes.NFT2}>
            <div className={classes.textBlock3}>
            你的分享链接：其他人通过你的链接领取NFT，你可以再领取抽取一个专属头像！
            </div>
            <div className={classes.textBlock4}>
            <p></p>
            </div>
        </div>
        <div className={classes.BASE64NFT}>{Signature}</div>
        <div className={classes.wwwDanmaoXyzReferenceWoshixxxF}>
            <div className={classes.textBlock5}>{InvitationLink}</div>
            <div className={classes.textBlock6}></div>
            <div className={classes.textBlock7}>
            <p></p>
            </div>
        </div>
        <div className={classes.wwwDanmaoXyzReferenceWoshixxxF2}>
            <div className={classes.textBlock8}>{InvitationLink}</div>
            <div className={classes.textBlock9}></div>
            <div className={classes.textBlock10}>
            <p></p>
            </div>
        </div>
        </div>
    );
}
