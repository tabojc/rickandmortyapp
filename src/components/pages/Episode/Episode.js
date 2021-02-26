import React, { useEffect, useState } from 'react';
import EpisodeList from 'components/EpisodeList/EpisodeList';
import { fetchEpisodes } from "services/api";
import { fetchCharactersByIds } from "services/api";

function Episode() {
  const [episodes, setEpisodes] = useState([]);
  const [charactersByEpisodes, setCharactersByEpisodes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEpisodes({}).then((data) => {
      console.log(data);
      setEpisodes(data);
      setLoading(false);
    });

    getEposides();
  }, []);

  async function getEposides() {
    const res = await fetchEpisodes({});
    setEpisodes(res);
    /*
    setEpisodes(res);
    const groupEpisodes = res.reduce((ac, el) => {
      const ids = el.characters.reduce((acc, el) => acc.concat(el.split('/').slice(-1)), []);
      return {
        ...ac,
        [el.id]: ids,
      };
    }, {});
*/

  }

  async function getCharactersByEposide(id) {
    const selected = episodes.filter(el => ( el.id === id ));
    const ids = selected[0].characters.reduce((acc, el) => acc.concat(el.split('/').slice(-1)), []);
    return await fetchCharactersByIds(ids);
  }

  async function handleClick(e, id) {
    e.preventDefault();
    const res = await getCharactersByEposide(id);
    setCharactersByEpisodes({
      ...charactersByEpisodes,
      [id]: res
    });
  }

  return (
    <div>
      {loading && (<div>loading...</div>)}
      {!loading && (
        <EpisodeList
          items={episodes}
          details={charactersByEpisodes}
          onClick={handleClick}
        />
      )}
    </div>)
}

export default Episode;
