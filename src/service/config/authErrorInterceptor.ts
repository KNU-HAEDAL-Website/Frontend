import { AxiosError } from 'axios'

import { useAuthStore } from '@/store/auth'

import { AUTHORIZATION_API, BACKEND_API } from './index'

const authErrorInterceptor = async (error: AxiosError) => {
  const accessToken = useAuthStore.getState().accessToken
  const setAccessToken = useAuthStore.getState().setAccessToken

  if (error.response) {
    const status = error.response.status

    if (status === 401) {
      try {
        const res = await BACKEND_API.post(
          '/reissue',
          {},
          {
            headers: { Authorization: accessToken },
          },
        )

        const origin = error.config
        if (origin) {
          const newAccessToken = res.headers['authorization']
          setAccessToken(newAccessToken)

          const retryRes = await AUTHORIZATION_API(origin)
          return retryRes
        }
      } catch (reissueError) {
        return Promise.reject(reissueError)
      }
    }
  }

  return Promise.reject(error)
}

export default authErrorInterceptor
