import React from 'react';
import { Grid } from '@material-ui/core';
import './EpisodeDetails.css';

function EpisodeDetails({ id, items }) {
  function getClass({status}) {
    return (status === 'Alive') ?
      'EpisodeDetails__character--alive': 'EpisodeDetails__character--dead';
  }
  return (
    <div>
      {items[id].map((el) => (
        <Grid cointener direction='column' key={`group-${el.id}`}>
          <Grid item lg={2}>
            <span>-</span>
          </Grid>
          <Grid item lg={10} className={getClass(el)}>
            {el.name}
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default EpisodeDetails;
