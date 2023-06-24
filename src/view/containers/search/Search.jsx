import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getSongs } from '../../../services/songs';

const Search = () => {
  const { songs } = useLoaderData();
  return <section id="search">Search{JSON.stringify(songs)}</section>;
};

export async function loader() {
  const songs = await getSongs();
  return { songs };
}

export default Search;
