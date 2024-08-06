//@ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
	year: number;
	event: string;
}

interface TimelineItemProps extends TimelineItem {
	isLeft: boolean;
}

interface TimelineProps {
	data: TimelineItem[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event, isLeft }) => {
	if (isLeft) {
		return (
			<motion.li
				className={`flex justify-center items-center w-full mb-8 ${
					isLeft ? "flex-row-reverse" : ""
				}`}
				initial="hidden"
				whileInView="visible"
				exit="hidden"
				viewport={{ once: false, amount: 0.8 }}
				variants={{
					visible: { opacity: 1, x: 0 },
					hidden: { opacity: 0, x: 50 },
				}}
				transition={{ duration: 0.5 }}
			>
				<div className={`w-[90%] ${!isLeft ? " text-right" : ""}`}>
					<div className="p-4">
						<h3 className="text-3xl font-bold text-GOLD mb-1">
							{year}
						</h3>
						<p className="text-white text-sm lg:text-md">{event}</p>
					</div>
				</div>
				<div className="w-[10%] flex justify-center">
					<div className="w-3 h-3 bg-GOLD shadow-sm rounded-full z-10"></div>
				</div>
				<div className="w-[90%]"></div>
			</motion.li>
		);
	}

	return (
		<motion.li
			className={`flex justify-center items-center w-full mb-8 ${
				isLeft ? "flex-row-reverse" : ""
			}`}
			initial="hidden"
			whileInView="visible"
			exit="hidden"
			viewport={{ once: false, amount: 0.8 }}
			variants={{
				visible: { opacity: 1, x: 0 },
				hidden: { opacity: 0, x: -50 },
			}}
			transition={{ duration: 0.5 }}
		>
			<div className={`w-[90%] ${!isLeft ? " text-right" : ""}`}>
				<div className="p-4">
					<h3 className="text-3xl font-bold text-GOLD mb-1">
						{year}
					</h3>
					<p className="text-white text-sm lg:text-md">{event}</p>
				</div>
			</div>
			<div className="w-[10%] flex justify-center">
				<div className="w-3 h-3 bg-GOLD shadow-sm rounded-full z-10"></div>
			</div>
			<div className="w-[90%]"></div>
		</motion.li>
	);
};

const Timeline: React.FC<TimelineProps> = ({ data }) => {
	return (
		<div className="max-w-5xl mx-auto p-4">
			<ul className="relative list-none p-0">
				<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600 rounded-full" />
				{data.map((item, index) => (
					<TimelineItem
						key={index}
						{...item}
						isLeft={index % 2 === 0}
					/>
				))}
			</ul>
		</div>
	);
};

export const TimelineComponent = Timeline;
