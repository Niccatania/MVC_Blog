const commentFormHandler = async (event) => {
    event.preventDefault();

const comment_text = document.querySelector('#commentText').value.trim();

const post_id= window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

if(comment_text) {
  const response =await fetch('api/comments', {
    method:'POST',
    body:JSON.stringify({post_id,comment_text}),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) { console.log("Hey the comment has posted");
    document.location.reload();
  } else {
    alert('Failed to create comment');
  }
}
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
