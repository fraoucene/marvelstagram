import React from 'react';
import Hero from './Hero';
import Comments from './Comments';
import { Link } from 'react-router';
import classNames from "classNames";

const Detail = React.createClass({

	renderItem(story, i) {
		return (
      		<div className="comment" key={i}>
        		<p>{story.name}</p>
      		</div>
		);
	},

	renderComment(comment, i) {
	    return (
	      <div className="comment" key={i}>
		        <p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.heroId, i)}>&times;</button>
		        </p>
	      </div>
	    )
  	},

	renderDetail(hero ,type) {
		const available = hero[type].available > 0;

		return available ? (
			<div>
				<p><strong>{type.toUpperCase()}</strong></p>
				{hero[type].items.map(this.renderItem)}
			</div>
		) : null;
	},

	renderNext(i) {
		
		const heros = this.props.heros.results;
		let prevClass = classNames({
			disabled : i === 0,
			button: true,
			prevNext: true
		});

		let nextClass = classNames({
			disabled : i === heros.length - 1,
			button: true
		});

    	const nextHero = i < heros.length - 1 ? heros[i+1] : heros[i];
    	const prevHero = i > 0 ? heros[i-1] : heros[i];
		return (
			<div className="navigation">
				<Link className="button" to="/">
	              <span className="comment-count">
	               		&laquo; Back
	              </span>
	            </Link>

	            <Link className={prevClass} to={`/heros/${prevHero.id}`}>
	              <span className="comment-count">
               			&laquo; Prev 
	              </span>
	            </Link>
	            <Link className={nextClass} to={`/heros/${nextHero.id}`}>
	              <span className="comment-count">
	               		Next &raquo;
	              </span>
	            </Link>
            </div>
        );
	},

	render() {

	 	const { heroId } = this.props.params;
	 	const i = this.props.heros.results.findIndex((hero) => hero.id === parseInt(heroId));
    	const hero = this.props.heros.results[i];
    	const postComments = this.props.comments[heroId] || [];

		return (
			<div>
				{this.renderNext(i)}
				<div className="single-photo">
					<Hero i={i} hero={hero} {...this.props} />
					<div className="comments">
						{this.renderDetail(hero, "comics")}
						{this.renderDetail(hero, "events")}
						{this.renderDetail(hero, "series")}
						{this.renderDetail(hero, "stories")}
					</div>
	      		</div>
	      		<div className="single-photo">
	      			<Comments postComments={postComments} {...this.props} />
	      		</div>
      		</div>

		);
	}

});

export default Detail;
