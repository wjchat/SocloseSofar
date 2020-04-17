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
    email: "",
    message: ""
  }
  handleClick = () => {  
    if (this.state.uploaded) {
      this.setState( { uploaded: false })
    }
  }
  handleXClick = () => {
    this.setState({file: null})
  }

  handleFileChange = event => {
    this.setState({ file: event.target.files[0], percent: 0, uploaded: false })
    this.fileInput.value = ""
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    if (!this.state.file && !this.state.email) {
      this.setState({ message: "Please Enter Your Email And Select Video File"})
    }

    if (this.state.file && !this.state.email) {
      this.setState({ message: "Please Enter Your Email"})
    }

    if (!this.state.file && this.state.email) {
      this.setState({ message: "Please Select Video File"})
    }

    if (this.state.file && this.state.email) {
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
      
      console.log(upload_res.data[0].url)
      const dataBaseEntry = await axios({
          method: "POST",
          url: "http://localhost:1337/people-contents",
          data: {
              email: this.state.email,
              content: upload_res.data[0],
          }
      })

      this.setState({ loading: false, uploaded: true, file: null, email: "", message: "" })
      this.props.setCount(this.props.count + 1)
    }

  }
  render() {
    const { percent, loading, uploaded } = this.state
    return (
      <div className="uploadContainer">

        <div className="x-container">
          {this.state.file && <h1 className="x-active" onClick={this.handleXClick}>X</h1>}
        </div>

        <form onSubmit={this.handleSubmit} className="uploadForm">
          <input 
           onClick={this.handleClick}
            onChange={this.handleEmailChange}
            className="email" 
            type="text" 
            placeholder="Enter Email"
            value={this.state.email}
          />
          <br/>
          <input 
           onClick={this.handleClick}
            onChange={this.handleFileChange} 
            ref={fileInput => (this.fileInput = fileInput)}
            type="file" 
            id="file"
            accept = "video/*"
          />
          <label for="file" className={this.state.file ? "uploaded" : "fileUpload"}>
            {this.state.file ? this.state.file.name : "Choose File"}
          </label>
          <br/>
          <button className="formSubmit">Submit</button>
        </form>

        {/* <div className="Progress">
          <div className="Progress_Seek" style={{ width: `${percent}` }}></div>
        </div> */}

        <div className="uploadCaption"> 
          {this.state.message && <p>{this.state.message}</p>}
          {/* {loading && <p>Working...</p>} */}
          {uploaded && !this.state.message && <p>Thank You</p>}
        </div>
      </div>
    )
  }
}
