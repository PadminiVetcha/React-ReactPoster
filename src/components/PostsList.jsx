import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList(props) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    //console.log('Added posts', [postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} body={post.body} author={post.name} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some..!!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
