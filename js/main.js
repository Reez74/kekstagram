import './modal.js';
import './form.js';
import { createUserPosts } from './data.js';
import { initThumbnails } from './thumbnail.js';

const userPosts = createUserPosts();
initThumbnails();

export { userPosts };
