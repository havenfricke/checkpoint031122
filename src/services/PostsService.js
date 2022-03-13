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
    AppState.posts = [...AppState.posts, res.data]
    logger.log(res.data)
  }

  async deletePost(id) {
    const res = await api.delete('api/posts/' + id)
    AppState.posts = [...AppState.posts, res.data]
    logger.log(res.data)
  }

  async getProfile(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
    logger.log('Get active profile', res.data)
  }

  async getProfilePosts(id) {
    const res = await api.get('api/profiles/' + id + '/posts')
    AppState.activePosts = res.data
    logger.log('get active profile posts', res.data)
  }

  async changePageProfile(val, id) {
    id = AppState.activeProfile.id
    const res = await api.get('api/posts' + '?creatorId=' + id + '&page=' + val)
    AppState.activePosts = res.data
    logger.log('changed page on profile page', res.data, AppState.activePosts)
  }
}

export const postsService = new PostsService()