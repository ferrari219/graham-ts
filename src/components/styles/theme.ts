import { css } from 'styled-components';

const fonts = {
	family: {
		base: `AppleSDGothicNeo-Regular, Roboto, NotoSansKR, 'Noto+Sans', 'Malgun Gothic', '맑은 고딕', sans-serif`,
	},
	size: {
		sm: '1.4rem',
		base: '1.6rem',
		md: '1.8rem',
		lg: '2rem',
		xl: '2.5rem',
		title: '6rem',
	},
	weight: {
		light: 200,
		normal: 400,
		bold: 600,
	},
};

const colors = {
	point: '#705aec',
	gray0: '#000',
	gray3: '#333',
	gray6: '#666',
	gray9: '#999',
	grayC: '#ccc',
	grayF: '#fff',
};

const html = {
	url: 'https://ferrari219.github.io/graham-ts'
}

const theme = {
	fonts,
	colors,
	html
};

export default theme;

export const Heading3 = css`
	margin: 0 0 1.5rem;
	line-height: 1.1;
	font-size: 3.2rem;
	font-weight: 600;
	&--border {
		border-top: 1px solid #333;
		padding-top: 1.5rem;
	}
	&--noborder {
		border: none;
	}
`;