import React from 'react';
import { LinkedIn } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My name is Zainab</h2>
            <div className='prompt'>
                <p>A software developer with a passion for learning and creating.</p>
                <LinkedIn/>
                <Email/>
                <GitHub/>
            </div>
        </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>
                ReactJs, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
                Ionic, Bootstrap, MaterialUI, Yarn, Tailwind, StyledComponents
              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>
                NodeJs, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer, MySQL,
                MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>
                Javascript, Typescript, 
              </span>
            </li>
          </ol>
        </div>
    </div>
  )
}

export default Home