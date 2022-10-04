import React from 'react';
import httpClient from 'lib/utils/axios';

const HomePage = () => {
  const handleTest = () => {
    httpClient
      .get('/')
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleTest}>Test</button>
    </>
  );
};

export default HomePage;
