import { User } from '../redux/actions/types'

export type AppState = {
  auth: {
    userInfo: User
    loading: boolean
    isLoggedIn: boolean
    error: any
  }
  user: {
    
  }
}
