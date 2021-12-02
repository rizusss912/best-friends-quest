import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { createContext } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

const mockClientContext = {
    apiUrl: ''
};

export async function ssr(context, Client, path = '/') {
    const out = {};

    Client.contextType = createContext(Object.assign({}, mockClientContext, context));

    const appHtml = renderToString(
        <StaticRouter context={context} location={path}>
            <Client />
        </StaticRouter>
    );

    out.html = renderDocument(context, appHtml);

    return out;
}

function renderDocument(context, appHtml) {
    return `
        <!doctype html>
        <html>
            <head>
                <link rel="stylesheet" href="./static/bundle.css">
            </head>
            <body>
                <div id="app">${appHtml}</div>
            </body>

            <script>window.context = '${JSON.stringify(context)}';</script>
            <script src="./static/bundle.js"></script>
        </html>
    `;
}