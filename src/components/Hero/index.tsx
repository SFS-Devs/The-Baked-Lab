import React from 'react'

const Hero = () => {
	return (
		<section id="hero" className="relative table w-full md:py-32 lg:py-40 pt-[5rem] xs:pb-10 bg-white">
			<div className="mx-auto container bg-inherit">
				<div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px] text-center md:text-left">
					<div className="md:col-span-7 mb-10 md:mb-0 md:animate-slideLeft xs:animate-slideUp">
						<div className="md:mr-6">
							<h4 className="font-semibold lg:leading-normal leading-normal xs:text-4xl md:text-5xl mb-5 text-black dark:text-white tracking-tighter whitespace-nowrap">
								The Baked Lab
							</h4>
							<h5 className="text-slate-600 xs:text-2xl md:text-3xl tracking-normal xs:-translate-y-[18px] md:-translate-y-[25px]">
								A love for food, community, & design
							</h5>
							{/* <p className="text-slate-400 text-lg max-w-xl">
									We develop industry leading software that converts and performs.
								</p> */}
							<div className="mt-6">
								<a className="btn bg-blue-600 hover:bg-blue-400 border-indigo-600 hover:border-indigo-700 text-white rounded-md mx-2 mt-2 w-[160px] pt-[0.75rem]">
									Get Started
								</a>
								{/* <Link href="#services">
										<a className="btn bg-transparent hover:bg-blue-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mx-2 mt-2 w-[160px]">
											<i className="uil uil-book-alt"></i> More Info
										</a>
									</Link> */}
							</div>
						</div>
					</div>

					<div className="md:col-span-5 md:animate-slideRight xs:animate-slideUp"></div>
				</div>
			</div>
		</section>
	)
}

export default Hero
