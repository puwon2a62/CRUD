import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from '~Pages/MainPage'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={MainPage} />
    </Switch>
  </BrowserRouter>
)

export default Router