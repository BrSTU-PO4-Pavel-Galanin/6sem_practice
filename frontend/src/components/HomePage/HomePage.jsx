import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const HomePage = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/year/');
  }, [navigate]);

  return <div />;
};

HomePage.propTypes = {};

export default HomePage;
