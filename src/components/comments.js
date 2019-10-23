import React from "react"
import styled from "styled-components"
import moment from "moment"
// import "moment/locale/fr-ch"

const StyledComment = styled.div`
  margin-bottom: 5rem;
`

const CommentInfo = styled.p`
  padding-bottom: 0.5rem;
  margin-bottom: 1rem; // reduce default margin
  border-bottom: 1px solid ${props => props.theme.color_darkgrey};
  &:first-letter {
    text-transform: capitalize;
  }
`

const CommentMessage = styled.p`
  margin-top: 0; // reduce default margin
  padding: 0 2rem;
`

class Comment extends React.Component {
  render() {
    return (
      <StyledComment>
        <CommentInfo>{moment(this.props.date).calendar()}, <strong>{this.props.name}</strong> a écrit :</CommentInfo>
        <CommentMessage>{this.props.message}</CommentMessage>
      </StyledComment>
    )
  }
}

export default Comment