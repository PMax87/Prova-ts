import { useContext } from 'react'
import { TourContext } from './TourContext'

export const useTours = () => {
  const context = useContext(TourContext)

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  return context
}