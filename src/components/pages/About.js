import React, { Fragment } from 'react';
import User from 'User'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Fragment>
     <Link to={`/user/ugrasenanv`} className='btn btn-dark btn-sm my-1'>
              About
            </Link>
    </Fragment>
  );
};

export default About;
