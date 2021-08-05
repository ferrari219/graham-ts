import 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme {
        fonts: {
            family: {
                base: string;
            },
            size: {
                sm: string;
                base: string;
                md: string;
                lg: string;
                xl: string;
                title: string;
            },
            weight: {
                light: number;
                normal: number;
                bold: number;
            },
        }
        colors: {
            point: string;
            gray0: string;
            gray3: string;
            gray6: string;
            gray9: string;
            grayC: string;
            grayF: string;
        }
        html: {
            url: string
        }
    }
}