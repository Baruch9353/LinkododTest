import { getAllPosts, getPostsById, addPosts, updatePosts, deletePosts } from '../DAL/postsDal.js';

// Handles GET /posts - returns all posts
export async function getAllPostsHandler(req, res) {
  const posts = await getAllPosts();
  res.json(posts);
}

// Handles GET /posts/:id - returns a specific post by ID
export async function getPostsHandler(req, res) {
  const id = req.params.id;
  const post = await getPostsById(id);
  if (!post) return res.status(404).send('post not found');
  res.json(post);
}

// Handles POST /posts - creates a new post
export async function createPostsHandler(req, res) {
  const { name, description, likes, time } = req.body;
  if (!name || !description || !likes || !time ) {
    return res.status(400).send("Missing fields");
  }
  const newPost = await addPosts({ name, description, likes, time });
  res.status(201).json(newPost);
}

// Handles PUT /posts/:id - updates an existing post
export async function updatePostsHandler(req, res) {
  const id = req.params.id;
  const { name, description, likes, time } = req.body;
  if (!name || !description || !likes || !time ) {
    return res.status(400).send("All fields are required");
  }
  const updated = await updatePosts(id, { name, description, likes, time });
  if (!updated) return res.status(404).send("post not found");
  res.json(updated);
}


// Handles DELETE /riddles/:id - deletes a riddle by ID
export async function deletePostsHandler(req, res) {
  const id = req.params.id;
  const deleted = await deletePosts(id);
  if (!deleted) return res.status(404).send('post not found');
  res.send(`post ${id} deleted`);
}