import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import './index.css';

const html = ReactDOMServer.renderToString(
	<html>
		<head>
			<title>Test</title>
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
