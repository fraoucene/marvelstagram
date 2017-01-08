import React from 'react';
import { Link } from 'react-router';
import fetchHeros from "../api"

const Main = React.createClass({

	componentDidMount: function() {
		this.props.fetchHeros(0);
	},

	render() {

		return (
			<div>
		        <h1>
		          <Link to="/">Marvelstagram</Link>
		        </h1>
		         	{this.props.loading ? <h1> <span>Loading...</span></h1>  : React.cloneElement(this.props.children, this.props)}
      		</div>
		);
	}

});

export default Main;