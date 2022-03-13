import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from './AxiosService'

class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts', { params: query })
    AppState.posts = res.data.posts
    logger.log('get all posts', res.data.posts)
  }
  async changePage(val) {
    const res = await api.get('api/posts' + '?page=' + val)
    AppState.posts = res.data.posts
    logger.log('get new page', res.data.posts)
    this.getPageOf()
  }

  async getPageOf(val) {
    const res = await api.get('api/posts' + '?page=' + val)
    AppState.pageOf = res.data
    logger.log('get pageOf', res.data)
  }

  async createPost(postData) {
    const res = await api.post('api/posts', postData)
    AppState.posts.unshift(res.data)
    logger.log('created post', res.data)
  }

  async like(id) {
    const res = await api.post('api/posts/' + id + '/like')
    AppState.posts = res.data
    logger.log(res.data)
  }

  async deletePost(id) {
    const res = await api.delete('api/posts/' + id)
    AppState.posts = res.data
    logger.log(res.data)
  }

  getPostsById(query = {}) {
    const res = await api.get('api/posts')
    AppState.posts = res.data
    logger.log
  }
}

export const postsService = new PostsService()