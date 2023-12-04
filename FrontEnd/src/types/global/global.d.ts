/// <reference types="@types/google.maps" />
export {};

declare global {
  interface Window {
    google: typeof google;
    initializeAutocomplete?: () => void;
  }
}
