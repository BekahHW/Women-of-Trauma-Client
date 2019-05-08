import React, {Component} from 'react'
import { connect } from 'react-redux';
import {updateNarrativeFormData} from '../actions/narrativeForm'

class NarrativeForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target
    const currentNarrativeFormData = Object.assign({}, this.props.narrativeFormData, {
      [name]: value
    })
    this.props.updateNarrativeFormData(currentNarrativeFormData)
  }
  render () {
    const {title, tagline, story} = this.props.narrativeFormData
    return (
      <div>
      Add Your Story
      <form>
        <div>
          <label htmlForm="title">Title</label>
          <input
            type="text"
            onChange = {this.handleOnChange}
            name="title"
            value={title}
            />
          </div>
          <div>
            <label htmlForm="tagline">Tagline</label>
            <input
              type="text"
              onChange = {this.handleOnChange}
              name="tagline"
              value={tagline}
              />
            </div>
            <div>
              <label htmlForm="story">Story</label>
              <input
                type="text"
                  onChange = {this.handleOnChange}
                name="story"
                value={story}
                />
            </div>

      </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    narrativeFormData: state.narrativeFormData
  })
}
export default connect(mapStateToProps)(NarrativeForm)
