import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle1?: string;
    root?: string;
  };
  text?: {
    unnamed?: ReactNode;
  };
}
/* @figmaId 4:23 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle1 || ''} ${classes.rectangle1}`}></div>
      {props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}>领取我的复旦专属头像</div>}
    </div>
  );
});