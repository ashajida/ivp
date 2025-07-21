// @ts-expect-ignore
"use client";

import { useEffect, useRef } from "react";

const SpotifyEmbed = () => {
  const embedRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      if(embedRef.current === null) return;
      const options = {
        uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
      };
      const callback = (EmbedController: any) => {};
      IFrameAPI.createController(embedRef.current, options, callback);
    };
  }, []);
  return <>
  <div id="spotify-embed" ref={embedRef}></div>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
  </>;
};

export default SpotifyEmbed;