async function commentFormHandler(event) {
    event.preventDefault();
  // Selecting the comments text content
    const comment_text = document.querySelector('#comment-text').value.trim();

  // This gets the 3rd parameter from our URL using the window location method, which is our post ID
    const post_id = window.location.pathname.split('/')[2]
    
  // Api call to 
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
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

console.log(window.location.pathname.split('/')[2]);
