import React,{ useState,useEffect } from 'react';


import resets from '../_resets.module.css';
import classes from './iPhone144.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4:89 */
export const IPhone144=({fdumail}) =>{

    console.log(fdumail);
    const [InvitationLink,SetInvitationLink]=useState('');

    const GetInvitationLink=async()=>{
        SetInvitationLink('www.danmao.xyz/reference=woshixxx@fudan.edu.cn');

    }

    useEffect(() => {
        GetInvitationLink();
      }, []);

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.unnamed}>没有剩余次数！</div>
      <div className={classes.NFT}>
        <div className={classes.textBlock}>你的分享链接：其他人通过你的链接领取NFT，你可以再领取抽取一个专属头像！</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.wwwDanmaoXyzReferenceWoshixxxF}>
        <div className={classes.textBlock3}>{InvitationLink}</div>
        <div className={classes.textBlock4}></div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
      </div>
    </div>
  );
}
