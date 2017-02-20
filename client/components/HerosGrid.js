import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router';
import classnames from "classnames";
import { LIMIT_VALUE } from '../api/constants';

const HerosGrid = React.createClass({

	renderNav() {

    	const nextOffset = this.props.heros.offset + LIMIT_VALUE;
    	const lastOffset = this.props.heros.total - LIMIT_VALUE;
    	const firstOffset = 0;
    	const prevOffset = this.props.heros.offset - LIMIT_VALUE > -1 ? this.props.heros.offset - LIMIT_VALUE : 0;

		let fistClass = classnames({
			disabled : this.props.heros.offset === 0,
			button: true,
		});

		let prevClass = classnames({
			disabled : this.props.heros.offset === 0,
			button: true,
		});

		let nextClass = classnames({
			disabled : this.props.heros.offset + this.props.heros.count === this.props.heros.total,
			button: true,
			nextLast: true
		});

		let lastClass = classnames({
			disabled : this.props.heros.offset + this.props.heros.count === this.props.heros.total,
			button: true,
		});

		return (
			<div className="nav">
				<button className={fistClass} onClick={this.props.fetchHeros.bind(this, firstOffset)}>
	              	<span className="comment-count">
	               		&laquo; First
	              	</span>
	            </button>

	            <button className={prevClass} onClick={this.props.fetchHeros.bind(this, prevOffset)}>
	              	<span className="comment-count">
	               		&laquo; Prev
	              	</span>
	            </button>

	            <button className="button count">
	              	<span className="comment-count">
	               		{1 + this.props.heros.offset/LIMIT_VALUE}/{this.props.heros.total/LIMIT_VALUE}
	              	</span>
	            </button>

	            <button className={nextClass} onClick={this.props.fetchHeros.bind(this, nextOffset)}>
	              	<span className="comment-count ">
               			Next &raquo;
	              	</span>
	            </button>
	            <button className={lastClass} onClick={this.props.fetchHeros.bind(this, lastOffset)}>
	              	<span className="comment-count">
	               		Last &raquo;
	              	</span>
	            </button>
            </div>
        );
	},

	render() {
		if(this.props.loading) {
			return <div> loading...</div>;
		}
		return (
			<div>
				<div className="photo-grid">
				 	{this.props.heros.results.map((hero, i) => <Hero {...this.props} key={i} i={i} hero={hero} />)}
	      		</div>
				<div>
					{this.renderNav()}
				</div>
      		</div>
		);
	}
});

export default HerosGrid;
