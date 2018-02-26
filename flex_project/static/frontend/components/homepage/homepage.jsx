import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section class="main-container">
          <section class="main">
            <section class="main-animation-container">
              <h1 id="write-less" class="main-headers">Write Less.</h1>
              <h1 id="remember-more" class="main-headers">Remember More.</h1>
              <h1 id="write-away" class="main-headers">Write Away.</h1>
              <h2 id="journaling">A low-commitment alternative to journaling</h2>
            </section>


            <div class="session-buttons-container">
              <a href="#" class="session-buttons">Go!</a>
            </div>
          </section>
        </section>


        <script type="text/javascript">
          const animationFadeIn = ' animated fadeInUp';
          const animationFadeOut = ' animated fadeOutUp';
          const animationAppear = ' animated fadeIn';
          const animationPulse = ' animated pulse';
          const animationEnd = 'webkitAnimationEnd mozAnimationEnd oAnimationEnd animationend';

          $(window).load(function() {
            $('#write-less').addClass(animationFadeIn).one(animationEnd, function() {
              $('#write-less').removeClass(animationFadeIn);
              $('#write-less').addClass(animationFadeOut);

              $('#remember-more').addClass(animationFadeIn).one(animationEnd, function() {
                $('#remember-more').removeClass(animationFadeIn);
                $('#remember-more').addClass(animationFadeOut);

                $('#write-away').addClass(animationFadeIn).one(animationEnd, function() {
                  $('#journaling').addClass(animationAppear).one(animationEnd, function() {
                    $('#journaling').removeClass(animationAppear);
                    $('#journaling').addClass(animationPulse);
                  });
                });
              });
            });
          });
        </script>
      </div>
    );
  }
}

export default Homepage;
