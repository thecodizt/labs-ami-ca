"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MoveUpFadeInSection } from "@/components/ui/move-up-fade-in-section";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const AboutPage = () => {
	return (
		<>
			<div className="hidden lg:flex bg-gradient-to-b from-BLUE via-GOLD to-white h-screen overflow-y-scroll scrollbar-hide flex-col scroll">
				<div className="min-h-screen w-full p-2">
					<div className="h-full w-full rounded-lg bg-PURPLE text-white shadow-sm flex flex-col p-4">
						<Header variant="dark" active={"about"} />
						<div className="h-full w-full flex">
							<div className="w-full h-full p-8 flex flex-col items-start justify-center gap-4">
								<MoveUpFadeInSection className="text-7xl font-[Poppins] font-bold text-white">
									About Us
								</MoveUpFadeInSection>
								<MoveUpFadeInSection
									className="text-xl font-[Poppins] font-light text-white"
									delay={0.5}
								>
									<span className="font-light">
										AMI is a leading payment processing
										company offering versatile in-store,
										online, and mobile solutions. Our
										advanced technology ensures fast,
										efficient, and secure transactions,
										protecting sensitive financial
										information with robust security
										measures. We cater to the diverse needs
										of all businesses with comprehensive
										payment processing solutions.
									</span>
								</MoveUpFadeInSection>
							</div>
							<motion.ul
								variants={container}
								className="w-full h-full relative"
								initial="hidden"
								animate="visible"
							>
								<motion.li
									variants={item}
									className="h-full w-full flex items-center justify-center"
								>
									<Image
										src={"/images/about/hero-1.png"}
										alt=""
										width={500}
										height={600}
										className="object-contain animate-pulse-scale"
									/>
								</motion.li>
								{/* <motion.li
									variants={item}
									className="absolute bottom-[100px] left-[-70px]"
								>
									<Image
										src={"/images/about/hero-2.png"}
										alt=""
										width={230}
										height={300}
										className="object-contain animate-pulse-scale"
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute bottom-[80px] right-[30px]"
								>
									<Image
										src={"/images/about/hero-3.png"}
										alt=""
										width={150}
										height={200}
										className="object-contain animate-pulse-scale"
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute top-[180px] left-[-30px]"
								>
									<Image
										src={"/images/about/hero-4.png"}
										alt=""
										width={170}
										height={170}
										className="object-contain animate-pulse-scale"
									/>
								</motion.li> */}
							</motion.ul>
						</div>
					</div>
				</div>

				<div className="min-h-screen h-full w-full p-2 flex flex-col items-center justify-center gap-4">
					<div className="bg-SKYBLUE rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-center">
						<div className="w-full flex items-center justify-center">
							<MoveUpFadeInSection
								className="font-[Sora] font-bold text-black text-5xl"
								duration={0.2}
							>
								Our Services
							</MoveUpFadeInSection>
						</div>
						<div className="h-full w-full flex gap-8">
							<MoveUpFadeInSection
								delay={0.2}
								duration={0.4}
								className="w-full h-full flex flex-col gap-4"
							>
								<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

									<div className="text-xl font-[Poppins] font-light text-black flex flex-col gap-6 justify-between h-full py-4">
										<Image
											src={
												"/images/about/presentation.png"
											}
											alt=""
											width={150}
											height={150}
											className="object-contain"
										/>
										<div className="text-[44px] font-bold font-[Sora] text-BLUE leading-none">
											Global <br /> Aspriation
										</div>
										<div>
											At AMI, we take pride in delivering
											superior customer service, ensuring
											that our clients receive the highest
											level of support and satisfaction.
										</div>
									</div>
								</div>
							</MoveUpFadeInSection>

							<MoveUpFadeInSection
								delay={0.6}
								duration={0.4}
								className="w-full h-full flex flex-col gap-4"
							>
								<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

									<div className="text-lg font-[Poppins] font-light text-black flex flex-col gap-6 justify-between h-full py-4">
										<Image
											src={"/images/about/gears.png"}
											alt=""
											width={150}
											height={150}
											className="object-contain"
										/>
										<div className="text-[44px] font-bold font-[Sora] text-GOLD leading-none">
											Experienced <br /> Team
										</div>
										<div>
											Our team consists of knowledgeable
											and experienced professionals
											dedicated to providing exceptional
											assistance with setup,
											troubleshooting and optimizing
											payment processes.
										</div>
									</div>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection
								delay={1}
								duration={0.4}
								className="w-full h-full flex flex-col gap-4"
							>
								<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

									<div className="text-xl font-[Poppins] font-light text-black flex flex-col gap-6 justify-between h-full py-4">
										<Image
											src={"/images/about/stars.png"}
											alt=""
											width={150}
											height={150}
											className="object-contain"
										/>
										<div className="text-[44px] font-bold font-[Sora] text-BLUE leading-none">
											Seamless <br /> Experience
										</div>
										<div>
											At AMI, we take pride in delivering
											superior customer service, ensuring
											that our clients receive the highest
											level of support and satisfaction.
										</div>
									</div>
								</div>
							</MoveUpFadeInSection>
						</div>
					</div>

					{/* <div className="bg-SKYBLUE rounded-lg shadow-sm flex gap-8 py-8 px-12 h-full w-full items-center justify-between">
						<MoveUpFadeInSection
							delay={0.8}
							duration={0.2}
							className="font-[Sora] text-xl"
						>
							See what AMI Merchants can do for you.
						</MoveUpFadeInSection>
						<MoveUpFadeInSection
							delay={1}
							duration={0.2}
							className="bg-gradient-to-r from-BLUE to-GOLD rounded-full p-[2px] text-white"
						>
							<Button className="rounded-full bg-white text-slate-900">
								Contact Us{" "}
								<MoveRight className="animate-pulse px-1" />
							</Button>
						</MoveUpFadeInSection>
					</div> */}
				</div>

				<div className="h-full w-full p-2">
					<div className="h-full w-full rounded-lg bg-[#fff9ed] shadow-sm flex gap-4 items-center justify-center px-[100px] py-[80px]">
						<div className="bg-white rounded-lg shadow-sm flex flex-col p-4 h-full items-start justify-between gap-4">
							<Image
								src={"/images/about/rocket.png"}
								alt=""
								width={700}
								height={500}
								className="object-contain"
							/>

							<MoveUpFadeInSection
								className="w-full text-start text-4xl font-[Sora]"
								delay={0.2}
							>
								Our{" "}
								<span className="font-semibold">Mission</span>
							</MoveUpFadeInSection>

							<MoveUpFadeInSection
								className="text-lg"
								delay={0.4}
							>
								We help businesses of all sizes pay, get paid,
								optimize, and grow. By leveraging our
								state-of-the-art payment solutions, businesses
								can streamline their payment processes, reduce
								costs, and enhance their overall operational
								efficiency. Our goal is to empower our partners
								and merchants with the tools they need to
								succeed in today&apos;s competitive market.
							</MoveUpFadeInSection>
						</div>
						<div className="bg-white rounded-lg shadow-sm flex flex-col p-4 h-full items-start justify-between gap-4">
							<Image
								src={"/images/about/chart-orange.png"}
								alt=""
								width={700}
								height={500}
								className="object-contain"
							/>

							<MoveUpFadeInSection
								delay={0.2}
								className="w-full text-start text-4xl font-[Sora]"
							>
								Our{" "}
								<span className="font-semibold">Vision</span>
							</MoveUpFadeInSection>

							<MoveUpFadeInSection
								className="text-lg"
								delay={0.4}
							>
								At AMI, we believe in building strong and
								lasting relationships with our clients. We are
								dedicated to understanding your unique needs and
								providing customized solutions that align with
								your business goals. With our commitment to
								innovation, security, and customer satisfaction,
								we strive to be your trusted partner in payment
								processing.
							</MoveUpFadeInSection>
						</div>
					</div>
				</div>

				<div className="h-full w-full p-2">
					<Footer />
				</div>
			</div>

			<div className="flex lg:hidden bg-gradient-to-b from-BLUE via-GOLD to-white h-screen overflow-y-scroll scrollbar-hide snap-y snap-mandatory flex-col scroll">
				<div className="min-h-screen w-full p-2 snap-start flex flex-col gap-2">
					<Header active={"about"} />

					<div className="h-full w-full rounded-lg bg-PURPLE text-white shadow-sm flex flex-col p-4 items-center gap-2">
						<div className="font-[Poppins] font-bold text-3xl p-2">
							About Us
						</div>
						<MoveUpFadeInSection className="relative h-full w-full">
							<motion.ul
								variants={container}
								className="w-full h-full relative"
								initial="hidden"
								animate="visible"
							>
								<motion.li
									variants={item}
									className="h-full w-full flex items-center justify-center"
								>
									<Image
										src={"/images/about/hero-1.png"}
										alt=""
										width={250}
										height={300}
										className="object-contain"
									/>
								</motion.li>
								{/* <motion.li
									variants={item}
									className="absolute bottom-[50px] left-[30px]"
								>
									<Image
										src={"/images/about/hero-2.png"}
										alt=""
										width={120}
										height={40}
										className="object-contain animate-pulse-scale"
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute bottom-[40px] right-[30px]"
								>
									<Image
										src={"/images/about/hero-3.png"}
										alt=""
										width={60}
										height={40}
										className="object-contain animate-pulse-scale"
									/>
								</motion.li>
								<motion.li
									variants={item}
									className="absolute top-[60px] left-[10px]"
								>
									<Image
										src={"/images/about/hero-4.png"}
										alt=""
										width={100}
										height={20}
										className="object-contain animate-pulse-scale"
									/>
								</motion.li> */}
							</motion.ul>
						</MoveUpFadeInSection>
						<div>
							<MoveUpFadeInSection
								className="font-light text-lg text-center"
								delay={0.2}
							>
								AMI is a leading payment processing company
								offering versatile in-store, online, and mobile
								solutions. Our advanced technology ensures fast,
								efficient, and secure transactions, protecting
								sensitive financial information with robust
								security measures. We cater to the diverse needs
								of all businesses with comprehensive payment
								processing solutions.
							</MoveUpFadeInSection>
						</div>
					</div>
				</div>

				<div className="min-h-screen h-full w-full snap-start p-2 flex flex-col items-center justify-center gap-4">
					<div className="bg-SKYBLUE rounded-lg shadow-sm flex flex-col gap-4 p-4 h-full w-full items-center justify-center">
						<div className="w-full flex items-center justify-center">
							<MoveUpFadeInSection
								className="font-[Sora] font-bold text-black text-3xl"
								duration={0.2}
							>
								Our Services
							</MoveUpFadeInSection>
						</div>
						<div className="h-full w-full flex flex-col gap-2">
							<MoveUpFadeInSection
								delay={0.2}
								duration={0.2}
								className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-4 relative"
							>
								<div className="absolute h-2 w-2 rounded-full bg-black top-3 left-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black top-3 right-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black bottom-3 left-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black bottom-3 right-3" />

								<div className="text-xs font-[Poppins] font-light text-black flex flex-col gap-2 items-center justify-center h-full py-4">
									<div className="flex justify-center items-center w-full p-4 gap-4">
										<Image
											src={
												"/images/about/presentation.png"
											}
											alt=""
											width={100}
											height={100}
											className="object-contain"
										/>
										<div className="w-full text-2xl font-bold font-[Sora] text-BLUE leading-none text-start">
											Global Aspriation
										</div>
									</div>

									<div>
										At AMI, we take pride in delivering
										superior customer service, ensuring that
										our clients receive the highest level of
										support and satisfaction.
									</div>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection
								delay={0.2}
								duration={0.2}
								className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-4 relative"
							>
								<div className="absolute h-2 w-2 rounded-full bg-black top-3 left-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black top-3 right-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black bottom-3 left-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black bottom-3 right-3" />

								<div className="text-xs font-[Poppins] font-light text-black flex flex-col gap-2 items-center justify-center h-full py-4">
									<div className="flex justify-center items-center w-full p-4 gap-4">
										<Image
											src={"/images/about/gears.png"}
											alt=""
											width={100}
											height={100}
											className="object-contain"
										/>
										<div className="w-full text-2xl font-bold font-[Sora] text-GOLD leading-none text-start">
											Experienced Team
										</div>
									</div>

									<div>
										Our team consists of knowledgeable and
										experienced professionals dedicated to
										providing exceptional assistance with
										setup, troubleshooting and optimizing
										payment processes.
									</div>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection
								delay={0.2}
								duration={0.2}
								className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-4 relative"
							>
								<div className="absolute h-2 w-2 rounded-full bg-black top-3 left-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black top-3 right-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black bottom-3 left-3" />
								<div className="absolute h-2 w-2 rounded-full bg-black bottom-3 right-3" />

								<div className="text-xs font-[Poppins] font-light text-black flex flex-col gap-2 items-center justify-center h-full py-4">
									<div className="flex justify-center items-center w-full p-4 gap-4">
										<Image
											src={"/images/about/stars.png"}
											alt=""
											width={100}
											height={100}
											className="object-contain"
										/>
										<div className="w-full text-2xl font-bold font-[Sora] text-BLUE leading-none text-start">
											Seamless Experience
										</div>
									</div>

									<div>
										We are committed to making your
										experience with our services seamless
										and satisfying, addressing all your
										needs efficiently and effectively.
									</div>
								</div>
							</MoveUpFadeInSection>
						</div>
					</div>
				</div>

				<div className="min-h-screen h-full w-full snap-start p-2 flex flex-col items-center justify-center gap-4">
					{/* <div className="bg-SKYBLUE rounded-lg shadow-sm flex gap-4 p-4 w-full items-center justify-between">
						<div className="w-full flex items-center justify-center">
							<MoveUpFadeInSection>
								<span>
									See what AMI Merchants can do for you.
								</span>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection>
								<Button className="rounded-full bg-white text-slate-900">
									Contact Us{" "}
									<MoveRight className="animate-pulse px-1" />
								</Button>
							</MoveUpFadeInSection>
						</div>
					</div> */}
					<div className="h-full w-full flex flex-col gap-2">
						<div className="bg-white rounded-lg shadow-sm flex flex-col p-4 h-full items-start justify-between">
							<Image
								src={"/images/about/rocket.png"}
								alt=""
								width={400}
								height={200}
								className="object-contain"
							/>

							<MoveUpFadeInSection className="w-full text-start text-xl font-[Sora]">
								Our{" "}
								<span className="font-semibold">Mission</span>
							</MoveUpFadeInSection>

							<MoveUpFadeInSection className="font-light text-xs">
								We help businesses of all sizes pay, get paid,
								optimize, and grow. By leveraging our
								state-of-the-art payment solutions, businesses
								can streamline their payment processes, reduce
								costs, and enhance their overall operational
								efficiency. Our goal is to empower our partners
								and merchants with the tools they need to
								succeed in today&apos;s competitive market.
							</MoveUpFadeInSection>
						</div>
						<div className="bg-white rounded-lg shadow-sm flex flex-col p-4 h-full items-start justify-between">
							<Image
								src={"/images/about/chart-orange.png"}
								alt=""
								width={700}
								height={500}
								className="object-contain"
							/>
							<MoveUpFadeInSection className="w-full text-start text-xl font-[Sora]">
								Our Vision
							</MoveUpFadeInSection>
							<MoveUpFadeInSection className="font-light text-xs">
								At AMI, we believe in building strong and
								lasting relationships with our clients. We are
								dedicated to understanding your unique needs and
								providing customized solutions that align with
								your business goals. With our commitment to
								innovation, security, and customer satisfaction,
								we strive to be your trusted partner in payment
								processing.
							</MoveUpFadeInSection>
						</div>
					</div>
				</div>

				{/* <div className="min-h-screen h-full w-full snap-start p-2 flex flex-col items-center justify-center gap-4">
					<div className="bg-SKYBLUE rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-center">
						<div className="w-full flex items-center justify-center">
							<MoveUpFadeInSection
								className="font-[Sora] font-bold text-black text-5xl"
								duration={0.2}
							>
								Our Services
							</MoveUpFadeInSection>
						</div>
						<div className="h-full w-full flex gap-8">
							<MoveUpFadeInSection
								delay={0.2}
								duration={0.2}
								className="w-full h-full flex flex-col gap-4"
							>
								<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

									<div className="text-xl font-[Poppins] font-light text-black flex flex-col gap-6 justify-between h-full py-4">
										<Image
											src={
												"/images/about/presentation.png"
											}
											alt=""
											width={150}
											height={150}
											className="object-contain"
										/>
										<div className="text-[44px] font-bold font-[Sora] text-BLUE leading-none">
											Global <br /> Aspriation
										</div>
										<div>
											At AMI, we take pride in delivering
											superior customer service, ensuring
											that our clients receive the highest
											level of support and satisfaction.
										</div>
									</div>
								</div>
							</MoveUpFadeInSection>

							<MoveUpFadeInSection
								delay={0.4}
								duration={0.2}
								className="w-full h-full flex flex-col gap-4"
							>
								<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

									<div className="text-lg font-[Poppins] font-light text-black flex flex-col gap-6 justify-between h-full py-4">
										<Image
											src={"/images/about/gears.png"}
											alt=""
											width={150}
											height={150}
											className="object-contain"
										/>
										<div className="text-[44px] font-bold font-[Sora] text-GOLD leading-none">
											Experienced <br /> Team
										</div>
										<div>
											Our team consists of knowledgeable
											and experienced professionals
											dedicated to providing exceptional
											assistance with setup,
											troubleshooting and optimizing
											payment processes.
										</div>
									</div>
								</div>
							</MoveUpFadeInSection>
							<MoveUpFadeInSection
								delay={0.6}
								duration={0.2}
								className="w-full h-full flex flex-col gap-4"
							>
								<div className="w-full h-full flex flex-col items-start justify-center gap-4 bg-white rounded-lg shadow-sm p-8 relative">
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black top-3 right-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 left-3" />
									<div className="absolute h-3 w-3 rounded-full bg-black bottom-3 right-3" />

									<div className="text-xl font-[Poppins] font-light text-black flex flex-col gap-6 justify-between h-full py-4">
										<Image
											src={"/images/about/stars.png"}
											alt=""
											width={150}
											height={150}
											className="object-contain"
										/>
										<div className="text-[44px] font-bold font-[Sora] text-BLUE leading-none">
											Seamless <br /> Experience
										</div>
										<div>
											At AMI, we take pride in delivering
											superior customer service, ensuring
											that our clients receive the highest
											level of support and satisfaction.
										</div>
									</div>
								</div>
							</MoveUpFadeInSection>
						</div>
					</div>

					<div className="bg-SKYBLUE rounded-lg shadow-sm flex gap-8 py-8 px-12 h-full w-full items-center justify-between">
						<MoveUpFadeInSection
							delay={0.8}
							duration={0.2}
							className="font-[Sora] text-xl"
						>
							See what AMI Merchants can do for you.
						</MoveUpFadeInSection>
						<MoveUpFadeInSection
							delay={1}
							duration={0.2}
							className="bg-gradient-to-r from-BLUE to-GOLD rounded-full p-[2px] text-white"
						>
							<Button className="rounded-full bg-white text-slate-900">
								Contact Us{" "}
								<MoveRight className="animate-pulse px-1" />
							</Button>
						</MoveUpFadeInSection>
					</div>
				</div>

				<div className="min-h-screen h-full w-full snap-start p-2">
					<div className="h-full w-full rounded-lg bg-[#fff9ed] shadow-sm flex gap-4 items-center justify-center p-[100px]">
						<div className="bg-white rounded-lg shadow-sm flex flex-col p-4 h-full items-start justify-between">
							<Image
								src={"/images/about/rocket.png"}
								alt=""
								width={700}
								height={500}
								className="object-contain"
							/>

							<MoveUpFadeInSection className="w-full text-start text-4xl font-[Sora]">
								Our{" "}
								<span className="font-semibold">Mission</span>
							</MoveUpFadeInSection>

							<MoveUpFadeInSection className="font-light text-lg">
								We help businesses of all sizes pay, get paid,
								optimize, and grow. By leveraging our
								state-of-the-art payment solutions, businesses
								can streamline their payment processes, reduce
								costs, and enhance their overall operational
								efficiency. Our goal is to empower our partners
								and merchants with the tools they need to
								succeed in today&apos;s competitive market.
							</MoveUpFadeInSection>
						</div>
						<div className="bg-white rounded-lg shadow-sm flex flex-col p-4 h-full items-start justify-between">
							<Image
								src={"/images/about/chart-orange.png"}
								alt=""
								width={700}
								height={500}
								className="object-contain"
							/>

							<MoveUpFadeInSection
								delay={0.2}
								className="w-full text-start text-4xl font-[Sora]"
							>
								Our{" "}
								<span className="font-semibold">Vision</span>
							</MoveUpFadeInSection>

							<MoveUpFadeInSection
								className="font-light text-lg"
								delay={0.2}
							>
								We help businesses of all sizes pay, get paid,
								optimize, and grow. By leveraging our
								state-of-the-art payment solutions, businesses
								can streamline their payment processes, reduce
								costs, and enhance their overall operational
								efficiency. Our goal is to empower our partners
								and merchants with the tools they need to
								succeed in today&apos;s competitive market.
							</MoveUpFadeInSection>
						</div>
					</div>
				</div> */}

				<div className="min-h-screen h-full w-full snap-start p-2">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default AboutPage;
