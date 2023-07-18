'use client';

import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
import { CardVariant } from '../animationVariables';
import Image from 'next/image';
import { CgSpinner } from 'react-icons/cg';
import Link from 'next/link';

export default function PokemonCard(props: { Pokemon: Pokemons; id: number }) {
  return (
    <Suspense fallback={<CgSpinner />}>
      <Link href={`/${props.id}`}>
        <motion.div
          className="uppercase cursor-pointer font-jost"
          variants={CardVariant}
          initial="initial"
          whileHover={'animate'}
        >
          <Image
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`}
            alt={`${props.Pokemon.name}`}
            className="w-16 h-16"
            width={16}
            height={16}
          />
          {props.Pokemon.name}
        </motion.div>
      </Link>
    </Suspense>
  );
}
