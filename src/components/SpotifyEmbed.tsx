"use client";

import { useEffect, useRef } from "react";

interface SpotifyIframeApi {
  createController: (
    element: HTMLElement,
    options: {
      uri: string;
      width?: number | string;
      height?: number | string;
      playerSize?: "compact" | "large";
      theme?: "black" | "white";
      allow?: string;
    },
    callback: (controller: SpotifyPlayerController) => void
  ) => void;
}

interface SpotifyPlayerController {
  // Add methods/properties as needed
  play(): void;
  pause(): void;
  // etc.
}

declare global {
  interface Window {
    onSpotifyIframeApiReady: (SpotifyIframeApi: SpotifyIframeApi) => void;
  }
}

const SpotifyEmbed = () => {
  const embedRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      if (embedRef.current === null) return;
      const options = {
        uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
      };
      const callback = () => {};
      IFrameAPI.createController(embedRef.current, options, callback);
    };
  }, []);
  return (
    <>
      <div id="spotify-embed" ref={embedRef}></div>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
    </>
  );
};

export default SpotifyEmbed;
