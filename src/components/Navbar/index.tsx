import { PiShoppingCartThin } from 'react-icons/pi'
import wideLogo from '../../assets/Wide Logo Stripped.png'
import stackedLogo from '../../assets/Stacked Logo Stripped.png'
import stackedLogoCentered from '../../assets/Centered Logo Stripped.png'

const Navbar = () => {
	return (
		<nav>
			<div className="flex flex-col container mx-auto pt-4">
				<img style={{ width: 750, margin: '0 auto' }} src={wideLogo} />
				<div className="px-6 py-3 flex justify-around container">
					<div className="flex items-center">
						{/* <a
							href="#"
							className="bg-pink text-white px-4 py-2 rounded hover:bg-darkPink hover:text-black transition ease-in-out duration-300"
						>
							Order Now
						</a> */}
					</div>
					<div className="hidden md:flex space-x-16">
						<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
							HOME
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
							SERVICES
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
							ABOUT
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
							CONTACT
						</a>
						<a href="#">
							<PiShoppingCartThin className="text-[31px]" />
						</a>
					</div>

					<div className="flex items-center space-x-4"></div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
