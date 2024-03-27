import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data =  useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img className="p-4 rounded-full m-auto" src={data.avatar_url} alt="Git pic" width={200}/>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/V-25K")
  return  response.json();
}