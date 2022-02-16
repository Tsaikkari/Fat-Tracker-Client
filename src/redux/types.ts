import { User, Week, Weeks, FattyFood, Sport } from '../redux/actions/types'

export type AppState = {
  auth: {
    userInfo: User
    loading: boolean
    isLoggedIn: boolean
    error: any
  }
  user: {
    userInfo: User
  }
  week: Week
  weeks: Weeks,
  fattyFood: FattyFood
  sport: Sport
}
