import React, { useEffect, useState } from 'react'
import "./Banner.css"
import  axios  from '../../axios.js';
import {API_KEY, imageUrl} from '../../constants/Constants.js'

function Banner() {

  const [Movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const indexMovie = Math.floor(Math.random() * 100)%20
      setMovie(response.data.results[indexMovie]);
    });
  }, []);
  

  return (
    <div style={{backgroundImage:`url(${imageUrl+Movie?.backdrop_path})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{Movie?.title || Movie?.original_name}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{Movie?.overview}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner