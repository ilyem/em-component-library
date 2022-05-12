import { ThemeType } from "../types";

export const themeDefault: ThemeType = {
    colours: {
        primary: '#303f9f',
        secondary: '#ffffff',
        primaryLight: '#666ad1',
        primaryDark: '#001970',
        disabled: '#cccccc',
        textOnPrimary: '#ffffff',
        textOnSecondary: '#707070',
        textOnDisabled: '#888888',
        border: '#0000001f',
    },
    font: {
       family: 'Verdana, sans-serif',
       weight: {
           regular: '400', 
           bold: '700',
       },
       size: {
           title: '34px',
           subtitle: '24px',
           boldText: '16px',
           text: '12px',
        },
    },
    border: {
       size: '2px',
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