import React from 'react';
import resume from '../../assets/resume.pdf';


export default function Resume() {
  return (
    <div className='container px-4 py-5'>
      <h2 className="pb-2 border-bottom">Resume</h2>
      <div>
        <h4>Download Resume <a href={resume}>here</a></h4>
      </div>

      <div>
        <h4>Front-end Technology</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Tailwind</li>
          <li>PWA</li>
        </ul>
      </div>

      <div>
        <h4>Back-end Technology</h4>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </div>

      <div>
        <h4>Database Technology</h4>
        <ul>
          <li>MySQL</li>
          <li>mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

