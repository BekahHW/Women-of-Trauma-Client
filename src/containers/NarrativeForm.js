import React, {Component} from 'react'
import { connect } from 'react-redux';
import {updateNarrativeFormData} from '../actions/narrativeForm'
import {createNarrative} from '../actions/narratives'
import Button from '@material-ui/core/Button';

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
    console.log('A');
    this.props.createNarrative(this.props.narrativeFormData)
    .then(this.props.resetNarrativeForm)
    console.log('B');
  }
  render () {
    const {title, tagline, story, trauma} = this.props.narrativeFormData

    return (
      <div className="NarForm">
      <h2>Add Your Story</h2>
      <form onSubmit= {this.handleOnSubmit}>
        <div key={this.id}>
          <label htmlform="title">Title</label>
          <input
            type="string"
            onChange = {this.handleOnChange}
            name="title"
            value={title}
            />
          </div>
        < br/>
          <div>
            <label htmlform="tagline">Tagline</label>
            <input
              type="string"
              onChange = {this.handleOnChange}
              name="tagline"
              value={tagline}
              />
            </div>
            < br/>
            <div>
              <label htmlform="story">Story</label>
              <textarea
                type="text"
                  onChange = {this.handleOnChange}
                name="story"
                value={story}
                />
            </div>
            < br/>

            <div>
        <label>
        Choose the type of trauma you most closely associate with:
        <select
          name="trauma"
          value={trauma}
          onChange={this.handleOnChange}>
               <option value="natural disasters">Natural Disasters</option>
               <option value="traumatic loss">Traumatic Loss</option>
               <option value="medical trauma">Medical Trauma</option>
               <option value="school and community violence">School and Community Violence</option>
               <option value="war-related trauma">War-related Trauma</option>
               <option value="sexual assault">Sexual Assault</option>
               <option value="domestic violence">Domestic Violence</option>
               <option value="child maltreatment">Child Maltreatment</option>
        </select>
        </label>

            </div>
            < br/>

             <Button type="submit" variant="contained" color="primary">
                  Add Story
                </Button>

      </form>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return ({
    narrativeFormData: state.narrativeFormData,
  })
}
export default connect(mapStateToProps,
  { updateNarrativeFormData,
   createNarrative})(NarrativeForm)
