import React, { useEffect, useState } from 'react';
import { fetchStarings } from "services/api";
import { Character } from 'components/Character';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

function Staring() {
  const [starings, setStarings] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStarings(page);
  }, []);

  function handleChange(event, value) {
    getStarings(value);
  };

  function getStarings(page) {
    setLoading(true);
    fetchStarings({ page }).then((data) => {
      setStarings(data.results);
      setPage(page);
      setCount(data.info.pages);
      setLoading(false);
      console.log(page, data.info.pages);
    });
  };

  function getClass({ gender }) {
    return gender === 'Female' ? 'Character__image-female': 'Character__image-regular';
  }

  return (
    <div>
      <Grid container>
        {starings.map((star) => (
          <Grid key={star.id} item xs={12} sm={3} md={3} lg={3}>
            <Character
              image={star.image}
              name={star.name}
              cssClass={getClass(star)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination count={count || 10} page={page} onChange={handleChange} />
    </div>
  );
}

export default Staring;
