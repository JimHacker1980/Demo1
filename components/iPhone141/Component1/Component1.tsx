import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4:23 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.unnamed}>领取我的复旦专属头像</div>
    </div>
  );
});