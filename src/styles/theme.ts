// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#f2f2f2',
      '200': '#d9d9d9',
      '300': '#808080',
      '400': '#333333',
      '500': '#262626',
      '600': '#1a1a1a',
      '700': '#0d0d0d'
    },
    purple: {
      '300': '#8284fa',
      '700': '#5e60ce'
    },
    blue: {
      '300': '#4ea8de',
      '700': '#1e6f9f'
    },
    red: {
      '700': '#e25858'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.400'
        // color: 'gray.100'
      }
    }
  }
});
