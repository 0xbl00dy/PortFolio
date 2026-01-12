import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import MAC_DPIManager from '../assets/logos/MAC_DPIManager.svg?raw';
import InjexShield from '../assets/logos/InjexShield.svg?raw';
import FuzzPanel from '../assets/logos/FuzzPanel.svg?raw';
import TagTalk from '../assets/logos/TagTalk.svg?raw';

export const projects = [
	{
		title: "LLM Prompt Injection Security",
		techStack: "Python • Flask • PyTorch • Neural Network • Random Forest",
		description: "Security research project analyzing prompt-injection vulnerabilities in large language models. Conducted offensive testing on multiple LLMs and built ML-based detection and sanitization mechanisms. Research paper currently under editorial review.",
		ctaText: "In Progress",
		ctaLink: "https://github.com/0xbl00dy/INJEXHIELD",
		icon: InjexShield
	},
	{
  		title: "FuzzPanel",
 	 	techStack: "Python • PySide6 • Qt • Multi-tool Integration",
 	 	description: "Unified GUI platform integrating diverse security assessment tools for comprehensive network reconnaissance and web application testing. Provides centralized execution, real-time monitoring, and consolidated result analysis for multiple security utilities through an intuitive interface.",
  		ctaText: "View Repo →",
 	 	ctaLink: "https://github.com/0xbl00dy/FuzzPanel",
 	 	icon: FuzzPanel
	},
	{
		title: "Smart Parking Violation System",
		techStack: "Flutter • Dart • Java • NoSQL • FireBase",
		description: "End-to-end mobile application addressing illegal parking conflicts using secure real-time reporting. Implemented complaint workflows, user reporting, and backend logic with focus on data integrity and secure communication.",
		ctaText: "Closed Source",
		ctaLink: "#",
		icon: TagTalk
	},
	{
		title: "HiDPI Display Manager for macOS",
		techStack: "Swift • SwiftUI • IOKit • macOS • osascript",
		description: "Native macOS utility to enable and manage HiDPI (Retina scaling) modes on external monitors. Built with SwiftUI and IOKit, featuring display detection via VendorID/ProductID, custom and preset resolutions, font smoothing controls, and secure execution of privileged display commands through a modern GUI.",
		ctaText: "View Repo →",
		ctaLink: "https://github.com/0xbl00dy/MAC_DPIManager",
		icon: MAC_DPIManager
	}
];
