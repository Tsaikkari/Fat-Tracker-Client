import { User, Week, Weeks, FattyFood, Sport } from '../redux/actions/types'

export type AuthState = User & {
  isLoggedIn: boolean
  loading: boolean
  error: any
}

export type WeekState = Week & {
  loading: boolean
  error: any
}

export type SportState = Sport & {
  error: any
  loading: boolean
}

export type AppState = {
  auth: AuthState
  week: WeekState
  weeks: Weeks
  fattyFood: FattyFood
  sport: SportState
}
