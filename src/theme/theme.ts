import { DefaultTheme } from 'styled-components';

const BASE_UNIT = 8;

const theme: DefaultTheme = {
    pallet: {
        text: {
            title: '#333333',
            text: '#4F4F4F',
            hint: '#BDBDBD',
        },

        ui: {
            primary: '#2D9CDB',
            background: '#E0E0E0',
            strongGray: '#BDBDBD',
            green: '#27AE60',
            orange: '#F2994A',
            red: '#EB5757',
            strongBlue: '#2F80ED',
            light: '#F2F2F2',
            white: '#FBFBFB',
        },
    },

    spacing: (value: number) => `${ (BASE_UNIT * value) / 16 }em`,
}

export { theme };