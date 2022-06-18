export interface ThemeType {
     colours: {
     primary: string,
     secondary: string,
     primaryLight: string,
     primaryDark: string,
     disabled: string,
     textOnPrimary: string,
     textOnSecondary: string,
     textPlaceholder: string,
     textOnDisabled: string,
     border:  string, 
     error: string
    },
    font: {
        family: string,
        weight: {
            regular: string, 
            bold: string,
        },
        size: {
            title: number,
            subtitle: number,
            boldText: number,
            text: number,
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