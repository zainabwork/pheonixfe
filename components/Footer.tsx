
import { Footer } from "flowbite-react";
import { BsTwitterX, BsTelegram, BsLinkedin, BsDiscord, BsMedium,BsInstagram } from "react-icons/bs";
import { GlobeIcon, PheonixIcon } from "./Svgs";

export default function FooterComp() {
  const footerData = [
    { title: "Ecosystem", links: ["Trade", "Earn", "Game", "Tokenomics"] },
    { title: "Business", links: ["Farms & Syrup Pools", "IFO", "NFT Marketplace"] },
    { title: "Developers", links: ["Contributing", "Github", "Bug Bounty"] },
    { title: "Support", links: ["Contact", "Troubleshooting", "Documentation"] },
    { title: "About", links: ["Terms of Services", "Blog", "Brand Assets"] },
  ];
  const socialMediaIcons = [BsTwitterX,BsTelegram,BsLinkedin,BsDiscord,BsMedium,BsInstagram]
  return (
    <Footer container className="bg-transparent">
      <div className="w-full">
        <div className="sm:grid w-full justify-between flex flex-wrap sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src='./HomeImgs/logo.png'
              alt="Pheonix Logo"
              name=""
            />
            <p className="my-2 text-xs">Join Everyone's Favorite DEX Now!</p>
            <div className="sm:mt-4 flex space-x-6  text-white my-5">
              {socialMediaIcons.map((icon)=>(
                <Footer.Icon href="#" className="text-white" icon={icon} />
              ))}
            
          </div>
          </div>
          <div className="grid xl:flex xl:flex-wrap sm:gap-8 mt-4 grid-cols-5 gap-6">
        
             {footerData.map((section) => (
              <div key={section.title}>
              
              <Footer.Title title={section.title} className="text-white" />
              <Footer.LinkGroup col>
                {section.links.map((link) => (
                  <Footer.Link key={link} href="#">{link}</Footer.Link>
                ))}
                </Footer.LinkGroup>
              </div>
              ))}
            
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-wrap items-center justify-between">
          <Footer.Copyright href="#" by="PhonixSwap" year={2024} />
          <div className="sm:mt-4 flex flex-wrap gap-2 space-x-6 mt-0 justify-center sm:justify-normal">
            <button className="button bg-white text-black">White Paper</button>
            <p className="flex gap-1 items-center"><GlobeIcon/>EN</p>
            <p className="flex gap-1 items-center"><PheonixIcon/> $1.15</p>
            <button className="button border border-Cpurple">Buy PNX</button>
          </div>
        </div>
      </div>
    </Footer>
  );
}
