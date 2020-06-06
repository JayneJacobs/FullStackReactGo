import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import ReactJson from 'react-json-view';
import { AppContext } from './AppContext.js';

const StyledDashboard = styled.div`
	font-size: 1rem;
`;
import { Dashboard } from './Dashboard.js';
export function Dashboard(props) {
	const appState = useContext(AppContext)
	
	return(
		<StyledDashboard>
			<ReactJson src={appState} collapsed={true} theme="solarized" />
		</StyledDashboard>
	)
}