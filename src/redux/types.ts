import { User, Week, Weeks, FattyFood, Sport } from '../redux/actions/types'

export type AppState = {
  auth: {
    userInfo: {
      _id: string
      isAdmin: false
      lifeStyles: string
      name: string
      email: string
      password: string
    }
    loading: boolean
    isLoggedIn: boolean
    error: any
  }
  user: User
  week: {
    weekInfo: Week
    //fattyFoods: FattyFood[]
  }
  weeks: Weeks
  fattyFood: FattyFood
  sport: Sport
}
