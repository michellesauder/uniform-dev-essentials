import { ComponentProps } from "@uniformdev/canvas-react";
import { VideoPlayer } from "./VideoPlayer";
import { registerUniformComponent } from "@/canvas/compat";

// the code snippet needs to be updated for this section: https://docs.uniform.app/docs/learn/tutorials/csk/create-component

export type VideoPlayerProps = ComponentProps<{
  id: string;
  source: string;
  title: string;
  description: string;
}>;

export const videoPlayerMapping = registerUniformComponent({
  type: "videoPlayer",
  component: VideoPlayer,
});

export default VideoPlayer;