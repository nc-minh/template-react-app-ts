import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { HelmetProvider } from "react-helmet-async";

import GolobalStyles from "styles/GlobalStyles";

// Import root app
import { App } from "app";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<GolobalStyles>
				<App />
			</GolobalStyles>
		</HelmetProvider>
	</React.StrictMode>
);
