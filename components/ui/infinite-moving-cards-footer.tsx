"use client";

import { cn } from "@/lib/utils";
import test from "node:test";
import React, { useEffect, useState } from "react";

const countries = [
	{
		country: "Canada",
		address:
			"AMI Merchants Services Inc 13841 Harper Road Surrey, BC Canada V3R 5L5",
		addressLine1: "AMI Merchants Services Inc",
		addressLine2: "13841 Harper Road Surrey",
		addressLine3: "BC Canada V3R 5L5",
	},
	{
		country: "United States",
		address:
			"American Merchants Inc 2219 W Olive Ave #106 Burbank, CA USA 91506",
		addressLine1: "American Merchants Inc",
		addressLine2: "2219 W Olive Ave #106",
		addressLine3: "Burbank, CA USA 91506",
	},
	{
		country: "India",
		address:
			"AMI Merchant Services Pvt Ltd Suite 120 Edmonton Mall The Bristol, Gurgaon, India",
		addressLine1: "AMI Merchant Services Pvt Ltd",
		addressLine2: "Suite 120 Edmonton Mall",
		addressLine3: "The Bristol, Gurgaon, India",
	},
];

export const InfiniteMovingCardsFooter = ({
	items = countries,
	direction = "right",
	speed = "normal",
	pauseOnHover = true,
	className,
}: {
	items?: {
		country: string;
		address: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s"
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s"
				);
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item: any, idx: number) => (
					<li
						className="w-[200px] lg:w-[400px] p-6"
						key={item.country}
					>
						<div className="flex flex-col gap-2">
							<span className="text-xl font-bold bg-gradient-to-r from-BLUE to-GOLD bg-clip-text text-transparent">
								{item.country}
							</span>
							<span className="text-sm text-gray-100 font-thin">
								{item.addressLine1}
								<br />
								{item.addressLine2}
								<br />
								{item.addressLine3}
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
