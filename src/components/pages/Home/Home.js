import React, { useEffect, useState } from 'react';
import { fetchCharacters } from "services/api";
import { Carousel } from 'components/Carousel';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [settings, setSettings] = useState({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           initialSlide: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //filtro de solo humanos
    fetchCharacters({ species: 'Human' }).then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && (<div>Cargando...</div>)}
      {!loading && (
          <Carousel
            settings={settings}
            items={characters}
          />
        )
      }
    </>
  );
}

export default Home;
