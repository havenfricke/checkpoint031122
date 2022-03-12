import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from './AxiosService'

class PostsService {
  async getAllPosts(query = {}) {
    const res = await api.get('api/posts', { params: query })
    AppState.posts = res.data.posts
    logger.log('get all posts', res.data.posts)
  }
  async getAll(query = {}) {
    const res = await api.get('api/posts', { params: query })
    AppState.rawObject = res.data
    logger.log('get whole ass object', res.data)
  }
}

export const postsService = new PostsService()