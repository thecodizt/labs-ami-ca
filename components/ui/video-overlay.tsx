import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface VideoOverlayProps {
	isVisible: boolean;
	videoPath: string;
	redirectUrl: string;
	onClose: () => void;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
	isVisible,
	videoPath,
	redirectUrl,
	onClose,
}) => {
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement>(null);
	const [showLoader, setShowLoader] = useState(false);
	const [videoEnded, setVideoEnded] = useState(false);

	useEffect(() => {
		if (isVisible && videoRef.current) {
			videoRef.current.play();
		}
	}, [isVisible]);

	useEffect(() => {
		if (videoEnded) {
			onClose();
			setShowLoader(true);
			router.push(redirectUrl);
		}
	}, [videoEnded, onClose, redirectUrl, router]);

	if (!isVisible) return null;

	const handleVideoEnd = () => {
		setVideoEnded(true);
	};

	const handleLoadedData = () => {
		setShowLoader(false);
	};

	return (
		<div className="fixed inset-0 bg-black z-50">
			{showLoader ? (
				<div className="flex items-center justify-center h-screen w-screen bg-white">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-700"></div>
				</div>
			) : (
				<video
					ref={videoRef}
					src={videoPath}
					autoPlay
					playsInline
					muted
					onEnded={handleVideoEnd}
					onLoadedData={handleLoadedData}
					className="w-full h-full object-cover"
					style={{ position: "absolute", top: 0, left: 0 }}
				>
					Your browser does not support the video tag.
				</video>
			)}
		</div>
	);
};

export default VideoOverlay;
