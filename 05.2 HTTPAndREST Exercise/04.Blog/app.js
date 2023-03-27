function attachEvents() {
    const btnLoadPosts=document.getElementById('btnLoadPosts');
    const btnViewPost=document.getElementById('btnViewPost');
    const select=document.getElementById('posts');
    const selector = document.getElementById('posts');
    const POST_URL='http://localhost:3030/jsonstore/blog/posts';
    const COMMENT_URL='http://localhost:3030/jsonstore/blog/comments';

    btnLoadPosts.addEventListener('click', getPosts);
    btnViewPost.addEventListener('click', getComments);

    async function getPosts(){
        const postsRes=await fetch(POST_URL);
        const postsData=await postsRes.json();
        const values=Object.values(postsData);
        console.log(values);
        for (const {body, id, title} of values) {
            const newOption=document.createElement('option');
            newOption.textContent=title.toUpperCase();
            newOption.value=id;
            select.appendChild(newOption);
        }
    }

    async function getComments(){
        const selectedPostID = selector.value;
        const postTitle = document.getElementById('post-title');
        const postBody = document.getElementById('post-body');
        const postsContainer = document.getElementById('post-comments');
        postsContainer.innerHTML = '';
        postTitle.textContent='';
        postBody.textContent='';

        const postRes=await fetch(`${POST_URL}/${selectedPostID}`);
        const postData=await postRes.json();
        console.log(postData);
        postTitle.textContent=postData.title;
        postBody.textContent=postData.body;
        console.log(postTitle.textContent);
        console.log(postBody.textContent);

        fetch(COMMENT_URL)
            .then((res)=> res.json())
            .then((comments) => {
                for (const id in comments){
                    const currentComment = comments[id];
                    if (currentComment.postId===selectedPostID){
                        const commentLi = document.createElement('li');
                        commentLi.id = currentComment.id;
                        commentLi.textContent = currentComment.text;
                        postsContainer.appendChild(commentLi);
                    }
                }
            })
            .catch((err) => console.log(err))
        
    }
}

attachEvents();