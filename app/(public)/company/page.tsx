import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MoveUpFadeInSection } from "@/components/ui/move-up-fade-in-section";
import { TimelineComponent } from "@/components/ui/timeline";
import Image from "next/image";

const CompanyPage = () => {
	const timelineData = [
		{ year: 2010, event: "Company establishment" },
		{
			year: 2010,
			event: "Registered as retail ISO with First Data with Wells Fargo bank as sponsoring bank",
		},
		{
			year: 2011,
			event: "Executed agent agreements with Petroleum Card services & Payment Logistics",
		},
		{
			year: 2012,
			event: "AMI decided to spread it&apos;s wings globally and launched in India",
		},
		{
			year: 2013,
			event: "AMI added ATM services under it&apos;s umbrella through Switch Commerce Partnership",
		},
		{
			year: 2014,
			event: "Signed a agent level agreement with ECS, iPayments to board high risk verticals",
		},
		{
			year: 2015,
			event: "Acheived a milestone of $50M / month in processing volume",
		},
		{
			year: 2018,
			event: "Registered as an retail ISO with NPC Vantiv Worldpay with Fifth Third Bank as sponsoring bank",
		},
		{
			year: 2020,
			event: "AMI expanded its presence in North America with expansion of operation into Canada ",
		},
		{
			year: 2021,
			event: "Registered as a retail ISO with Elavon with US Bank as sponsoring bank",
		},
	];
	return (
		<div className="flex gap-2 p-2 bg-gradient-to-b from-BLUE via-GOLD to-white scrollbar-hide flex-col">
			<Header active={"company"} />
			<div className="rounded-lg h-full w-full bg-PURPLE text-white shadow-sm flex flex-col p-4 items-center">
				<MoveUpFadeInSection className="bg-gradient-to-b from-slate-800 to-slate-600 text-white text-2xl font-bold font-[Sora] text-center p-4 rounded-lg">
					Our Journey
				</MoveUpFadeInSection>
				<TimelineComponent data={timelineData} />

				<div className="flex flex-col gap-4 p-8 w-full items-center">
					<div className="w-[90%] h-[2px] bg-gradient-to-r from-slate-700 via-slate-300 to-slate-700 rounded-full"></div>

					<div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 p-8">
						<div className="bg-slate-800 rounded-lg shadow-sm flex flex-col gap-8 p-8 h-full w-full items-center justify-between">
							<Image 
								src={"/images/company/person1..png"}
								alt=""
								width={700}
								height={500}
								className="object-contain"
							/>

							<div className="text-2xl font-[Sora] text-white font">
								Jumesh Walia
							</div>
						</div>
					</div>
				</div>

			</div>
			<Footer />
		</div>
	);
};

export default CompanyPage;
