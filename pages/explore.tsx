import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CharacterCard from "@/components/CharacterCard";
import fetchData, { giveCount } from "@/util/fetchData";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";

interface Character {
  name: string;
  hair_color: string;
  eye_color: string;
  gender: string;
  mass: string;
  skin_color: string;
  height: string;
}

const explore = () => {
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setCharactersData([]);
        const data = await fetchData({ searchParam: "people", page });
        setCharactersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchAllData function
    fetchAllData();
  }, [page]);

  return (
    <>
      <Navbar />
      {charactersData.length == 0 ? (
        <Loader />
      ) : (
        <div className="bg-star-wars-bg font-star-wars text-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            {/* Check if charactersData is not undefined before mapping */}
            {Array.isArray(charactersData) &&
              charactersData.map((character: Character, index: number) => {
                const {
                  name,
                  hair_color: hairColor,
                  eye_color: eyeColor,
                  gender,
                  mass,
                  skin_color: skinColor,
                  height,
                } = character;
                return (
                  <CharacterCard
                    key={index}
                    name={name}
                    hairColor={hairColor}
                    eyeColor={eyeColor}
                    gender={gender}
                    mass={mass}
                    skinColor={skinColor}
                    height={height}
                  />
                );
              })}
          </div>
        </div>
      )}
      <Pagination page={page} giveCount={giveCount} setPage={setPage} />
    </>
  );
};

export default explore;
