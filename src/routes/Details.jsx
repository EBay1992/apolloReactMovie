import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";

const Details = () => {
  let { pathname: id } = useLocation();
  id = id.split("/")[1];

  const GET_MOVIE = gql`
    {
      movie(id: ${id}) {
        id
        title
        rating
        genres
        medium_cover_image
        description_intro
        suggestions {
          id
          title
          rating
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_MOVIE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return <div>{data.movie.title}</div>;
};

export default Details;
