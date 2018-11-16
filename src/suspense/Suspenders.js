import React from 'react';
import { unstable_createResource } from 'react-cache';

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

const RandomUserResource = unstable_createResource(async () => {
  await sleep(2000);
  const response = await fetch('https://randomuser.me/api/');
  return await response.json();
})

const RandomUser = () => {
  const response = RandomUserResource.read('randomUser');
  const [first] = response.results;
  return <h4>Random Email: {first.email}</h4>
}

const Suspenders = () =>  {
  return (
    <div>
       <RandomUser />
    </div>
  )
}

export default Suspenders
