import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BannerService {

  async getBanner() {
    const res = await api.get('api/ads')
    AppState.banner = res.data
    logger.log(res.data)
  }
}
export const bannerService = new BannerService()