import './App.css'
// import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
	return (
		<>
			<header className="bg-subtlePink">
				<Navbar />
				<Hero />
			</header>
			<main>
				<Services />
			</main>
			{/* <Footer /> */}
		</>
	)
}

export default App
