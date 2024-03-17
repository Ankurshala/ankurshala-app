import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LoginPage from './views/login-page'
import StudentSignupForm from './views/student-signup-form'
import TeacherSignupForm from './views/teacher-signup-form'
import TeacherVerificationForm from './views/teacher-verification-form'
import StudentQuizForm from './views/student-quiz-form'
import StudentDashboard from './views/Student-Dashboard'
import AccountSetting from './views/account-setting'
import TeacherDashboardf from  './views/teacher-dashboardf'
import StudentProfilePage from './views/student-profile-page'
import HomePage from './views/home-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} exact path="/" />
        <Route component={HomePage} exact path="/HomePage" />
        <Route component={StudentSignupForm} exact path="/StudentSignup" />
        <Route component={TeacherSignupForm} exact path="/TeacherSignup" />
        <Route component={TeacherVerificationForm} exact path="/TeacherVerification" />
        <Route component={StudentQuizForm} exact path="/StudentQuizForm" />
        <Route component={StudentDashboard} exact path="/StudentDashboard" />
        <Route component={StudentDashboard} exact path="/StudentDashboard" />
        <Route component={AccountSetting} exact path="/AccountSetting" />
        <Route component={StudentProfilePage} exact path="/StudentProfilePage" />
        <Route component={TeacherDashboardf} exact path="/TeacherDashboardf" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
