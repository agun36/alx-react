import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseListRow from '../CourseList/CourseList'


function App(isLoggedIn) {
  return (
    <div className="App">
      <div className="App__header_notifications">
      <Header/>
      
      <Notifications/>
      
      </div>
      <main className="App-body">
        <section className="App-body__Section">
        <p>
          Login to access the full dashboard
        </p>
        {isLoggedIn ? <CourseListRow /> : <Login/>}
        </section> 
      </main>
      <Footer/>
    </div>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
