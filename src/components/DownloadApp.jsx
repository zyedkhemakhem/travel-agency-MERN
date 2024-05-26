import React from "react";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appleStore.png";
import screens from "../assets/screens.png";

export default function DownloadApp() {
  return (
    <section className="h-96 w-full my-20 bg-gradient-to-r from-[#a6f2f2] to-[#ddf181] flex justify-between items-center px-40 relative overflow-hidden">
      <div className="info flex flex-col gap-4">
        <h1 className="text-3xl w-3/5">Download Now OpusTravel Agency</h1>
        <div className="downloads flex gap-4">
          <img src={googlePlay} alt="Google Play" className="h-12 cursor-pointer" />
          <img src={appStore} alt="Apple Store" className="h-12 cursor-pointer" />
        </div>
      </div>
      <img src={screens} alt="screens" className="h-88 absolute bottom-[-8rem] right-4" />
      
      <style>
        {`
          @media (max-width: 1080px) {
            section {
              flex-direction: column;
              height: auto;
              gap: 16rem;
              padding: 8rem 2rem;
            }
            .info h1 {
              font-size: 2rem;
              width: 100%;
            }
            .screens {
              position: static;
              height: 60rem;
            }
          }
        `}
      </style>
    </section>
  );
}
