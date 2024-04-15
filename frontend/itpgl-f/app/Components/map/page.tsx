import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const loadMap = async () => {
      const { default: google } = await import('google.maps');

      function initMap() {
        const map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            zoom: 4,
            center: { lat: -33, lng: 151 },
            disableDefaultUI: true,
          }
        );
      }

      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    loadMap();
  }, []);

  return (
    <main>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </main>
  );
}

export default Map;
