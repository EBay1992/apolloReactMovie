import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const renderedList = data.movies.map((movie) => {
    return (
      <div key={movie.id} onClick={() => {}}>
        {movie.title}
        <div>
          <Link to={`/${movie.id}`}>Go to Detail</Link>
        </div>
        <hr />
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default Home;
