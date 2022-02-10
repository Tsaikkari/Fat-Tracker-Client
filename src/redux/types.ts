import { User, Week, Weeks, FattyFood, FattyFoods, Sport, Sports, Weights } from '../redux/actions/types'

export type AppState = {
  auth: {
    userInfo: User
    loading: boolean
    isLoggedIn: boolean
    error: any
  }
  user: {
    userInfo: User
    loading: boolean
    isLoggedIn: boolean
    error: any
  }
  week: {
    date: string
    fattyFoods: FattyFoods
    sports: Sports
    weights: Weights
  },
  weeks: Weeks
  fattyFood: {
    name: string
    chosenDate: string
    week: string
  },
  fattyFoods: FattyFoods
  sport: {
    sport: string
    date: string
    duration: number | string
    week: string
  },
  sports: Sports
}
