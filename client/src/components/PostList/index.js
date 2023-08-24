import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import Post from './Post';
import { postsState$ } from '../../redux/selectors';

// useSelect viet cac selector tuong ung de lay ra du lieu

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  console.log('[PostList - posts]', posts);

  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {/* <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid> */}
      {
        posts.map(post => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))
      }
    </Grid>
  )
}
