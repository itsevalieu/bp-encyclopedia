import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';

export default () => {
	return(
		<Route path='/' component={App}></Route>
	);
};