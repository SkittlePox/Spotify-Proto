import React from 'react';


import { authEndpoint, clientId, redirectUri, scopes } from "../../config/spotifyConfig";
import Layout from '../components/Layout'

const Login = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center" style={{ height: '100vh', backgroundColor: '#262626' }}>
        <div className="d-flex flex-column justify-content-center">
          <a
            className="btn btn-primary"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
            </a>
        </div>
      </div>
    </Layout>
  )
}

export default Login;