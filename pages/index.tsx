import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CharacterCard from "@/components/CharacterCard";
import fetchData, { giveCount } from "@/util/fetchData";
import Pagination from "@/components/Pagination";

const inter = Inter({ subsets: ["latin"] });

interface Character {
  name: string;
  hair_color: string;
  eye_color: string;
  gender: string;
  mass: string;
  skin_color: string;
  height: string;
}

export default function Home() {
  return (
    <>
      <>
        <Navbar />

        {/* Star Wars-themed card */}
        <div className="container mx-auto p-8 mt-16 max-w-md bg-gray-800 rounded-lg shadow-lg text-white">
          {/* Star Wars Logo */}
          <img
            src="star_wars_poster.jpeg"
            alt="Star Wars Poster"
            className="mx-auto mb-4 poster"
          />

          {/* Short Description */}
          <p className="text-lg mb-4">
            "A long time ago in a galaxy far, far away" across multiple
            fictional eras, in which humans and many species of aliens (often
            humanoid) co-exist with robots (typically referred to in the films
            as 'droids'), which may be programmed for personal assistance or
            battle. Space travel between planets is common due to lightspeed
            hyperspace technology. The planets range from wealthy, planet-wide
            cities to deserts scarcely populated by primitive tribes. Virtually
            any Earth biome, along with many fictional ones, has its counterpart
            as a Star Wars planet which, in most cases, teem with sentient and
            non-sentient alien life. The franchise also makes use of other
            astronomical objects such as asteroid fields and nebulae. Spacecraft
            range from small starfighters to large capital ships, such as the
            Star Destroyers, as well as space stations such as the moon-sized
            Death Stars. Telecommunication includes two-way audio and
            audiovisual screens, holographic projections and hyperspace
            transmission.
          </p>

          {/* Placeholder Image (Replace with actual Star Wars image) */}
          <img
            src="Star_wars_logo.svg"
            alt="Star Wars"
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </>
    </>
  );
}
