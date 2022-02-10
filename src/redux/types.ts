import { User, Weeks } from '../redux/actions/types'

export type AppState = {
  auth: {
    userInfo: User
    loading: boolean
    isLoggedIn: boolean
    error: any
  }
  user: {
    
  }
  week: {
    date: ''
  },
  weeks: Weeks
}
