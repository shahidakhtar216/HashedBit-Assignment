import React from 'react';
import { Link, useParams } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', description: 'Description for Movie 1' },
  { id: 2, title: 'Movie 2', description: 'Description for Movie 2' },
  { id: 3, title: 'Movie 3', description: 'Description for Movie 3' },
  // Add more movie objects here
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to="/book-seat">
        <button>Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;
