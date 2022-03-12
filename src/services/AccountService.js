import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
      logger.log(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async update(updateBody) {
    const res = await api.put('/account', updateBody)
    logger.log('Edit Account', res.data)
    AppState.account = res.data
  }
}

export const accountService = new AccountService()
