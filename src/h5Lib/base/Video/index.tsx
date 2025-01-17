import React from 'react';
// @ts-expect-error
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import style from './index.less';

export default function(props:any) {
  const {srcOrigin, width, height, poster} = props;
  return (
    <div className={style.videoContainer}>
      <Player width={width} height={height} src={srcOrigin} poster={poster}/>
    </div>
  );
}
