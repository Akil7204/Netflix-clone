import React, {useEffect, useState} from 'react'
import "./RowPost.css"
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [Movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    })
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovies = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) =>{
      if(res.data.results.length !== 0){
        setUrlId(res.data.results[0])
      }
    })
  }

  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {Movies.map((obj) =>
          <img onClick={()=> handleMovies(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}  
      </div>
      { urlId && <Youtube opts={opts}  videoId={urlId.key} />}
    </div>
  )
}

export default RowPost