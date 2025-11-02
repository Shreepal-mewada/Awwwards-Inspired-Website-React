import React from "react";
import FeatureContent from "./FeatureContent";
import Button from "./Button";
import { BsCursorFill } from "react-icons/bs";
function Features() {
  return (
    <div className="bg-black w-full min-h-screen relative p-5 pb-30">
      <div className="py-26 px-19 w-2/4 text-xl">
        <p className="text-white">Into the Metagame Layer</p>
        <p className="text-gray-400">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>
      <div className="border border-gray-600 text-white m-9 mt-4 h-[500px] relative">
        <video
          src="/videos/feature-1.mp4"
          muted
          autoPlay
          loop
          className=" w-full h-full object-cover object-center border-gray-600"
        ></video>

        <FeatureContent
          title={"radiant"}
          description={
            "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          }
        />
      </div>
      <div id="grid">
        <div id="one" className="border-gray-600 border">
          <video
            muted
            autoPlay
            loop
            src="/videos/feature-2.mp4"
            className=" w-full h-full object-cover object-center"
          />
          <FeatureContent
            title={"zigma"}
            description={
              "An anime and gaming-inspired NFT collection - the IP primed for expansion."
            }
          />
        </div>
        <div id="three">
          <video
            muted
            autoPlay
            loop
            src="/videos/feature-3.mp4"
            className=" w-full h-full object-cover object-cente border-gray-600 border"
          />
          <FeatureContent
            title={"nexus"}
            description={
              "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            }
          />
        </div>
        <div id="four">
          <video
            muted
            autoPlay
            loop
            src="/videos/feature-4.mp4"
            className=" w-full h-full object-cover object-cente border-gray-600 border"
          />
          <FeatureContent
            title={"azul"}
            description={
              "A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            }
          />
        </div>

        <div id="five" className="bg-blue-600 relative border-gray-600 border">
          <p id="five-grid" className="text-7xl w-1/3 absolute left-7 top-5">
            More coming soon.
          </p>
          <Button
            leftIcon={<BsCursorFill />}
            classcontainer={"absolute top-67 text-2xl left-160"}
          />
        </div>
        <div id="six" className="border-gray-600">
          <video
            muted
            autoPlay
            loop
            src="/videos/feature-5.mp4"
            className=" w-full h-full object-cover object-cente border-gray-600 border"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
