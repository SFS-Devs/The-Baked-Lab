import React from 'react'

import cakeRaw from '../../assets/White Cake Stripped.png'

const Hero = () => {
	return (
		<section
			id="hero"
			className="relative table w-full md:py-16 pt-[5rem] xs:pb-10 container mx-auto pl-[5rem] pr-[5rem]"
		>
			<div className="mx-auto container bg-inherit">
				<div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] text-center md:text-left">
					<div className="md:col-span-7 mb-10 md:mb-0 md:animate-slideLeft xs:animate-slideUp">
						<div className="md:mr-6 2xl:ml-[100px]">
							{/* <img style={{ width: 750, margin: '0 auto' }} src={stackedLogo} /> */}
							<h4 className="lg:leading-normal leading-normal xs:text-5xl md:text-6xl mb-5 text-black dark:text-white tracking-tighter  font-headline font-black">
								ARTISAN BAKED GOODS
							</h4>
							<h5 className="text-slate-600 xs:text-2xl md:text-3xl tracking-normal xs:-translate-y-[18px] md:-translate-y-[25px]">
								A love for food, community, & design
							</h5>
							{/* <p className="text-slate-400 text-lg max-w-xl">
									We develop industry leading software that converts and performs.
								</p> */}
							<div className="mt-6">
								<a
									href="#"
									className="bg-pink text-white px-10 py-3 rounded hover:bg-darkPink hover:text-black transition ease-in-out duration-300 uppercase"
								>
									Order Now
								</a>
								{/* <Link href="#services">
										<a className="btn bg-transparent hover:bg-blue-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mx-2 mt-2 w-[160px]">
											<i className="uil uil-book-alt"></i> More Info
										</a>
									</Link> */}
							</div>
						</div>
					</div>

					<div className="md:col-span-5 md:animate-slideRight xs:animate-slideUp hidden md:block">
						<img src={cakeRaw} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
