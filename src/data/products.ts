export interface ProductVariant {
  label: string;
  price: string;
  originalPrice: string;
  duration?: string;
}

export interface Product {
  id: number;
  name: string;
  emoji: string;
  logo: string;
  tagline: string;
  price: string;
  originalPrice: string;
  duration: string;
  features: string[];
  category: "design" | "career" | "streaming" | "ai" | "learning" | "security" | "productivity" | "wellness" | "adult";
  paymentNote?: string;
  variants?: ProductVariant[];
}

import canvaLogo from "@/assets/logos/canva.svg";
import linkedinLogo from "@/assets/logos/linkedin.png";
import primevideoLogo from "@/assets/logos/primevideo.png";
import youtubeLogo from "@/assets/logos/youtube.svg";
import chatgptLogo from "@/assets/logos/chatgpt.png";
import courseraLogo from "@/assets/logos/coursera.png";
import hotstarLogo from "@/assets/logos/hotstar.png";
import zee5Logo from "@/assets/logos/zee5.png";
import nordvpnLogo from "@/assets/logos/nordvpn.png";
import sonylivLogo from "@/assets/logos/sonyliv.png";
import ilovepdfLogo from "@/assets/logos/ilovepdf.svg";
import adobeLogo from "@/assets/logos/adobe.png";
import geminiLogo from "@/assets/logos/gemini.png";
import tradingviewLogo from "@/assets/logos/tradingview.png";
import figmaLogo from "@/assets/logos/figma.png";
import calmLogo from "@/assets/logos/calm.png";
import headspaceLogo from "@/assets/logos/headspace.png";
import cultfitLogo from "@/assets/logos/cultfit.png";
import onlyfansLogo from "@/assets/logos/onlyfans.png";
import brazzersLogo from "@/assets/logos/brazzers.png";
import pornhubLogo from "@/assets/logos/pornhub.png";
import mofosLogo from "@/assets/logos/mofos.png";
import realitykingsLogo from "@/assets/logos/realitykings.png";
import myfitnesspalLogo from "@/assets/logos/myfitnesspal.png";
import surfsharkLogo from "@/assets/logos/surfshark.png";
import onepasswordLogo from "@/assets/logos/1password.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Canva Pro",
    emoji: "🎨",
    logo: canvaLogo,
    tagline: "Stop overpaying for basic design tools.",
    price: "₹199",
    originalPrice: "₹3,999/yr",
    duration: "1 Year",
    features: [
      "Full Pro Access for 12 Months",
      "Premium Templates, Fonts & Stock Photos",
      "Background Remover & Magic Resize",
      "Upgraded on your own personal email",
    ],
    category: "design",
    paymentNote: "💳 Payment after activation",
  },
  {
    id: 2,
    name: "LinkedIn Career",
    emoji: "💼",
    logo: linkedinLogo,
    tagline: "The ultimate unfair advantage for your career.",
    price: "₹399",
    originalPrice: "₹2,500+/mo",
    duration: "3 Months",
    features: [
      "5 InMail credits/month to message recruiters directly",
      "See everyone who viewed your profile in the last 365 days",
      "AI-powered resume & profile optimization tools",
      "Full access to 21,000+ LinkedIn Learning courses",
      "Compare yourself against other applicants on any job",
    ],
    category: "career",
    paymentNote: "💳 Payment after activation",
  },
  {
    id: 3,
    name: "LinkedIn Sales Navigator",
    emoji: "🧭",
    logo: linkedinLogo,
    tagline: "The ultimate B2B lead generation tool.",
    price: "₹499",
    originalPrice: "₹15,000+",
    duration: "2 Months",
    features: [
      "Full 60-Day Access to Sales Nav Core",
      "Advanced Lead & Account Search Filters",
      "50 InMail Messages per month",
      "Save and track high-value leads",
    ],
    category: "career",
    paymentNote: "💳 Payment after activation",
  },
  {
    id: 4,
    name: "Prime Video",
    emoji: "🍿",
    logo: primevideoLogo,
    tagline: "Binge your favorite shows without breaking the bank.",
    price: "₹249",
    originalPrice: "₹1,499/yr",
    duration: "6 Months",
    features: [
      "Full HD / 4K Supported",
      "Private Profile & PIN protected",
      "Works on Smart TV, Mobile & Laptop",
      "Zero interruptions, smooth streaming",
    ],
    category: "streaming",
  },
  {
    id: 5,
    name: "YouTube Premium",
    emoji: "▶️",
    logo: youtubeLogo,
    tagline: "Skip the annoying ads and play music in the background.",
    price: "₹89",
    originalPrice: "₹149/mo",
    duration: "1 Month",
    features: [
      "100% Ad-Free YouTube",
      "Background Play on all apps",
      "YouTube Music Premium Included",
      "Download videos for offline viewing",
    ],
    category: "streaming",
    variants: [
      { label: "1 Month (Invite)", price: "₹89", originalPrice: "₹149/mo", duration: "1 Month" },
      { label: "3 Months", price: "₹299", originalPrice: "₹449", duration: "3 Months" },
      { label: "6 Months", price: "₹549", originalPrice: "₹894", duration: "6 Months" },
      { label: "12 Months", price: "₹999", originalPrice: "₹1,788", duration: "12 Months" },
    ],
    paymentNote: "💳 Payment after activation on all plans",
  },
  {
    id: 6,
    name: "ChatGPT Plus",
    emoji: "🤖",
    logo: chatgptLogo,
    tagline: "Unlock the world's smartest AI at a fraction of the price.",
    price: "₹299",
    originalPrice: "₹1,650/mo",
    duration: "1 Month",
    features: [
      "Full access to GPT-5 with advanced reasoning & analysis",
      "DALL·E image generation & vision capabilities",
      "Browse the web, run code & analyze uploaded files",
      "Higher message limits & priority access during peak hours",
      "Custom GPTs and access to the GPT Store",
    ],
    category: "ai",
  },
  {
    id: 7,
    name: "Coursera Plus",
    emoji: "🎓",
    logo: courseraLogo,
    tagline: "Unlimited access to 7,000+ world-class courses.",
    price: "₹999",
    originalPrice: "₹4,000+/yr",
    duration: "1 Year",
    features: [
      "Learn from Google, Meta, IBM & more",
      "Earn unlimited professional certificates",
      "Access applied projects & hands-on labs",
      "Upgrade on your own personal account",
    ],
    category: "learning",
  },
  {
    id: 8,
    name: "Disney+ Hotstar Super",
    emoji: "🏏",
    logo: hotstarLogo,
    tagline: "Live sports, blockbuster movies, and Disney classics.",
    price: "₹149",
    originalPrice: "₹299/mo",
    duration: "1 Month",
    features: [
      "Access all Premium content & Live Sports",
      "Full HD (1080p) Streaming",
      "Login on up to 5 Devices",
      "Ad-free entertainment",
    ],
    category: "streaming",
  },
  {
    id: 9,
    name: "Zee5 Premium",
    emoji: "🎬",
    logo: zee5Logo,
    tagline: "The ultimate hub for regional blockbusters & originals.",
    price: "₹499",
    originalPrice: "₹999/yr",
    duration: "1 Year",
    features: [
      "12 Months of uninterrupted access",
      "4500+ Movies & 200+ Originals",
      "Ad-free streaming experience",
      "Highest video and audio quality",
    ],
    category: "streaming",
  },
  {
    id: 10,
    name: "NordVPN Premium",
    emoji: "🛡️",
    logo: nordvpnLogo,
    tagline: "Military-grade encryption to protect your digital life.",
    price: "₹99",
    originalPrice: "₹1,000+",
    duration: "1 Month",
    features: [
      "High-speed servers in 60+ countries",
      "Unblock geo-restricted content",
      "Strict no-logs policy for total privacy",
      "Secure your data on public Wi-Fi",
    ],
    category: "security",
    variants: [
      { label: "1 Month (Single Device)", price: "₹99", originalPrice: "₹1,000+", duration: "1 Month" },
      { label: "3 Months (Private Email)", price: "₹399", originalPrice: "₹3,000+", duration: "3 Months" },
    ],
  },
  {
    id: 11,
    name: "SonyLIV Premium",
    emoji: "🏏",
    logo: sonylivLogo,
    tagline: "The ultimate hub for live sports and premium originals.",
    price: "₹149",
    originalPrice: "₹299/mo",
    duration: "1 Month",
    features: [
      "Full access to Live Sports & WWE Network",
      "Ad-free Premium Originals and Movies",
      "Full HD (1080p) streaming quality",
      "Login on your personal device",
    ],
    category: "streaming",
  },
  {
    id: 12,
    name: "iLovePDF Premium",
    emoji: "📄",
    logo: ilovepdfLogo,
    tagline: "The ultimate document productivity tool for your workflow.",
    price: "₹799",
    originalPrice: "₹3,000+/yr",
    duration: "1 Year",
    features: [
      "12 Months of unlimited PDF processing",
      "Advanced OCR & E-Sign features unlocked",
      "Zero file size limits or annoying ads",
      "Upgraded directly on your personal email",
    ],
    category: "productivity",
  },
  {
    id: 13,
    name: "Adobe Creative Cloud",
    emoji: "🎨",
    logo: adobeLogo,
    tagline: "The industry standard for creative design and video editing.",
    price: "₹199",
    originalPrice: "₹5,000+/mo",
    duration: "1 Month",
    variants: [
      { label: "1 Month", price: "₹199", originalPrice: "₹5,000+/mo", duration: "1 Month" },
      { label: "4 Months", price: "₹599", originalPrice: "₹20,000+", duration: "4 Months" },
    ],
    features: [
      "All 20+ Pro Apps (Photoshop, Premiere, etc.)",
      "100GB of Cloud Storage included",
      "Access to latest generative AI features",
      "Upgraded directly on your personal email",
    ],
    category: "design",
    paymentNote: "💳 Payment after activation",
  },
  {
    id: 14,
    name: "Gemini Advanced + 2TB",
    emoji: "✨",
    logo: geminiLogo,
    tagline: "Google's most powerful AI with video generation and 2TB storage.",
    price: "₹599",
    originalPrice: "₹6,500+/yr",
    duration: "1 Year",
    features: [
      "Gemini 2.5 Pro with 1M token context window",
      "Veo video generation & Imagen image creation",
      "2TB Google One Cloud Storage included",
      "Deep Research & NotebookLM Plus access",
      "AI integration across Gmail, Docs, Sheets & Drive",
    ],
    category: "ai",
  },
  {
    id: 15,
    name: "TradingView Premium",
    emoji: "📈",
    logo: tradingviewLogo,
    tagline: "The ultimate charting platform for serious day traders and investors.",
    price: "₹399",
    originalPrice: "₹3,000+/yr",
    duration: "1 Month",
    features: [
      "25 Indicators per chart & 8 Charts in one layout",
      "Volume Profile & Custom second-based timeframes",
      "Ad-free experience with Ultra-Fast Market Data",
      "Up to 400 active price alerts & unlimited layouts",
    ],
    category: "productivity",
  },
  {
    id: 16,
    name: "Figma Professional",
    emoji: "🎨",
    logo: figmaLogo,
    tagline: "The ultimate collaborative UI/UX design and prototyping platform.",
    price: "₹1,299",
    originalPrice: "₹5,000+/yr",
    duration: "2 Years",
    features: [
      "Unlimited active projects and files",
      "Unlimited version history & shared team libraries",
      "Dev Mode unlocked for seamless developer handoff",
      "Upgraded directly on your own personal email",
    ],
    category: "design",
  },
  {
    id: 17,
    name: "Calm Premium",
    emoji: "🧘",
    logo: calmLogo,
    tagline: "The #1 app for sleep, meditation, and relaxation.",
    price: "₹699",
    originalPrice: "₹3,500+/yr",
    duration: "1 Year",
    features: [
      "Unlimited Daily Calm meditations",
      "Hundreds of celebrity-narrated Sleep Stories",
      "Exclusive Masterclasses by world experts",
      "Curated music for focus and deep sleep",
    ],
    category: "wellness",
  },
  {
    id: 18,
    name: "Headspace Plus",
    emoji: "🟠",
    logo: headspaceLogo,
    tagline: "Your daily guide to mindfulness, sleep, and focus.",
    price: "₹499",
    originalPrice: "₹2,500+",
    duration: "4 Months",
    features: [
      "Full access to 'The Wake Up' daily stories",
      "Move Mode workouts and focus music playlists",
      "Sleepcasts and guided wind-downs for better rest",
      "SOS sessions for moments of panic or stress",
    ],
    category: "wellness",
  },
  {
    id: 19,
    name: "Cult.fit Elite",
    emoji: "💪",
    logo: cultfitLogo,
    tagline: "The ultimate fitness membership for gym & group classes.",
    price: "₹1,700",
    originalPrice: "₹4,000+/mo",
    duration: "1 Month",
    features: [
      "Unlimited access to any Cult Elite gym in your city",
      "All group classes: Dance, Yoga, Boxing, HRX & S&C",
      "City-specific activation for your location",
      "At-home workouts and progress tracking",
    ],
    category: "wellness",
  },
  {
    id: 20,
    name: "OnlyFans Accounts",
    emoji: "🔒",
    logo: onlyfansLogo,
    tagline: "Pre-loaded OnlyFans accounts ready to use instantly.",
    price: "₹1,499",
    originalPrice: "₹8,499",
    duration: "6 Hours Warranty",
    features: [
      "Pre-loaded balance ready to spend instantly",
      "Subscribe to any creator and view full content",
      "Unlock private chats and video calls",
      "Tip creators for exclusive personalized content",
      "Works on all devices — mobile, tablet & desktop",
    ],
    category: "adult",
    variants: [
      { label: "$100 Loaded", price: "₹1,499", originalPrice: "₹8,499", duration: "3 Hours Warranty" },
      { label: "$200 Loaded", price: "₹2,999", originalPrice: "₹16,999", duration: "6 Hours Warranty" },
    ],
  },
  {
    id: 21,
    name: "Brazzers Premium",
    emoji: "🔥",
    logo: brazzersLogo,
    tagline: "Premium access to one of the world's top adult streaming platforms.",
    price: "₹299",
    originalPrice: "₹1,999/mo",
    duration: "1 Month",
    features: [
      "Unlimited streaming of the full exclusive HD library",
      "New content and fresh releases added daily",
      "Wide variety of genres and categories",
      "HD streaming with smooth, buffer-free playback",
      "Private login on your personal device",
    ],
    category: "adult",
  },
  {
    id: 22,
    name: "Pornhub Premium",
    emoji: "🔥",
    logo: pornhubLogo,
    tagline: "Premium access to the world's largest adult streaming platform.",
    price: "₹299",
    originalPrice: "₹1,999/mo",
    duration: "1 Month",
    features: [
      "100% Ad-Free — no pre-roll, mid-roll, or banner ads",
      "HD & 4K streaming with priority bandwidth",
      "Exclusive premium-only videos and scenes",
      "Full category library & all performers unlocked",
      "Download content for offline viewing",
    ],
    category: "adult",
  },
  {
    id: 23,
    name: "Mofos Premium",
    emoji: "🔥",
    logo: mofosLogo,
    tagline: "Full network access to one of the biggest amateur adult platforms.",
    price: "₹299",
    originalPrice: "₹1,999/mo",
    duration: "1 Month",
    features: [
      "Multi-site network access under one membership",
      "Full-length uncut premium scenes — no previews",
      "HD streaming up to 1080p with download option",
      "Daily new releases across series and categories",
      "Private secure login on all devices",
    ],
    category: "adult",
  },
  {
    id: 24,
    name: "Reality Kings Premium",
    emoji: "🔥",
    logo: realitykingsLogo,
    tagline: "Premium studio-produced content from the Reality Kings network.",
    price: "₹299",
    originalPrice: "₹1,999/mo",
    duration: "1 Month",
    features: [
      "Full network access to all Reality Kings channels",
      "Exclusive studio-produced HD scenes",
      "Unlimited streaming with no daily caps",
      "Download content for offline viewing",
      "Advanced search, filters & cross-device support",
    ],
    category: "adult",
  },
  {
    id: 25,
    name: "MyFitnessPal Premium",
    emoji: "🍎",
    logo: myfitnesspalLogo,
    tagline: "The world's #1 calorie counter and nutrition tracker.",
    price: "₹1,000",
    originalPrice: "₹6,799/yr",
    duration: "1 Year",
    features: [
      "Ad-free food logging with barcode & meal scan",
      "Custom macros, calories & nutrition goals",
      "Intermittent fasting tracker built-in",
      "Voice logging & multi-day logging",
      "Downloadable progress reports & insights",
    ],
    category: "wellness",
  },
  {
    id: 26,
    name: "Surfshark VPN",
    emoji: "🦈",
    logo: surfsharkLogo,
    tagline: "Fast, secure VPN with 4,500+ servers in 100 countries.",
    price: "₹99",
    originalPrice: "₹1,000+/mo",
    duration: "1 Month",
    features: [
      "Single device login — secure your primary device",
      "4,500+ servers across 100 countries",
      "Industry-leading AES-256-GCM encryption",
      "Strict no-logs policy for total privacy",
      "CleanWeb ad & malware blocker included",
    ],
    category: "security",
  },
  {
    id: 27,
    name: "1Password Premium",
    emoji: "🔑",
    logo: onepasswordLogo,
    tagline: "The world's most trusted password manager for all your devices.",
    price: "₹999",
    originalPrice: "₹2,999/yr",
    duration: "1 Year",
    features: [
      "Unlimited passwords, cards & secure notes",
      "Autofill across all browsers and devices",
      "Watchtower alerts for breached & weak passwords",
      "Two-factor authentication & passkey support",
      "1GB encrypted document storage",
    ],
    category: "security",
  },
];
