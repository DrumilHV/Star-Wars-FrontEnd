"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { searchIndividualData } from "@/util/fetchData";
import CharacterCard from "@/components/CharacterCard";
import Navbar from "@/components/Navbar";
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

const SearchResults = () => {
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const router = useRouter();

  const searchString: any = router.query.param;
  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        setCharactersData([]);
        const data = await searchIndividualData({
          searchParam: "people",
          searchString: searchString,
        });
        setCharactersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSearchData();
  }, [searchString]);

  return (
    <>
      <Navbar />
      {charactersData.length === 0 ? (
        <Loader />
      ) : (
        <>
          {charactersData.map((character: Character, index: number) => {
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
        </>
      )}
    </>
  );
};

export default SearchResults;
