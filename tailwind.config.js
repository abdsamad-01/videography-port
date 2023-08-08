/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#171717',
                'secondary': '#64CCC5',
                'tertiary': '#DAFFFB',
                'variant': 'C5CCD3',
                'btnColor': '#4D5D77',
                'btnColor2': '#48668E'
            },
            inset: {
                45: '45%',
                65: '65px',
            },
            // width: {
            //     215: '215px',
            //     357: '357px',
            //     557: '557px',
            // },
            // minWidth: {
            //     155: '155px',
            //     190: '190px',
            //     215: '215px',
            //     240: '240px',
            //     256: '256px',
            //     327: '327px',
            // },
            // height: {
            //     300: '300px',
            //     557: '557px',
            // },
        },
        screens: {
            lg: { max: '1800px' },
            llg: { max: '1285px' },
            md: { max: '990px' },
            sm: { max: '600px' },
            xs: { max: '400px' },
            minmd: '1700px',
            minlg: '2100px',
        },
        fontFamily: {
            satoshi: ['Satoshi', 'sans-serif'],
            dmsans: ['DM Sans', 'sans-serif']
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

