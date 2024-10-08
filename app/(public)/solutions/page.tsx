"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-view";
import { MoveUpFadeInSection } from "@/components/ui/move-up-fade-in-section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface OptionItem {
	company: string;
	logo: string;
	hardwareDesktop: string;
	hardwareMobile: string;
	software: string;
}

const retailOptions: OptionItem[] = [
	{
		company: "clover",
		logo: "/images/solutions/companies/clover.png",
		hardwareDesktop: "/images/solutions/desktop/retail-clover.png",
		hardwareMobile: "/images/solutions/mobile/retail-clover.png",
		software: "/images/solutions/software/clover.png",
	},
	{
		company: "pax",
		logo: "/images/solutions/companies/pax.png",
		hardwareDesktop: "/images/solutions/desktop/retail-pax.png",
		hardwareMobile: "/images/solutions/mobile/retail-pax.png",
		software: "",
	},
	{
		company: "dejavoo",
		logo: "/images/solutions/companies/dejavoo.png",
		hardwareDesktop: "/images/solutions/desktop/retail-dejavoo.png",
		hardwareMobile: "/images/solutions/mobile/retail-dejavoo.png",
		software: "",
	},
	{
		company: "ingenico",
		logo: "/images/solutions/companies/ingenico.png",
		hardwareDesktop: "/images/solutions/desktop/retail-ingenico.png",
		hardwareMobile: "/images/solutions/mobile/retail-ingenico.png",
		software: "",
	},
	{
		company: "valor",
		logo: "/images/solutions/companies/valor.png",
		hardwareDesktop: "/images/solutions/desktop/retail-valor.png",
		hardwareMobile: "/images/solutions/mobile/retail-valor.png",
		software: "",
	},
];

const restaurantOptions: OptionItem[] = [
	{
		company: "clover",
		logo: "/images/solutions/companies/clover.png",
		hardwareDesktop: "/images/solutions/desktop/restaurant-clover.png",
		hardwareMobile: "/images/solutions/mobile/restaurant-clover.png",
		software: "/images/solutions/software/clover.png",
	},
	{
		company: "pax",
		logo: "/images/solutions/companies/pax.png",
		hardwareDesktop: "/images/solutions/desktop/restaurant-pax.png",
		hardwareMobile: "/images/solutions/mobile/restaurant-pax.png",
		software: "",
	},
	{
		company: "dejavoo",
		logo: "/images/solutions/companies/dejavoo.png",
		hardwareDesktop: "/images/solutions/desktop/restaurant-dejavoo.png",
		hardwareMobile: "/images/solutions/mobile/restaurant-dejavoo.png",
		software: "",
	},
	{
		company: "valor",
		logo: "/images/solutions/companies/valor.png",
		hardwareDesktop: "/images/solutions/desktop/restaurant-valor.png",
		hardwareMobile: "/images/solutions/mobile/restaurant-valor.png",
		software: "",
	},
	{
		company: "talech",
		logo: "/images/solutions/companies/talech.png",
		hardwareDesktop: "/images/solutions/desktop/restaurant-talech.png",
		hardwareMobile: "/images/solutions/mobile/restaurant-talech.png",
		software: "",
	},
	{
		company: "ingenico",
		logo: "/images/solutions/companies/ingenico.png",
		hardwareDesktop: "/images/solutions/desktop/restaurant-ingenico.png",
		hardwareMobile: "/images/solutions/mobile/restaurant-ingenico.png",
		software: "",
	},
];

const b2bOptions: OptionItem[] = [
	{
		company: "clover",
		logo: "/images/solutions/companies/clover.png",
		hardwareDesktop: "/images/solutions/desktop/b2b-clover.png",
		hardwareMobile: "/images/solutions/mobile/b2b-clover.png",
		software: "",
	},
];

const eCommerceOptions: OptionItem[] = [
	{
		company: "clover",
		logo: "/images/solutions/companies/clover.png",
		hardwareDesktop: "/images/solutions/desktop/ecommerce-clover.png",
		hardwareMobile: "/images/solutions/mobile/ecommerce-clover.png",
		software: "",
	},
];

