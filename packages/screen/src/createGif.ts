import { logger } from "@qawolf/logger";
import { spawn } from "child_process";
import { CaptureSize } from "./types";

type CreateGifOptions = {
  gifPath: string;
  size: CaptureSize;
  videoPath: string;
};

export const createGif = (options: CreateGifOptions) => {
  logger.verbose(
    `createGif: creating for ${options.videoPath} -> ${options.gifPath}`
  );

  return new Promise(resolve => {
    const shrunkHeight = Math.min(options.size.height, 640);

    const ffmpeg = spawn("sh", [
      "-c",
      // https://superuser.com/a/556031/856890
      `ffmpeg -i ${options.videoPath} -vf "fps=10,scale=${shrunkHeight}:-1:flags=lanczos,setpts=0.5*PTS" -c:v pam -f image2pipe - | convert -delay 10 - -loop 0 -layers optimize ${options.gifPath}`
    ]);

    ffmpeg.on("close", () => {
      logger.verbose("createGif: done");
      resolve();
    });

    ffmpeg.stdout.on("data", function(data) {
      logger.debug(`ffmpeg: ${data.toString()}`);
    });

    ffmpeg.stderr.on("data", function(data) {
      logger.debug(`ffmpeg: ${data.toString()}`);
    });
  });
};