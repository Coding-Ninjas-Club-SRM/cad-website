import react from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div
      className={`${styles.bgimg} flex flex-col text-[#f5d7e3] p-10 text-xl md:h-[138vh] xl:h-[124vh] h-[210vh]`}>
      <div className="flex flex-col relative top-28 font-[power] items-center justify-center text-center space-y-2">
        <span className="text-5xl cursor-default">
          Back to the future to do
        </span>
        <span className="text-5xl text-center cursor-default">
          something still to be seen.
        </span>
        <p className="pt-3 font-sans border-b-2 border-red-300 hover:border-[#2de2e6] hover:text-[#2de2e6]">
          <a
            href="codingninjasrm@srmist.edu.in"
            title="personal email">
            cnqueries2k23@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center relative top-52 sm:left-10 sm:space-x-10 space-y-8 sm:space-y-0">
        <div className="border-[#f5d7e3] border-x-2 border-t-2 w-[80%] md:w-[300px] h-[300px]">
          <ul className={`font-[vcr-osd] space-y-3 ${styles.grad}`}>
            <li className="bg-[#f5d7e3] text-black w-full pl-6 text-base h-[20px] tracking-wider">
              SOCIALS
            </li>
            <li className="hover:bg-[#f5d7e3] hover:text-black text-[#f5d7e3] w-full pl-6 text-base h-[20px] tracking-wide">
              <a
                href="https://chat.whatsapp.com/Fqtm4bUzzLh6ABbKtEcDEP"
                target="new">
                WHATSAPP
              </a>
            </li>
            <li className="hover:bg-[#f5d7e3]  hover:text-black text-[#f5d7e3] w-full pl-6 text-base h-[20px] tracking-wide">
              <a
                href="https://www.linkedin.com/company/coding-ninjas-club-srm/mycompany/"
                target="new">
                LINKEDIN
              </a>
            </li>
          </ul>
        </div>
        <div className="border-[#f5d7e3] border-x-2 border-t-2 w-[80%] sm:w-[300px] h-[300px]">
          <ul className={`font-[vcr-osd] space-y-3 ${styles.grad}`}>
            <li className="bg-[#f5d7e3] text-black w-full pl-6 text-base h-[20px] tracking-wider">
              PAGES
            </li>
            <li className="hover:bg-[#f5d7e3] hover:text-black text-[#f5d7e3] w-full pl-6 text-base h-[20px] tracking-wide">
              ABOUT
            </li>
            <li className="hover:bg-[#f5d7e3] hover:text-black  text-[#f5d7e3] w-full pl-6 text-base h-[20px] tracking-wide">
              FAQ
            </li>
            <li className="hover:bg-[#f5d7e3]  hover:text-black text-[#f5d7e3] w-full pl-6 text-base h-[20px] tracking-wide">
              TRACKS
            </li>
          </ul>
        </div>
        <div className="flex flex-row flex-wrap relative top-10 lg1195:top-0 sm:-left-16 lg1195:left-0">
          <div className="font-[vcr-ocd] sm:space-x-40 text-sm">
            <p className="sm:ml-32">Created by:</p>
            <p>Coding Ninjas SRM</p>
            <p>SRM Kattankulathur</p>
            <p>603203</p>
          </div>
          <div className="font-[vcr-ocd] sm:space-x-40 text-sm mobile:mt-0 -mt-10">
            <p></p>
            <p className="sm:ml-56 ml-40">Copyright © 2024</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center relative top-72 text-xs font-[vcr-ocd] tracking-widest">
        <p>
          THE &nbsp;YEAR &nbsp;IS &nbsp;
          <span className="font-2xl text-pink-600">2024</span>
          &nbsp;.
        </p>
        <p>IT &nbsp;IS &nbsp;THE&nbsp; FUTURE&nbsp;.</p>
      </div>
    </div>
  );
}
export default Footer;
