import React, {Component} from 'react'
import { connect } from 'react-redux'

class NarrativeForm extends Component {
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
            name="title"
            value={title}
            />
          </div>
          <div>
            <label htmlForm="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={tagline}
              />
            </div>
            <div>
              <label htmlForm="story">Story</label>
              <input
                type="text"
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
