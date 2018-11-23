/**
 * Created by xueyufei on 2018/11/14.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Architecture from '../src/Architecture'; // 架构
import ArchitectureNew from '../src/ArchitectureNew'; //
import ArchitectureEdit from '../src/ArchitectureEdit'; //
import { getPath } from '@utils'

function NewArchitecture({ match }) {
  const path = getPath(match.path);
  return [
    <Route path={`${path}/new`} key="new" exact component={ArchitectureNew} />,
    <Route path={`${path}/edit`} key="edit" exact component={ArchitectureEdit} />,
  ]
}

export default function(option) {
  // console.log(option);
  return (
    <Switch>
      <Route path={option.match.path} exact component={Architecture} />
      <Route path={`${option.match.url}/:id`} component={NewArchitecture} />
    </Switch>
  )
}