const loadGoogleMapsScript = (callbackName: keyof Window) => {
  const googleMapsScriptId = "google-maps-script";

  if (
    !document.getElementById(googleMapsScriptId) &&
    typeof window.google == "undefined"
  ) {
    const script = document.createElement("script");
    script.id = googleMapsScriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_API_KEY
    }&libraries=places&callback=${callbackName}`;

    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  } else if (typeof window.google !== "undefined") {
    window[callbackName]();
  }
};

export { loadGoogleMapsScript };
