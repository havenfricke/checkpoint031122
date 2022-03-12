import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from './AxiosService'

class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts', { params: query })
    AppState.posts = res.data.posts
    logger.log('get all posts', res.data.posts)
  }
  // async getAll(query = {}) {
  //   const res = await api.get('api/posts', { params: query })
  //   AppState.rawObject = res.data
  //   logger.log('get whole ass object', res.data)
  // }

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



}

export const postsService = new PostsService()