/**
 * Created by xueyufei on 2018/11/14.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Book from '../src/Book'; // 小说
import BookNew from '../src/BookNew'; //
import BookEdit from '../src/BookEdit'; //
import BookNovels from '../src/BookNovels'; //
import { getPath } from '@utils'

function NewBook({ match }) {
  const path = getPath(match.path);
  return [
    <Route path={`${path}/new`} key="new" exact component={BookNew} />,
    <Route path={`${path}/edit`} key="edit" exact component={BookEdit} />,
    <Route path={`${path}/novels`} key="novels" exact component={BookNovels} />,
  ]
}

export default function(option) {
  // console.log(option);
  return (
    <Switch>
      <Route path={option.match.path} exact component={Book} />
      <Route path={`${option.match.url}/:id`} component={NewBook} />
    </Switch>
  )
}