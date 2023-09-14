function addPost() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const imageUrl = document.getElementById('postImage').value;
    const videoUrl = document.getElementById('postVideo').value;

    const blogPosts = document.getElementById('blogPosts');

    const postDiv = document.createElement('div');
    postDiv.classList.add('blogPost');

    let postHTML = `<h2>${title}</h2><p>${content}</p>`;

    if (imageUrl) {
        postHTML += `<img class="postImage" src="${imageUrl}" alt="Post Image">`;
    }

    if (videoUrl) {
        postHTML += `<iframe class="postVideo" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    }

    postDiv.innerHTML = postHTML;
    blogPosts.appendChild(postDiv);
}
