import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

var Hero = React.createClass({

	getPhotoPath: function() {
		return this.props.hero.thumbnail.path + "." + this.props.hero.thumbnail.extension;
	}, 

	makeSource: function() {
		return this.props.hero.urls.map((source, i) => {
			return (
				<div key={i} className="button">
              	<span className="comment-count">
                	<a target="_blank" href={source.url}> { source.type.charAt(0).toUpperCase() + source.type.slice(1) } </a>
              	</span>
        		</div>
    		);

		});
	},
	
	render() {
		const { hero, i, comments } = this.props;
		const likes = this.props.likes[hero.id] ? this.props.likes[hero.id] : 0; 
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/heros/${hero.id}`}>
            			<img src={this.getPhotoPath()} alt={this.getPhotoPath()} className="grid-photo" />
          			</Link>

          			<CSSTransitionGroup transitionName="like" 
          				transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            			<span key={likes} className="likes-heart">{likes}</span>
          			</CSSTransitionGroup>
				</div>

				<figcaption>
		          	<p>{hero.name}</p>
		          	<div className="control-buttons">
		            <button onClick={this.props.increment.bind(null, hero.id)} 
		            className="likes">&hearts; {likes}</button>
		            <Link className="button" to={`/heros/${hero.id}`}>
		              <span className="comment-count">
		                <span className="speech-bubble"></span>
		                &nbsp;{comments[hero.id] ? comments[hero.id].length : 0 }
		              </span>
		            </Link>
		          	</div>
        		</figcaption>
        		<br/>
				<figcaption>
		          	<div className="control-buttons">
		            	{this.makeSource()}
		          	</div>
        		</figcaption>

			</figure>
		);
	}

});

export default Hero;