import { PiShoppingCartThin } from 'react-icons/pi'
import wideLogo from '../../assets/Wide Logo Stripped.png'
import { Squash as Hamburger } from 'hamburger-react'
import './styles.css'
import 'react-modern-drawer/dist/index.css'
import React from 'react'
import BottomDrawer from './Drawer'

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	const handleToggleHamburger = () => setIsOpen((prev: boolean) => !prev)

	return (
		<nav>
			<div className="flex flex-col container mx-auto pt-4">
				<img style={{ width: 750, margin: '0 auto' }} src={wideLogo} />
				<div className="px-6 py-3 hidden justify-around container md:flex">
					<div className="hidden md:flex space-x-16">
						<a href="#" className="navbar-items hover:text-pink flex items-center transition ease-in-out duration-300">
							HOME
						</a>
						<a href="#" className="navbar-items hover:text-pink flex items-center transition ease-in-out duration-300">
							SERVICES
						</a>
						<a href="#" className="navbar-items hover:text-pink flex items-center transition ease-in-out duration-300">
							ABOUT
						</a>
						<a href="#" className="navbar-items hover:text-pink flex items-center transition ease-in-out duration-300">
							CONTACT
						</a>
						<a href="#">
							<PiShoppingCartThin className="text-[31px]" />
						</a>
					</div>
				</div>
				<div className="xs:flex md:hidden justify-center">
					<Hamburger toggled={isOpen} toggle={handleToggleHamburger} />
				</div>
			</div>
			<BottomDrawer open={isOpen} onClose={() => setIsOpen(false)} />
		</nav>
	)
}

export default Navbar
