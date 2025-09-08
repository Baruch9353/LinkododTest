import { readFile, writeFile } from 'fs/promises';

const listPosts = './data/posts.json';

// Get all posts
export async function getAllPosts() {
  const data = await readFile(listPosts, 'utf8');
  return JSON.parse(data);
}

// Get a post by id
export async function getPostsById(id) {
  const posts = await getAllPosts();
  return posts.find(r => r.id === id);
}

// Add a new post
export async function addPosts(newPost) {
  const posts = await getAllPosts();
  let id = posts.length > 0 ? Number(posts[posts.length - 1].id) + 1 : 1;

  const postToAdd = {
    id: id+="",
    name: newPost.name,
    description: newPost.description,
    likes: newPost.likes,
    time: newPost.time
  };

  posts.push(postToAdd);
  await writeFile(listPosts, JSON.stringify(posts, null, 2));
  return postToAdd;
}

// Update a riddle by id
export async function updatePosts(id, updatedData) {
  const posts = await getAllPosts();
  const index = posts.find(r => r.id === id);
  if (!index) return null;

  if (!updatedData.name || !updatedData.description || !updatedData.likes || !updatedData.time ) {
    return null;
  }

  const updatedPost = {
    id,
    name: updatedData.name,
    description: updatedData.description,
    likes: updatedData.likes,
    time: updatedData.time
  };

  posts[index.id] = updatedPost;
  await writeFile(listPosts, JSON.stringify(posts, null, 2));
  return updatedPost;
}

// Delete a post by id
export async function deletePosts(id) {
  const posts = await getAllPosts();
  const updatedPosts = posts.filter(r => r.id !== id);

  await writeFile(listPosts, JSON.stringify(updatedPosts, null, 2));
  return true;
}