import React from "react"
import axios from "axios"

import "../styles/upload.scss"

/**
  Return percent of value / total
  @param {int} value
  @param (int) total
*/

const calcPercent = (value, total) => `${Math.round((value / total) * 100)}%`
export default class FileUpload extends React.Component {
  state = {
    file: null,
    percent: 0,
    loading: false,
    uploaded: false,
  }

  handleChange = event => {
    this.setState({ file: event.target.files[0], percent: 0, uploaded: false })
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({ loading: true })
    const data = new FormData()
    data.append("files", this.state.file)

    const upload_res = await axios({
      method: "POST",
      url: "http://localhost:1337/upload",
      data: data,
      onUploadProgress: progress =>
        this.setState({
          percent: calcPercent(progress.loaded, progress.total),
        }),
    })
    this.setState({ loading: false, uploaded: true })
  }
  render() {
    const { percent, loading, uploaded } = this.state
    console.log("percent", percent)
    return (
      <div className="uploadContainer">
        <form onSubmit={this.handleSubmit}>
          <input 
            className="email" 
            type="text" 
            placeholder="Email"
          />
          <br/>
          <br/>
          <br/>
          <input 
            onChange={this.handleChange} 
            type="file" 
            className="fileUp" 
          />
          <label for="file">Choose a file</label>
          <br/>
          <button className="sub">Submit</button>
        </form>
        <div className="Progress">
          <div className="Progress_Seek" style={{ width: `${percent}` }}></div>
        </div>
        {loading && <p>Uploading...</p>}
        {uploaded && <p>File successfully uploaded</p>}
      </div>
    )
  }
}
