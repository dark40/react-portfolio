import React from 'react';

const styles = {
  avatarSize: {
    width: '150px',
  },
}

export default function About() {
  return (
    <div className='container px-4 py-5'>
      <h2 className="pb-2 border-bottom">About me</h2>
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQEDpOfOUNGDBg/profile-displayphoto-shrink_400_400/0/1516845142464?e=1671062400&v=beta&t=d0knitnd3T7dDPrftuckYE3_Mm1dV6a6bWMe3IWEUu8"
        style={styles.avatarSize}
        className="rounded-circle"
        alt="Avatar" />
        
      <p>
        Hi, I am Freddie. I'm a software engineer living in Melbourne.
        Besides my passion on coding, I also hold a master degree of Accounting & Finance with CPA certificate.
        I have been working in the NFP field over 4 years. I have worked as an accountant, a graphic designer, but always believed in coding is the my true passion.
        Check out more of my projects and feel free to contact me.
      </p>
    </div>
  );
}