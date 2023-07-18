import { Variants, transform } from 'framer-motion';

export const CardVariant: Variants = {
  initial: {
    y: 0,
    filter: 'grayscale(100%)',
  },
  animate: {
    y: -10,
    filter: 'grayscale(0%)',
    scale: 1.5,
  },
};

export const TypeVariant: Variants = {
  animate: {
    filter: 'saturate(200%)',
    scale: 1.1,
  },
};
