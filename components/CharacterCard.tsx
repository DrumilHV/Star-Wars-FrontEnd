// components/CharacterCard.tsx

import React from "react";

interface CharacterProps {
  name: string;
  height: number | unknown;
  mass: string;
  hairColor: string;
  eyeColor: string;
  gender: string;
  skinColor: string;
}

const CharacterCard: React.FC<CharacterProps> = ({
  name,
  hairColor,
  eyeColor,
  gender,
  mass,
  skinColor,
}) => {
  return (
    <div className="bg-yellow shadow-md p-4 rounded-md max-w-md mx-auto mb-4 text-white mt-3">
      <h2 className="text-xl font-star-wars mb-[5%] p-3">{name}</h2>
      <div className="flex justify-between">
        <div className="flex-1">
          <p>
            <span className="font-bold">Hair Color:</span> {hairColor}
          </p>
          <p>
            <span className="font-bold">Eye Color:</span> {eyeColor}
          </p>
          <p>
            <span className="font-bold">Gender:</span> {gender}
          </p>
        </div>
        <div className="flex-1">
          <p>
            <span className="font-bold">Mass:</span> {mass}
          </p>
          <p>
            <span className="font-bold">Skin Color:</span> {skinColor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
