import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
    border: 0;
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
    font-family: 'Inter', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
    // Primary Palette
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-primary-100: #F6FFFA;
    --color-secondary: #EB5757;

    // Grey Scale Palette
    --gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-10: #BDBDBD;
    --grey-0: #F5F5F5;
    --white: #FFFFFF;

    // Feedback Palette
    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

    // Border Radius
    --border-radius: 4px
	}

	body {
    color: var(--gray-100);
    background-color: var(--white);
	}
	
  button, a {
		cursor: pointer;
    transition: 0.5s;
	}
	
  a {
		text-decoration: none;
	}

  ::-webkit-scrollbar {
  	width: 6px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--white);
	}

	::-webkit-scrollbar-thumb {
		border-radius: 0.5px;
		background-color: var(--grey-20);
	}
`;