const SolutionsPage = () => {
	const [activeTab, setActiveTab] = useState("retail");
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeOption, setActiveOption] =
		useState<OptionItem[]>(retailOptions);

	const [activeSection, setActiveSection] = useState<OptionItem>(
		activeOption[0]
	);

	useEffect(() => {
		setActiveSection(activeOption[activeIndex]);
	}, [activeOption, activeIndex]);

	useEffect(() => {
		setActiveIndex(0);
	}, [activeTab]);

	const handleTabClick = (options: OptionItem[], tab: string) => {
		setActiveTab(tab);
		setActiveIndex(0);
		setActiveOption(options);
	};

	const handleLeftClick = () => {
		setActiveIndex(
			(prevIndex) =>
				(prevIndex - 1 + activeOption.length) % activeOption.length
		);
		setActiveSection(activeOption[activeIndex]);
	};

	const handleRightClick = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % activeOption.length);
		setActiveSection(activeOption[activeIndex]);
	};

	return (
		<>
			<div className="flex flex-col w-full p-2 gap-2 bg-gradient-to-b from-VIOLET via-GOLD to-white">
				<Header active={"solutions"} />
				<div className="flex flex-col gap-8 h-full w-full items-center justify-center rounded-lg bg-white text-slate-700 shadow-sm p-8">
					<FadeInSection className="text-4xl font-medium font-[Sora] text-center">
						Our Wide Range of Business Solutions
					</FadeInSection>
					<div className="bg-gradient-to-r from-white via-slate-500 to-white min-h-[1px] w-[60%] px-8" />
					<div className="p-1 rounded-full flex gap-1 bg-slate-100">
						<Button
							variant="ghost"
							className={
								"rounded-full font-normal bg-transparent text-slate-900 text-xs lg:text-sm " +
								(activeTab === "retail"
									? "bg-slate-900 text-white "
									: "bg-transparent")
							}
							onClick={() =>
								handleTabClick(retailOptions, "retail")
							}
						>
							Retail
						</Button>
						<Button
							variant="ghost"
							className={
								"rounded-full font-normal bg-transparent text-slate-900 text-xs lg:text-sm " +
								(activeTab === "restaurant"
									? "bg-slate-900 text-white "
									: "bg-transparent")
							}
							onClick={() =>
								handleTabClick(restaurantOptions, "restaurant")
							}
						>
							Restaurant
						</Button>
						<Button
							variant="ghost"
							className={
								"rounded-full font-normal bg-transparent text-slate-900 text-xs lg:text-sm " +
								(activeTab === "card-not-present"
									? "bg-slate-900 text-white "
									: "bg-transparent")
							}
							onClick={() =>
								handleTabClick(b2bOptions, "card-not-present")
							}
						>
							Card Not Present
						</Button>
					</div>
					{activeTab !== "card-not-present" ? (
						<div className="flex flex-col gap-10 h-full w-full items-center justify-center">
							<div className="flex flex-row justify-between items-center w-[90%] lg:w-[60%]">
								<Button
									variant={"ghost"}
									size={"icon"}
									onClick={() => handleLeftClick()}
								>
									<ChevronLeft />
								</Button>

								<Image
									src={activeSection.logo}
									alt="logo"
									width={200}
									height={100}
								/>

								<Button
									variant={"ghost"}
									size={"icon"}
									onClick={() => handleRightClick()}
								>
									<ChevronRight />
								</Button>
							</div>

							<div className="bg-gradient-to-r from-white via-slate-500 to-white min-h-[1px] w-[50%] px-8" />

							<div className="text-center text-3xl font-semibold font-[Sora] text-slate-900">
								Hardware
							</div>

							<Image
								src={activeSection.hardwareDesktop}
								alt="hardware desktop"
								width={1000}
								height={500}
								className="hidden lg:block"
							/>

							<Image
								src={activeSection.hardwareMobile}
								alt="hardware mobile"
								width={500}
								height={500}
								className="block lg:hidden"
							/>

							{activeSection.software.length > 0 && (
								<>
									<div className="bg-gradient-to-r from-white via-slate-500 to-white min-h-[1px] w-[50%] px-8" />

									<div className="text-center text-3xl font-semibold font-[Sora] text-slate-900">
										Software
									</div>

									<Image
										src={activeSection.software}
										alt="hardware desktop"
										width={500}
										height={500}
									/>
								</>
							)}
						</div>
					) : (
						<div className="flex flex-col gap-10 h-full w-full items-center justify-center">
							<span className="text-center text-3xl font-semibold font-[Sora] text-slate-900">
								Solutions
							</span>

							<div className="bg-gradient-to-r from-white via-slate-500 to-white min-h-[1px] w-[50%] px-8" />

							<Image
								src={"/images/solutions/cnp-desktop.png"}
								alt="hardware desktop"
								width={1000}
								height={500}
								className="hidden lg:block"
							/>

							<Image
								src={"/images/solutions/cnp-mobile.png"}
								alt="hardware mobile"
								width={500}
								height={500}
								className="block lg:hidden"
							/>
						</div>
					)}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default SolutionsPage;
