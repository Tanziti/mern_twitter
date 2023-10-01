import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './component/Routes/Routes.js';
import NavBar from './component/NavBar/NavBar.js';

import MainPage from './component/MainPage/MainPage.js';
import LoginForm from './component/SessionForms/LoginForm.js';
import SignupForm from './component/SessionForms/SignupForm.js';
import Tweets from './component/Tweets/Tweets.js';
import Profile from './component/Profile/Profile.js';
import TweetCompose from './component/Tweets/TweetCompose.js';

import { getCurrentUser } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />

        <ProtectedRoute exact path="/tweets" component={Tweets} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/tweets/new" component={TweetCompose} />
      </Switch>
    </>
  );
}

export default App;