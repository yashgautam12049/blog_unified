function addComment(event, postId) {
    event.preventDefault();
    const name = document.getElementById(`name${postId}`).value;
    const message = document.getElementById(`message${postId}`).value;

    if (name && message) {
        const commentSection = document.getElementById(`comments${postId}`);
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `<strong>${name}:</strong><p>${message}</p>`;
        commentSection.appendChild(comment);

        document.getElementById(`commentForm${postId}`).reset();
    }
}
