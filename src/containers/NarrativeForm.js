import React, {Component} from 'react'
import { connect } from 'react-redux';
import {updateNarrativeFormData} from '../actions/narrativeForm'
import {createNarrative} from '../actions/narratives'


class NarrativeForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target
    const currentNarrativeFormData = Object.assign({}, this.props.narrativeFormData, {
      [name]: value
    })
    this.props.updateNarrativeFormData(currentNarrativeFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createNarrative(this.props.narrativeFormData)
  }
  render () {
    const {title, tagline, story} = this.props.narrativeFormData
    return (
      <div>
      Add Your Story
      <form onSubmit= {this.handleOnSubmit}>
        <div>
          <label htmlform="title">Title</label>
          <input
            type="text"
            onChange = {this.handleOnChange}
            name="title"
            value={title}
            />
          </div>
          <div>
            <label htmlform="tagline">Tagline</label>
            <input
              type="text"
              onChange = {this.handleOnChange}
              name="tagline"
              value={tagline}
              />
            </div>
            <div>
              <label htmlform="story">Story</label>
              <input
                type="text"
                  onChange = {this.handleOnChange}
                name="story"
                value={story}
                />
            </div>
            <button type="submit">Add Story</button>
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
export default connect(mapStateToProps, { updateNarrativeFormData })(NarrativeForm)
