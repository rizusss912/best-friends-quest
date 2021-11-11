import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { renderToString } from 'react-dom/server';

export async function ssr(context, Client) {
    const out = {};

    Client.contextType = React.createContext(context);

    const appHtml = renderToString(<Client />);

    out.html = renderDocument(context, appHtml);

    return out;
}

function renderDocument(context, appHtml) {
    return `
        <!doctype html>
        <html>
            <head>
            </head>
            <body>
                <div id="app">
                    ${appHtml}
                </div>
            </body>
            <script>
                window.context = '${JSON.stringify(context)}';
            </script>
            <script src="./static/bundle.js"></script>
        </html>
    `;
}