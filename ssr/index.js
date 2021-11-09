export async function ssr(context) {
    const out = {};

    out.html = renderDocument();

    return out;
}

function renderDocument() {
    return `
        <!doctype html>
        <html>
            <head>
            </head>
            <body>
                <div id="app"></div>
            </body>
            <script src="./static/bundle.js"></script>
        </html>
    `;
}