/// <reference types="@types/google.maps" />
export {};
type GoogleMapsCallback = () => void;
declare global {
  interface Window {
    google: typeof google;
    initializeAutocomplete?: () => void;
    googleMapsCallbacks: Record<string, GoogleMapsCallback>;
    [key: string]: GoogleMapsCallback | undefined;
  }
}
