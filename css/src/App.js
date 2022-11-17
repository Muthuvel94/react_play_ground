import React, { Component } from 'react';
import '../src/App.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <div id='link-bar'>
          <a className='menu-item' href='www.google.com'>
            Google
          </a>
          <a className='menu-item' href='www.gmail.com'>
            Gmail
          </a>
        </div>
        <h1>Mountain</h1>
        <p>
          A mountain is an elevated portion of the Earth's crust, generally with
          steep sides that show significant exposed bedrock. Although
          definitions vary, a mountain may differ from a plateau in having a
          limited summit area, and is usually higher than a hill, typically
          rising at least 300 metres above the surrounding land.
        </p>
        <p className='para_2'>
          Mountains are formed through tectonic forces, erosion, or
          volcanism,[1] which act on time scales of up to tens of millions of
          years.[2] Once mountain building ceases, mountains are slowly leveled
          through the action of weathering, through slumping and other forms of
          mass wasting, as well as through erosion by rivers and glaciers.[3]
        </p>
        <h1>planets</h1>
        <ol id='Ordered-list'>
          <li>Mercury</li>
          <li>venus</li>
          <li>Earth</li>
          <li>Mars</li>
          <li>Jupiter</li>
          <li>Saturn</li>
          <li>Uranus</li>
          <li>Neptune</li>
          <li>Pluto</li>
        </ol>
        <ul id='unordered-list'>
          <li>Mercury</li>
          <li>venus</li>
          <li>Earth</li>
          <li>Mars</li>
          <li>Jupiter</li>
          <li>Saturn</li>
          <li>Uranus</li>
          <li>Neptune</li>
          <li>Pluto</li>
        </ul>
      </div>
    );
  }
}
