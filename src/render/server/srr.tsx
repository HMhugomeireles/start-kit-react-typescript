import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../../components/app';

export function ssrApplicationRender(): string {
  const initialState = {
    language: 'en',
    stateTest: 'ssr',
    action: () => console.log('came from state and render on server')
  };

  const appToString = renderToString(<App {...initialState} />);

  return `
    <!DOCTYPE html>
    <html class="no-js" lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ReactJS Bootstrap Starter</title>
      </head>
      <body>
        <noscript>This application need use javascript to work.</noscript>
        <section id="root">${appToString}</section>
        <script>
          window.__srrRender__ = ${appToString}
        </script>
      </body>
    </html>
  `;
}
