export function fetchJSON(url, init = {}, body) {
    const initJson = Object.assign(
        {},
        init,
        {
            headers: Object.assign(
                {},
                init.headers || {},
                {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            ),
            body: JSON.stringify(body),
        },
    );

    if (body) {
        initJson.body = JSON.stringify(body);
    }

    return fetch(url, initJson)
        .then(req => req.json())
}