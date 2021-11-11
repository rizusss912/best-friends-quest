import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import { Home } from './routes/home/index.js';
import { Create } from './routes/create/index.js';
import { Quest } from './routes/quest/index.js';


export class Client extends Component {
    render() {
        return (
            <div className={'text'} onClick={this.handleClick}>
                <Switch>
                    <Route path='/quest' component={Quest} />
                    <Route path='/create' component={Create} />
                    <Route path='/' component={Home} />
                </Switch>
                {this.context.texts.TEST_TEXT}
            </div>
        );
    }

    handleClick = e => {
        console.log(e);
    }
}
