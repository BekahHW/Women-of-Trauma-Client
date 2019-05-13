import React, {Component} from 'react'
import { connect } from 'react-redux';
import {updateNarrativeFormData} from '../actions/narrativeForm'
import {createNarrative} from '../actions/narratives'
import {getDisorders} from '../actions/disorders'
import Button from '@material-ui/core/Button';
import Select from 'react-select';




class NarrativeForm extends Component {

  componentDidMount(){

    this.props.getDisorders()

  }

  handleOnChange = event => {
    const { name, value } = event.target
    const currentNarrativeFormData = Object.assign({}, this.props.narrativeFormData, {
      [name]: value
    })
    this.props.updateNarrativeFormData(currentNarrativeFormData)
  }

//   handleChange(selectedOption) {
//     this.setState({selectedOption});
// }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createNarrative(this.props.narrativeFormData)
    .then(this.props.resetNarrativeForm)
  }
  render () {
    const {title, tagline, story, disorder} = this.props.narrativeFormData
    return (
      <div>
      Add Your Story
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
          <div>
            <label htmlform="tagline">Tagline</label>
            <input
              type="string"
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


            <div>
            <Select value={ disorder } onChange={this.handleOnChange}

                 {...this.props.disorders.map(function (disorder) {
                   return {
                      value: disorder,
                      name: disorder,
                      disorder: disorder.name }
                })
              }
                />
                </div>
             <Button variant="contained" color="primary">
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
    disorders: state.disorders
  })
}
export default connect(mapStateToProps,
  { updateNarrativeFormData,
   createNarrative,
    getDisorders})(NarrativeForm)
