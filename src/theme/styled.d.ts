import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        pallet: {
            text: {
                title: string;
                text: string;
                hint: string;
            },

            ui: {
                primary: string;
                background: string;
                strongGray: string;
                green: string;
                orange: string;
                red: string;
                strongBlue: string;
                light: string;
            },
        }

        spacing: (value:number) => string;
    }
}