import React, {Component} from 'react';
import Blurb from '../../../components/blurb';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info.name}</h2>
        <div className="row">
          <img className="img-responsive col-sm-5" src="/LearnerImage.png" />
          <Blurb className="col-sm-4" info={this.props.info} />
        </div>
        <div className="row">
          <div bsSize="large" title="Personal Contact Information" id="dropdown-size-large">
            <div href={`https://github.com/${this.props.github_handle}`} target="_blank" eventKey="1">Github</div>
            <div href={`https://www.linkedin.com/in/${this.props.linkedin_profile}`} target="_blank" eventKey="2">Linkedin</div>
            <div href={`https://www.twitter.com/${this.props.twitter}`} target="_blank" eventKey="3">Twitter</div>
          </div>
        </div>
      </div>
    );
  }
}
