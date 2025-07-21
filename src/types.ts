declare global {
  interface Window {
    onSpotifyIframeApiReady: (arg: any) => void;
  }
}