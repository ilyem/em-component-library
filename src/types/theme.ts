export interface ThemeType {
     colours: {
     primary: string,
     secondary: string,
     primaryLight: string,
     primaryDark: string,
     disabled: string,
     textOnPrimary: string,
     textOnSecondary: string,
     textOnDisabled: string,
     border:  string, 
    },
    font: {
        family: string,
        weight: {
            regular: string, 
            bold: string,
        },
        size: {
            title: string,
            subtitle: string,
            boldText: string,
            text: string,
         },
     },
     border: {
        size: string,
        radius: string,
    },
    spacing: {
        fourPx: string,
        eightPx: string,
        sixteenPx: string,
        thirtyTwoPx: string,
        sixtyFourPx: string,
    }
}
export type FontType = 'regular' | 'bold';