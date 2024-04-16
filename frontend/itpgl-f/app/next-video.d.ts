declare module 'next-video' {
    import { ComponentType } from 'react';
    interface VideoProps {
      src: string;
    }
    const Video: ComponentType<VideoProps>;
    export default Video;
  }
  