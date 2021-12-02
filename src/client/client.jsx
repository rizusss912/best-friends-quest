import React, { Component, createContext } from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';

import { Home } from './routes/home';
import { Create } from './routes/create';
import { Quest } from './routes/quest';

import './client.css';

export class Client extends Component {
    render() {
        return (
            <div className={'app'} onClick={this.handleClick}>
                <Switch>
                    <Route path='/quest' component={this.provideContext(Quest)} />
                    <Route path='/create' component={this.provideContext(Create)} />
                    <Route path='/' component={this.provideContext(Home)} />
                </Switch>
                {this.context.texts.TEST_TEXT}
            </div>
        );
    }

    provideContext = component => {
        component.contextType = Client.contextType;
        return component;
    }
}
