const loadGoogleMapsScript = (uniqueKey: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const googleMapsScriptId = "google-maps-script";

    const existingScript = document.getElementById(googleMapsScriptId);

    if (existingScript) {
      if (typeof window.google === "undefined") {
        setTimeout(() => {
          if (typeof window.google === "undefined") {
            reject(new Error("Google Maps script loading issue"));
          } else {
            resolve();
          }
        }, 5000);
      } else {
        resolve();
      }
    } else {
      const script = document.createElement("script");
      script.id = googleMapsScriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&libraries=places&callback=initAutocomplete_${uniqueKey}`;
      script.async = true;
      script.defer = true;
      window[`initAutocomplete_${uniqueKey}`] = () => {
        resolve();
        delete window[`initAutocomplete_${uniqueKey}`];
      };
      script.onerror = () => {
        reject(new Error("Google Maps script failed to load"));
        delete window[`initAutocomplete_${uniqueKey}`];
      };

      document.body.appendChild(script);
    }
  });
};

export default loadGoogleMapsScript;
