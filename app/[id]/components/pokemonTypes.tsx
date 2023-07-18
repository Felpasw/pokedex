'use client';

import React from 'react';
import Image from 'next/image';
import { TypeVariant } from '@/app/animationVariables';
import { motion } from 'framer-motion';

const types = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fire',
  'fairy',
  'fighting',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

export default function PokemonTypes(props: { types: Type[] }) {
  return (
    <>
      {props.types.map((element) => (
        <motion.div
          variants={TypeVariant}
          whileHover={'animate'}
          className={`h-28 w-28 relative ${element.type.name} p-7 aspect-square rounded-full cursor-pointer`}
        >
          <Image
            src={`/assets/iconElements/${element.type.name}.svg`}
            alt="baguncinha"
            fill
            className={`p-3`}
          />
        </motion.div>
      ))}
    </>
  );
}
