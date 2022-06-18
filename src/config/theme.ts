import { ThemeType } from "../types";

export const themeDefault: ThemeType = {
    colours: {
        primary: '#303f9f',
        secondary: '#ffffff',
        primaryLight: '#666ad1',
        primaryDark: '#001970',
        disabled: '#cccccc',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#000000',
        textPlaceholder: '#0000004d',
        textOnDisabled: '#888888',
        border: '#0000001f',
        error: '#C8102E'
    },
    font: {
       family: 'Verdana, sans-serif',
       weight: {
           regular: '400', 
           bold: '700',
       },
       size: {
           title: 34,
           subtitle: 24,
           boldText: 16,
           text: 13,
        },
    },
    border: {
       size: '1px',
       radius: '4px',
   },
   spacing: {
       fourPx: '4px',
       eightPx: '8px',
       sixteenPx: '16px',
       thirtyTwoPx: '32px',
       sixtyFourPx: '64px',
   }
   }