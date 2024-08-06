"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type MoveUpFadeInRenderProp = (inView: boolean) => React.ReactNode;

interface MoveUpFadeInSectionProps {
	children: React.ReactNode | MoveUpFadeInRenderProp;
	className?: string;
	isOnce?: boolean;
	distance?: number; // Distance to move in pixels
	delay?: number; // Delay in seconds
	duration?: number; // Duration in seconds
}

export function MoveUpFadeInSection({
	children,
	className = "",
	isOnce = false,
	distance = 50, // Default move-up distance
	delay = 0, // Default delay (no delay)
	duration = 0.5, // Default duration
}: MoveUpFadeInSectionProps) {
	const [ref, inView] = useInView({ threshold: 0.1 });
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (inView && isOnce && !hasAnimated) {
			setHasAnimated(true);
		}
	}, [inView, isOnce, hasAnimated]);

	const shouldAnimate = isOnce ? inView || hasAnimated : inView;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: distance }}
			animate={{
				opacity: shouldAnimate ? 1 : 0,
				y: shouldAnimate ? 0 : distance,
			}}
			transition={{
				duration: duration,
				ease: "easeOut",
				delay: delay, // Add the delay here
			}}
			className={className}
		>
			{typeof children === "function"
				? (children as MoveUpFadeInRenderProp)(shouldAnimate)
				: children}
		</motion.div>
	);
}
