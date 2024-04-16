import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

declare var google: any;

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyBhkA8BCdlnxVynOVgsiLNqR45fFrVSRCE",
        version: "weekly",
        
      });

      await loader.load();

      const position = {
        lat: 43.22398788704358,
        lng:  27.938003899099456
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 19,
        mapId: 'Id123',
      };

      new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);
    };

    initMap();
  }, []);

  return (
    <div className="relative p-0 border-none rounded-xl" ref={mapRef} style={{ width: '120%', height: '50vh' }}/>
  );
}

export default Map;
