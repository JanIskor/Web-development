import './App.css'
import AddUser from './components/AddUser'
import Header from './components/Header'
import { Button } from '~/components/ui/button'


function App() {

  return (
		<>
			<Header />
			<AddUser />
			<Button variant='outline'>Бесполезная кнопка</Button>
		</>
	)
}

export default App
