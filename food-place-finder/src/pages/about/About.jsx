import React from 'react'
import Layout from '../../components/layout/Layout'
import './About.css'

const About = () => {
  return (
    <Layout>
      <div className='container'>
        <span>Team Name</span>
        <div className='team-member'>
            <div className='person'>Anuj Bhist</div>
            <div className='person'>Ruchika Yadav</div>
            <div className='person'>Prakhar Dubey</div>
            <div className='person'>Anmol Pal</div>
        </div>
    </div>
    </Layout>
  )
}

export default About