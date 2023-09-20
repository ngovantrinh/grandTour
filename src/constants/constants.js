import tokyo from "assets/images/Tokyo.jpg";
import seoul from "assets/images/seoul.jpg";
import paris from "assets/images/paris.jpg";
import london from "assets/images/london.jpg";
import location from "assets/images/location.png";
import wordService from "assets/images/word-service.png";
import bestPrice from "assets/images/best-price.png";
import imageFooterOne from "assets/images/footerImages/phat_to.jpg";
import imageFooterTwo from "assets/images/footerImages/canh_cut.jpg";
import imageFooterThree from "assets/images/footerImages/bien.jpg";

const headerMenu = [
  {
    title: "home",
    children: [
      { title: "home 1 - Background Image" },
      { title: "home 2 - Youtobe Video" },
      { title: "home 3 - Google Inspired" },
      { title: "home 4 - Travel Site" },
    ],
  },
  {
    title: "tours",
    children: [
      { title: "Tour Classic Fullwidth" },
      { title: "Tour Classic Sidebar" },
      { title: "Online Payment for Booking" },
    ],
  },
  {
    title: "booking",
    children: [
      { title: "Tour Classic 1" },
      { title: "Tour Classic 2" },
      { title: "Tour Classic 3" },
      { title: "Tour Classic 4" },
      { title: "Tour Classic 5" },
      { title: "Tour Classic 6" },
    ],
  },
  {
    title: "destinations",
    children: [
      { title: "Tour Classic 1" },
      { title: "Tour Classic 2" },
      { title: "Tour Classic 3" },
      { title: "Tour Classic 4" },
      { title: "Tour Classic 5" },
      { title: "Tour Classic 6" },
    ],
  },
  {
    title: "blog",
    children: [
      { title: "Tour Classic 1" },
      { title: "Tour Classic 2" },
      { title: "Tour Classic 3" },
      { title: "Tour Classic 4" },
    ],
  },
  {
    title: "shortcodes",
    children: [
      { title: "Tour Classic 1" },
      { title: "Tour Classic 2" },
      { title: "Tour Classic 3" },
      { title: "Tour Classic 4" },
      { title: "Tour Classic 5" },
    ],
  },
  {
    title: "shop",
    children: [
      { title: "Tour Classic 1" },
      { title: "Tour Classic 2" },
      { title: "Tour Classic 3" },
      { title: "Tour Classic 4" },
      { title: "Tour Classic 5" },
      { title: "Tour Classic 6" },
      { title: "Tour Classic 7" },
    ],
  },
];

const normalSearch = [
  {
    data: [
      "january",
      "february",
      "March",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    type: "month",
    placeholder: "any month",
  },
  {
    data: [
      "price low to high",
      "price high to low",
      "sort by name",
      "sort by popularity",
      "sort by review score",
    ],
    type: "arrange",
    placeholder: "sort by date",
  },
];
const advancedSearch = [
  {
    data: [
      "january",
      "february",
      "March",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    type: "month",
    placeholder: "all category",
  },
  {
    data: [
      "price low to high",
      "price high to low",
      "sort by name",
      "sort by popularity",
      "sort by review score",
    ],
    type: "arrange",
    placeholder: "any destinations",
  },
];

const popular = [
  { title: "tokyo", urlImage: tokyo },
  { title: "seoul", urlImage: seoul },
  { title: "paris", urlImage: paris },
  { title: "london", urlImage: london },
];

const bestValueTrips = [
  {
    title: "French Autumn",
    urlImage: tokyo,
    price: "5,000",
    address: "City Tours, Urban",
    review_star: 4,
    time: "5 days",
  },
  {
    title: "seoul",
    urlImage: seoul,
    price: "6,000",
    address: "City Tours, Urban",
    review_star: 4,
    time: "6 days",
  },
  {
    title: "paris",
    urlImage: paris,
    price: "3,000",
    sale_price: "2,500",
    sale: true,
    address: "City Tours, Urban",
    review_star: 4,
    time: "5 days",
  },
];

const reasons = [
  {
    imgUrl: location,
    title: "Handpicked Hotels",
    content:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    imgUrl: wordService,
    title: "World Class Service",
    content:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    imgUrl: bestPrice,
    title: "Best Price Guarantee",
    content:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

const articles = [
  {
    title: "Memorial Day to Someone Told Me to Travel",
    urlImage: tokyo,
    content:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    date: "DECEMBER 10, 2016",
  },
  {
    title: "7 Tips For Nomads On A Budget Trips",
    urlImage: seoul,
    content:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    date: "DECEMBER 10, 2016",
  },
  {
    title: "Taking A Travel Blog Victory Lap",
    urlImage: paris,
    content:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    date: "DECEMBER 10, 2016",
  },
];

const imagesFooter = [
  { id: 1, image: imageFooterOne },
  { id: 2, image: imageFooterTwo },
  { id: 3, image: imageFooterThree },
  { id: 4, image: imageFooterThree },
  { id: 5, image: imageFooterTwo },
  { id: 6, image: imageFooterOne },
];

// const imgAwards = [
//   { id: 1, image: imageAwardsOne },
//   { id: 2, image: imageAwardsTwo },
// ];

export {
  headerMenu,
  normalSearch,
  advancedSearch,
  popular,
  bestValueTrips,
  reasons,
  articles,
  imagesFooter,
  // imgAwards
};
