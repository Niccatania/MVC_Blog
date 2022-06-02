async function commentFormHandler(event) {
  event.preventDefault();

  const project_id = document.querySelector('.new-comment-form').dataset.projectid;

  const comment_text = document.querySelector('#comment-name').value.trim();

  if (comment_text) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            project_id,
              comment_text
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.reload();
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);