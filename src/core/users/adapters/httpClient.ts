import { httpInstance } from 'core/shared/request/httpInstance'
import { IHttpClient } from '../types'

export const httpClient: IHttpClient = {
  list: async (dto, filterDTO) => {
    const { data } = await httpInstance.get(`/users`, {
      params: { ...dto, ...filterDTO },
    })
    return data
  },
}
