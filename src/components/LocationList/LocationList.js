import React from 'react';
import { Grid } from '@material-ui/core';

function LocationList({ items }) {
  return(
    <div>
        {items.map((item) => (
          <Grid container key={item.id}>
          <Grid item xs={12}>
            {item.type}
          </Grid>
          <Grid item xs={1}>
            -
          </Grid>
          <Grid item xs={11}>
            {item.name}
          </Grid>
          </Grid>
        ))}
    </div>
  );
}

export default LocationList;
