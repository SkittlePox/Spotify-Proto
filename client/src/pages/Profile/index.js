import React from 'react';
import { Link } from 'react-router-dom'

import Layout from "../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div style={{ height: '100vh', backgroundColor: '#262626' }}>
        <Link to="/">
          <button className="btn btn-primary">Log out</button>
        </Link>
        <Link to="/home">
          <button className="btn btn-primary">Back</button>
        </Link>
        <div className="d-flex justify-content-center">
          <h2 style={{ color: 'white' }}>
            This is the Profile page
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default Profile;