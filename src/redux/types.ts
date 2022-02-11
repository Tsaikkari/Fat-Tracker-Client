import { User, Week, Weeks, FattyFood, FattyFoods, Sport, Sports, Weight, Weights } from '../redux/actions/types'

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
  weight: Weight,
  weights: Weights,
  fattyFood: FattyFood
  fattyFoods: FattyFoods,
  sport: Sport,
  sports: Sports
}
