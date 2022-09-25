import { Facebook, Instagram, Twitter } from "@assets/svgs";
export const socialMediaChannel = (status) => {
  switch (status) {
    case "instagrambusiness":
      return <Instagram />;
    case "twitter":
      return <Twitter />;
    case "facebook":
      return <Facebook />;
  }
};
export const colorOfStatus = (channel) => {
  switch (channel) {
    case 0:
      return "bg-yellow";
    case 1:
      return "bg-green";
    case 2:
      return "bg-blue";
    case 3:
      return "bg-grey";
    case 4:
      return "bg-mainRed";
  }
};
export const formattedDate = (date) => {
  const formatted = new Date(date);
  const monthIndex = formatted.getMonth();
  const monthName = months[monthIndex];
  const day = formatted.getDate();
  const year = formatted.getFullYear();
  const hours = formatted.getHours();
  const minutes = formatted.getMinutes();

  return `${day} ${monthName} ${year} - ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
