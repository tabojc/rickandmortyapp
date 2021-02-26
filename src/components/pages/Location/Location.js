import React, { useEffect, useState } from 'react';
import { fetchLocations } from "services/api";
import LocationList from 'components/LocationList/LocationList';

function Location() {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLocations({}).then((data) => {
      setLocation(data);
      const indexed = data.reduce((ac, el) => ({
        ...ac,
        [el.type]: el
      }), {});
      setLocation(Object.values(indexed));
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && (<div>Cargando...</div>)}
      {!loading && (
          <LocationList items={location} />
        )
      }
    </div>
  );
}

export default Location;
