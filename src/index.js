import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import './index.css';

/*
 * TODO
 * Only if process.env.NODE_ENV === 'development'
 * Do something else in production
*/
const copyCssFromParent = `
    var styles = parent.document.getElementsByTagName("style");
    for(var i = 0; i < styles.length; i++)
    {
      document.head.appendChild(styles[i]);
    }
`;

const html = ReactDOMServer.renderToString(
	<html>
		<head>
			<title>Test</title>
			<script dangerouslySetInnerHTML={{__html: copyCssFromParent}} />
		</head>
		<body>
			<App />
		</body>
	</html>
);

class Client {
	init = (options) => {
		const iframe = document.createElement('iframe');
		iframe.srcdoc = html;
		iframe.height = '500px';
		iframe.width = '500px';

		const root = options.container;
		root.appendChild(iframe);
	}
}

window.Client = Client;
