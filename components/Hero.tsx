//"deploy": "gh-pages -d build",
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Sportlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

      <div className="flex justify-center relative my-8 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect 
          className="text-center text-[40px]"
          words="Transforming concepts into Seamless User Experiences"
          />
          <p>
            Hi, I&apos;m Jean de Dieu  a Full Stack Developer based in Canada.
          </p>
          <a href="#about"><MagicButton 
          title="show my work" 
          icon={<FaLocationArrow />} 
          position="right"/></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;