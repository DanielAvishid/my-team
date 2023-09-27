import './assets/style/main.scss'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './pages/Home'

export function App() {
  return (
    <div className='main-layout'>
      <AppHeader />
      <Home />
    </div>
  )
}
