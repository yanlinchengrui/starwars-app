import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';

const filmList = (props) => {
  return (
    <>
      <h3> Films: </h3>
      <Grid columns={3}>
        {props.films.map(
          (film, i) =>
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    {/* film.url.slice(21) returns /films/:id */}
                    <Link key={i} to={{ pathname: `/${film.url.slice(21)}`, state: { film: film } }}>
                      {film.title}
                    </Link>
                  </Card.Header>
                  <Card.Description>
                    <p> <strong> Director: </strong> {film.director}. </p>
                    <p> <strong> Producers: </strong> {film.producer}. </p>
                    <p> <strong> Release Date: </strong> {film.release_date}. </p>
                    <strong> "{film.opening_crawl}" </strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
        )}
      </Grid>
    </>
  );
}

export default filmList;