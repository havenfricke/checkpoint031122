import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { accountApi } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await accountApi.get('/account')
      AppState.account = res.data
      logger.log(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async update(updateBody) {
    const res = await accountApi.put('/account', updateBody)
    logger.log('Edit Account', res.data)
    AppState.account = res.data
  }
}

export const accountService = new AccountService()
