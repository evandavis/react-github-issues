import React from 'react';
import {render} from 'react-dom';
import {browserHistory, IndexRoute, Link, Route, Router } from 'react-router';
import IssuesListContainer from './issues/IssuesListContainer';
import IssueDetailContainer from './issues/IssueDetailContainer';
import './issues/Issues.scss';



render((<Router history={browserHistory}>
  <Route path="/" component={IssuesListContainer} />
  <Route path="/issues/:issueNumber" component={IssueDetailContainer} />
  
</Router>), document.getElementById('root'));
