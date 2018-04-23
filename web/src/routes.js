import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import List from './pages/list'
import Display from './pages/display'
import Add from './pages/add'
import Edit from './pages/edit'
import Tables from './pages/tables'
import TableAdd from './pages/tableAdd'
import TableEdit from './pages/tableEdit'
import GenericNotFound from './pages/notFound'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path={'/tables'} component={Tables} />
        <Route path={'/list'} component={Tables} />
        <Route path={'/list/:table'} component={List} />
        <Route path={'/list/:table/:page'} component={List} />
        <Route path={'/display/:table/:id'} component={Display} />
        <Route path={'/edit/table/:table'} component={TableEdit} />
        <Route path={'/edit/:table/:id'} component={Edit} />
        <Route path={'/add/table'} component={TableAdd} />
        <Route path={'/add/:table'} component={Add} />
        <Route path="*" component={GenericNotFound} />
      </Switch>
    )
  }
}

export default Routes
