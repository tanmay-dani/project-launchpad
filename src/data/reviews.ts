import pawanImg from "@/assets/reviewer-pawan.png";
import krishImg from "@/assets/reviewer-krish.png";
import taraImg from "@/assets/reviewer-tara.png";

export type Review = {
  name: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  avatar: string | null;
};

export const reviews: Review[] = [
  {
    name: "Pawan Kulegi",
    rating: 5,
    date: "Feb 20, 2026",
    title: "Had an amazing experience dealing with The Premium Nest",
    text: "I bought Linkedin Premium for 3 months, the seller sent the link first and I paid after I activated the subscription, the transaction was smooth and fast. I am planning to buy more stuff from him soon.",
    avatar: pawanImg,
  },
  {
    name: "Rohan Vora",
    rating: 5,
    date: "Feb 3, 2026",
    title: "Got Adobe Creative Cloud and Canva Pro for very cheap",
    text: "I am a full time video editor, and I was paying ₹1500/- per month for Adobe Creative Cloud. The Premium Nest solved both. I am currently paying only ₹300/- per month and it's worked without any issues for 15+ days. Highly recommend.",
    avatar: null,
  },
  {
    name: "Darshana Gala",
    rating: 5,
    date: "Feb 19, 2026",
    title: "This is a god sent",
    text: "I'm a graphic designer and Adobe Creative Cloud is damn expensive. Got the same thing through this website and lord was it cheap. Friendly seller and smooth process. Didn't take longer than 10 minutes.",
    avatar: null,
  },
  {
    name: "KR",
    rating: 5,
    date: "Feb 19, 2026",
    title: "Trustworthy and smooth experience",
    text: "It was really seamless experience buying from them, and prices are affordable. The experience felt really trustworthy and legit. Will be back soon for more!",
    avatar: null,
  },
  {
    name: "Krish Sinha",
    rating: 5,
    date: "Oct 19, 2025",
    title: "The most reliable service provider since 2018",
    text: "I have been a customer of The Premium Nest since 2018. The pricing is awesome and so much cheaper than the regular market. Highly recommend them, it might sound scammy at first but their service proves otherwise.",
    avatar: krishImg,
  },
  {
    name: "Tara Pandey",
    rating: 5,
    date: "Feb 20, 2026",
    title: "Got Linkedin Career Premium at a reasonable price",
    text: "I am a 3rd year student at Christ and was applying to internships. He provided the link before and took the payment after activation. I have recommended this site to my friends who are starting their job search journey.",
    avatar: taraImg,
  },
  {
    name: "Rishi Patel",
    rating: 5,
    date: "Feb 24, 2026",
    title: "I recently purchased a 12-month LinkedIn Career subscription",
    text: "I recently purchased a 12-month LinkedIn Career subscription from The Premium Nest and had a great experience. The process was smooth, activation was quick, and their communication was clear and professional. Everything was delivered as promised without any issues. Reliable service and competitive pricing make them a trustworthy option for premium digital subscriptions.",
    avatar: null,
  },
];

