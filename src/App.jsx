import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useRoutes from './hooks/useRoutes'
import { MainContainer } from './components/Container/Container.styled'
import { authOperations } from './redux/auth'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  const routes = useRoutes()
  return (
    <>
      <MainContainer>{routes}</MainContainer>
    </>
  )
}
