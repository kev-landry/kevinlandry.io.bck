import React from "react"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  button, input, textarea {
    width: 100%;
    margin: 1rem 0 0 0;
    box-sizing: border-box;
    padding: 1rem;
    font: inherit;
    border: none;
  }
  textarea {
    resize: none;
    height: 20rem;
  }
  label {
    margin-top: 1rem;
  }
  button {
    background: ${props => props.theme.color_base};
    color: ${props => props.theme.color_lightgrey};
  }
`

const Success = styled.div`
  display: none;
  padding: 1rem;
  border: 2px solid ${props => props.theme.color_base};
`

const Failure = styled.div`
  display: none;
  padding: 1rem;
  border: 2px solid ${props => props.theme.color_accent};
`

class CommentForm extends React.Component {

  state = {
    button: "Envoyer",
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    // set button text to loading
    this.setState({button: "Envoi en cours..."})

    // extract form data
    const formdata = new FormData(event.target)

    // convert FormData to json object
		// SOURCE: https://stackoverflow.com/a/46774073
    const json = {}
    formdata.forEach(function(value, prop){
      json[prop] = value
    })

    // convert json to urlencoded query string
    // SOURCE: https://stackoverflow.com/a/37562814 (comments)
    const formBody = Object.keys(json).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&')

    // POST the request to Staticman's API endpoint
    await fetch("https://dev.staticman.net/v3/entry/github/kev-landry/kevinlandry.io/develop/comments", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: formBody,
    })
      .then(response => {
        // reset form
        document.getElementById("comment-form").reset()
        // reset button text
        this.setState({button: "Envoyer"})
        // display success message
        document.getElementById("success").style.display = "block"
      })
      .catch(error => {
        console.log(error)
        document.getElementById("failure").style.display = "block"
      })
  }

  render() {
    return (
      <Form id="comment-form" onSubmit={this.handleSubmit}>
        <h2>Commenter</h2>
        <Success id="success">Merci ! Votre commentaire a été envoyé et apparaîtra dans quelques minutes.</Success>
        <Failure if="failure">Désolé, votre commentaire n'a pas pu être envoyé. Réessayez plus tard.</Failure>
        <input name="fields[slug]" type="hidden" value={this.props.location.pathname} />
        <label htmlFor="name">Prénom :</label>
        <input id="name" name="fields[name]" type="text" placeholder="Prénom" />
        <label htmlFor="message">Commentaire :</label>
        <textarea id="message" name="fields[message]" placeholder="Écrivez ici..."></textarea>
        <button type="submit">{this.state.button}</button>
      </Form>
      )
  }
}
export default CommentForm