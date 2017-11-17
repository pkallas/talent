import React, { Component, componentWillMount } from 'react'
import { connect } from 'react-redux'
import CollectionPage from '../../containers/collection'
import _ from 'lodash'
import { fetchLearners, FETCH_ALUMNI_LEARNERS } from '../../actions/'
import { createStore, bindActionCreators } from 'redux'
import reducers from '../../reducers'

class LearnerGallery extends Component {
  getProjects(learners) {
    const allProjects = learners.map(learner => learner.projects)
    return _.flatMapDeep(allProjects)
  }

  componentWillMount() {
    this.props.fetchLearners('alumni')
    console.log("this.props.learners:::", this.props.learners)
  }

  render() {
    // const currentUrl = this.props.match.url;
    // console.log("currentUrl:::", currentUrl)

    // console.log("fetchLearners:::", fetchLearners().payload)
    // console.log("createStore:::", createStore(reducers).getState())
    return (
      <div>
        <CollectionPage
          data={this.props.learners}
          info={ {name: "About Learners Guild", story: "This is just a sentence."} }
          projects={this.getProjects(this.props.learners)}
        />
      </div>
    )
  }
}

function mapStateToProps({ learner }) {
  return { learners: learner.payload || learner[0] }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchLearners}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnerGallery)