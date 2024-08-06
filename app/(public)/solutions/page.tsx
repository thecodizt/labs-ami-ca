"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SolutionsPage = () => {
	const [activeTab, setActiveTab] = useState("retail");
	return (
		<>
			<div className="flex flex-col h-screen w-full p-2 gap-2 bg-gradient-to-b from-VIOLET via-GOLD to-white">
				<Header active={"solutions"} />
				<div className="flex flex-col gap-6 h-full w-full items-center justify-center rounded-lg bg-white text-slate-700 shadow-sm p-8">
					<span className="text-4xl font-medium font-[Sora] text-center">
						Our Wide Range of Business Solutions
					</span>
					{/* <span className="text-lg font-thin font-[Sora] text-center">
						Lorem ipsum dolor sit amet, consectetur elit, sed do
						eiusmod tempor incididunt ut labore.
					</span> */}
					<div className="bg-gradient-to-r from-white via-slate-500 to-white min-h-[1px] w-full px-8" />

					<div className="p-1 rounded-full flex gap-1 bg-slate-100">
						<Button
							variant="ghost"
							className={
								"rounded-full font-normal text-sm bg-transparent text-slate-900 " +
								(activeTab === "retail"
									? "bg-slate-900 text-white "
									: "bg-transparent")
							}
							onClick={() => setActiveTab("retail")}
						>
							Retail
						</Button>
						<Button
							variant="ghost"
							className={
								"rounded-full font-normal text-sm bg-transparent text-slate-900 " +
								(activeTab === "restaurant"
									? "bg-slate-900 text-white "
									: "bg-transparent")
							}
							onClick={() => setActiveTab("restaurant")}
						>
							Restaurant
						</Button>
						<Button
							variant="ghost"
							className={
								"rounded-full font-normal text-sm bg-transparent text-slate-900 " +
								(activeTab === "b2b"
									? "bg-slate-900 text-white "
									: "bg-transparent")
							}
							onClick={() => setActiveTab("b2b")}
						>
							B2B
						</Button>
						<Button
							variant="ghost"
							className={
								"rounded-full font-normal text-sm bg-transparent text-slate-900 " +
								(activeTab === "e-commerce"
									? "bg-slate-900 text-white "
									: "bg-transparent")
							}
							onClick={() => setActiveTab("e-commerce")}
						>
							E-Commerce
						</Button>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default SolutionsPage;
