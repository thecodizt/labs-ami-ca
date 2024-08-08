"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Avatar, AvatarImage } from "./ui/avatar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";
import { useVideoOverlay } from "../hooks/useVideoOverlay";
import VideoOverlay from "./ui/video-overlay";

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

const countries = [
	{
		name: "United States",
		href: "https://www.americanmerchantsinc.com/",
		image: "/images/countries/united-states.png",
		desktopvideo: "/videos/three-stops.mp4",
		mobilevideo: "/videos/three-stops-mobile.mp4",
	},
	{
		name: "Canada",
		href: "https://www.americanmerchantsinc.com/",
		image: "/images/countries/canada.png",
		desktopvideo: "/videos/to-canada.mp4",
		mobilevideo: "/videos/to-canada-mobile.mp4",
	},

	{
		name: "India",
		href: "https://amimerchants.in/",
		image: "/images/countries/india.png",
		desktopvideo: "/videos/to-india.mp4",
		mobilevideo: "/videos/to-india-mobile.mp4",
	},
];

const Header = ({
	variant = "light",
	active = null,
}: {
	variant?: "light" | "dark";
	active?: string | null;
	showOverlay?: (video: string, url: string) => void;
}) => {
	const router = useRouter();
	const [selectedCountry, setSelectedCountry] = useState<any>(countries[0]);
	const [isSelectedCountry, setIsSelectedCountry] = useState(false);

	const { isVisible, videoPath, redirectUrl, showOverlay, hideOverlay } =
		useVideoOverlay();

	return (
		<>
			<header className="bg-gradient-to-r from-BLUE to-GOLD p-[2px] rounded-[10px] shadow-md">
				<div
					className={
						"h-full w-full flex items-center justify-between p-4 rounded-[8px]" +
						(variant === "dark"
							? " bg-PURPLE text-slate-300"
							: " bg-white text-slate-600")
					}
				>
					<div className="hidden lg:block">
						<Image
							src={"/logos/blue.svg"}
							alt="AMI"
							width={100}
							height={40}
							onClick={() => router.push("/")}
							className="cursor-pointer hover:transform hover:scale-105 transition-transform"
						/>
					</div>

					<div className="block lg:hidden">
						<Image
							src={"/logos/blue.svg"}
							alt="AMI"
							width={60}
							height={10}
							onClick={() => router.push("/")}
							className="cursor-pointer hover:transform hover:scale-105 transition-transform"
						/>
					</div>

					<div className="hidden lg:flex items-center justify-between gap-[100px] px-[100px]">
						<Button
							variant="ghost"
							onClick={() => router.push("/about")}
							className={
								" rounded-full p-[2px] hover:shadow-sm text-lg" +
								(active === "about"
									? " bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent"
									: "")
							}
						>
							About Us
						</Button>

						<Button
							variant="ghost"
							onClick={() => router.push("/solutions")}
							className={
								" rounded-full p-[2px] hover:shadow-sm text-lg" +
								(active === "solutions"
									? " bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent"
									: "")
							}
						>
							Solutions
						</Button>

						{/* <div className="flex gap-4 items-center">
							{isSelectedCountry && (
								<>
									<div className="bg-gradient-to-r from-GOLD to-BLUE rounded-full p-[2px] hover:shadow-sm">
										<Avatar>
											<AvatarImage
												src={selectedCountry.image}
												alt={selectedCountry.name}
											/>
										</Avatar>
									</div>
									<div>{selectedCountry.name}</div>
								</>
							)}
							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center gap-2">
									<span>Choose a country</span>{" "}
									<ChevronDownIcon className="h-4 w-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>
										Select Country
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									{countries.map((country, index) => (
										<DropdownMenuItem
											key={index}
											onSelect={(e) => e.preventDefault()}
										>
											<div
												className="flex items-center gap-2 p-4 hover:bg-muted w-full cursor-pointer"
												onClick={() => {
													setSelectedCountry(country);
													// showOverlay(
													// 	country.desktopvideo,
													// 	country.href
													// );
													router.push(country.href);
												}}
											>
												<Avatar>
													<AvatarImage
														src={country.image}
														alt={country.name}
													/>
												</Avatar>
												<span>{country.name}</span>
											</div>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</div> */}
					</div>

					<div className="block lg:hidden">
						<Drawer direction="right">
							<DrawerTrigger>
								<Button variant="ghost" size={"icon"}>
									<MenuIcon />
								</Button>
							</DrawerTrigger>
							<DrawerContent className="max-w-[50vw] h-screen ml-auto flex flex-col items-center justify-center">
								<motion.ul
									className="flex flex-col gap-2 p-6 w-full"
									variants={container}
									initial="hidden"
									animate="visible"
								>
									<motion.li
										className="text-sm w-full flex items-center justify-center text-center py-4 gap-4"
										variants={item}
									>
										<Button
											variant="ghost"
											onClick={() =>
												router.push("/about")
											}
											className={
												" rounded-full p-[2px] hover:shadow-sm text-lg" +
												(active === "about"
													? " bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent"
													: "")
											}
										>
											About Us
										</Button>
									</motion.li>
									<motion.li
										className="text-sm w-full flex items-center justify-center text-center py-4 gap-4"
										variants={item}
									>
										<Button
											variant="ghost"
											onClick={() =>
												router.push("/solutions")
											}
											className={
												" rounded-full p-[2px] hover:shadow-sm text-lg" +
												(active === "solutions"
													? " bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent"
													: "")
											}
										>
											Solutions
										</Button>
									</motion.li>
									{/* <motion.li
										className="text-sm w-full text-center py-4"
										variants={item}
									>
										Choose a country
									</motion.li>
									{countries
										.map((country, index) => (
											<motion.li
												key={index}
												className="item"
												variants={item}
											>
												<div
													className="flex items-center gap-2 p-4 hover:bg-muted w-full cursor-pointer"
													onClick={() => {
														setSelectedCountry(
															country
														);
														// showOverlay(
														// 	country.mobilevideo,
														// 	country.href
														// );
														router.push(country.href);
													}}
												>
													<Avatar>
														<AvatarImage
															src={country.image}
															alt={country.name}
														/>
													</Avatar>
													<span>{country.name}</span>
												</div>
											</motion.li>
										))} */}
								</motion.ul>
							</DrawerContent>
						</Drawer>
					</div>
				</div>
			</header>
			<VideoOverlay
				isVisible={isVisible}
				videoPath={videoPath}
				redirectUrl={redirectUrl}
				onClose={hideOverlay}
			/>
		</>
	);
};

export { Header };
