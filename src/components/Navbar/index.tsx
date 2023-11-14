import { PiShoppingCartThin } from 'react-icons/pi'

const Navbar = () => {
	return (
		<header>
			<nav>
				<div>
					<div className="bg-white px-6 py-3 flex justify-around container">
						<div className="flex items-center">
							<a className="cursor-pointer">
								<svg
									className="h-8 w-8 text-blue-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</a>
						</div>
						<div className="hidden md:flex space-x-8">
							<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
								Product
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
								Features
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
								Marketplace
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
								Company
							</a>
						</div>

						<div className="flex items-center space-x-4">
							<a href="#" className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-800">
								Order Now
							</a>
							<a href="#">
								<PiShoppingCartThin className="text-[31px]" />
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
