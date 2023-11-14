import React from 'react'
import ServiceBlock from './ServiceBlock'

const Services = () => {
	return (
		<section id="services" className="container">
			<div className="flex flex-col lg:flex-row justify-center items-center w-full py-8 mx-auto">
				<ServiceBlock />
				<ServiceBlock />
				<ServiceBlock />
			</div>
		</section>
	)
}

export default Services
