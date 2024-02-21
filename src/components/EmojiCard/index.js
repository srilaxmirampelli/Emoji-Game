// Write your code here.
import './index.css'

/* EmojiCard Component */
const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji

  /* On click emojiCard this is pass the clicked emoji id
   to uniquely identify which emoji has been clicked! */
  const onClickEmojiCard = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card" onClick={onClickEmojiCard}>
      <button className="emoji-button" type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
