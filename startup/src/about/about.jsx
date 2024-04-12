import React, { useEffect } from 'react';

export function About() {
  useEffect(() => {
    displayPicture();
  }, []); // empty dependency array ensures the effect runs only once after the component mounts

  return (
    <main>
      <h1> What To Do: Provo </h1>
      <div id="picture" className="picture-box"></div>
      <p> This is a website where people can come together and create a collection of excellent places to visit in town. </p>
      <p> Whether you are from here or not, you are welcome to give your opinion on what's great and what's not. </p>
      <p> This program was created at BYU in CS 260. </p>
      <p> This project was created by Kele Kent. Everything is represented on GitHub. </p>
    </main>
  );
}

function displayPicture() {
  const random = Math.floor(Math.random() * 1000);
  fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#picture');

      const width = 1250;
      const height = 175;

      const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', imgUrl);
      containerEl.appendChild(imgEl);
    });
}