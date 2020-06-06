import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const StyledApp = styled.div`
  width: 100vw;
  height:100vh;
  background: #111111;
  color: #fff;
	#app-nav {
		display: flex;
		flex-direction: row;
		alighn-items: center;
		padding: .5rem;

		#Title {
			font-size: 2.5rem;
			color: #8c6239;
			font-family: 'Caliigraffitti', cursive;
		}
	}
	#app-nav-links {					
			a,
			a:visited {
				display: inline-block;
				color: #fff;
				text-decoration:none;
				font-size: 1rem;
				
				min-width: 7.5rem;
			}
			
			
			.app-nav-link-two:hover ~ hr {
				margin-left: 7.5rem;
			}
			
			.app-nav-link-three:hover ~ hr {
				margin-left: 15rem;
			}
			
			.app-nav-link-four:hover ~ hr {
				margin-left: 22.5rem;
			}
			
			.app-nav-link-five:hover ~ hr {
				margin-left: 30rem;
			}
			
			.app-nav-link-six:hover ~ hr {
				margin-left: 37.5rem;
			}
			
			.app-nav-link-seven:hover ~ hr {
				margin-left: 45rem;
			}
			.app-nav-link-eight:hover ~ hr {
				margin-left: 52.5rem;
			}											
			.app-nav-link-nine:hover ~ hr {
				margin-left: 60rem;
			}
			.app-nav-link-ten:hover ~ hr {
				margin-left: 67.5rem;
			}	
			.app-nav-link-eleven:hover ~ hr {
				margin-left: 75rem;
			}	
			.app-nav-link-twelve:hover ~ hr {
				margin-left: 82.5rem;
			}
			.app-nav-link-thirteen:hover ~ hr {
				margin-left: 90rem;
			}		
			.app-nav-link-fourteen:hover ~ hr {
				margin-left: 97.5rem;
			}																											
			
			hr {
			  height: .25rem;
			  width: 7.5rem;
			  margin: 0;
			  background: tomato;
			  border: none;
			  transition: .3s ease-in-out;
			}	
			
			text-align: justify;			
		}
		
		#app-nav-icons-right {
			width: 15rem;
			height: 2.5rem;
		}
	
		border-bottom: 1px solid #000;
		height: 5rem;					
	}
	
	#app-content {
		padding: .5rem;
	}
	
	#app-status {
		position: absolute;
		bottom: 1px;
		left: 1px;
		width: calc(100vw - 2px);
		background: #000;
		color: #fff;
		font-style: italic;
		padding: 1px;
		text-indent: 2px;
		height: 2rem;
		font-size: 1.5rem;
		line-height: 2rem;	


	#app-status {
		position: absolute;
		bottom: 1px;
		left: 1px;
		width: calc(100vw - 2px);
		background: #000;
		color: #fff;
		font-style: italic;
		padding: 1px;
		text-indent: 2px;
		height: 2rem;
		font-size: 1.5rem;
		line-height: 2rem;	
	} 
`;

import AppProvider from './AppContext.js'; 
import { AppContext } from './AppContext.js';

export function App() {
	return (
		<AppProvider>
			<AppContext.Consumer>
				{({  status }) => (	
					<Router>
					<Route exact path="/" component={Dashboard} />
					<StyledApp>
						<div id="app-nav">
								<div id="Title">From Design to Reality...</div>
								<div id="app-nav-center"></div>
								<div id="app-nav-links">
									<hr />
								</div>	
								<div id="app-nav-icons-right">
										
								</div>
					
							</div>
						<div id="app-content">
						<NavLink exact to="/" className="app-nav-link-one">Home</NavLink>

						</div>

						<div id="app-status">

						</div>
					</StyledApp>
					</Router>
				)}
			</AppContext.Consumer>			
		</AppProvider>
	)
}

if (document.getElementById('react_root')) {
	ReactDOM.render(<App />, document.getElementById('react_root'));
}