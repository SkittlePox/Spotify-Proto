import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import Layout from '../components/Layout';
import hash from "../../hash";

import Player from '../../Player';

const Home = () => {
  const [token, setToken] = useState(null);
  const [item, setItem] = useState({
    album: {
      images: [{ url: "" }]
    },
    name: "",
    artists: [{ name: "" }],
    duration_ms: 0,
  })
  const [isPlaying, setIsPlaying] = useState("Paused");
  const [progressMS, setProgressMS] = useState(0);


  useEffect(() => {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      setToken(_token)
      getCurrentlyPlaying(_token)
    }
  }, []);

  const getCurrentlyPlaying = (token) => {
    // Make a call using the token
    fetch('https://api.spotify.com/v1/me/player', {
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(response => response.json())
      .then(data => {
        setItem(data.item);
        setIsPlaying(data.is_playing);
        setProgressMS(data.progress_ms);
      })
  }

  const getProfile = (token) => {
    fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + token }
    }).then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <Layout>
      <div style={{ height: '100vh', backgroundColor: '#262626' }}>
        <Link to="/">
          <button className="btn btn-primary">Log out</button>
        </Link>
        <Link to="/profile">
          <button className="btn btn-primary">View your profile</button>
        </Link>
        <div className="d-flex justify-content-center">
          <h2 style={{ color: 'white' }}>
            {token && (
              // <Player
              //   item={item}
              //   is_playing={isPlaying}
              //   progress_ms={progressMS}
              // />
              <button onClick={() => { getProfile() }}>Get Profile Info</button>
            )}
            {!token &&
              <>
                <h2>You need to log in</h2>
                <Link to="/">Back</Link>
              </>
            }
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default Home;