import { useState } from "react";

export const useVideoOverlay = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [videoPath, setVideoPath] = useState("");
	const [redirectUrl, setRedirectUrl] = useState("");

	const showOverlay = (video: string, url: string) => {
		setVideoPath(video);
		setRedirectUrl(url);
		setIsVisible(true);
	};

	const hideOverlay = () => {
		setIsVisible(false);
	};

	return {
		isVisible,
		videoPath,
		redirectUrl,
		showOverlay,
		hideOverlay,
	};
};
