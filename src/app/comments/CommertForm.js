import React, { useState } from 'react';

function CommentForm({ onCommentSubmit, gameStateId }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onCommentSubmit(gameStateId, comment);
      setComment(''); // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment here"
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default CommentForm;
