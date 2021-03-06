import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../../../components/socialLinks';
import './index.css';

export default class UserBadge extends Component {
  render() {
    return this.props.data.map(learner => {
      return (
        <span key={learner.id} className="learner-span">
          <p className="text-center">{learner.name}</p>
          <Link to={`/learners/${learner.github_handle}`}>
            <img className="learner-image" src={learner.avatar_url} alt="Profile picture" />
          </Link>
          <SocialLinks
            github={learner.github_handle}
            linkedin={learner.linkedin_profile}
            twitter={learner.twitter} />
        </span>
      );
    });
  }
}
