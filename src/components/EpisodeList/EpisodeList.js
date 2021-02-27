import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EpisodeDetails from 'components/EpisodeList/EpisodeDetails';

function EpisodeList({ items, details, onClick }) {
  return (
    <div>
      {items.map((item) => (
        <Grid container key={item.id}>
          <Grid item xs={12}>
            <Button
              name={item.episode}
              onClick={(e) => onClick(e, item.id)}
            >
              {item.episode}
            </Button>
          </Grid>
          <Grid item xs={12}>
          { item.id in details && (
            <EpisodeDetails
              key={`det-${item.id}`}
              id={item.id}
              items={details}
            />
          )}
          </Grid>
        </Grid>
      ))}
    </div>)
}

export default EpisodeList;
