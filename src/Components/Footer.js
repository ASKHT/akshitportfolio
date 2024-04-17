import React from "react";
function Footer() {
  return (
    <footer className="container fixed bottom-0   text-white h-[4.5rem] bg-[#0E1327] w-full">
      <p className="text-xs text-center text-white dark-content dark:text-light-content w-full mt-5 ">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Akshit Sharma
        </a>{" "}
      
      </p>
    </footer>
  );
}
export default Footer;
