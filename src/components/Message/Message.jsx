const Message = props => {
  return (
    <div>
        <p>Author: {props.author}</p>
        <p>{props.message}</p>
    </div>
  )
}

export default Message;

