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
    --color-primary-50: #129B4C;
    --color-primary-75: #28834E;
    --color-primary-100: #F6FFFA;

    // Grey Scale Palette
    --grey-1: #333333;
    --grey-2: #828282;
    --grey-3: #BDBDBD;
    --grey-4: #D2CECE;
    --grey-5: #E0E0E0;
    --grey-6: #F5F5F5;
    --color-white: #FFFFFF;

    // Shadow
    --shadow: #00000040;

    // Border Radius
    --border-radius: 0px;
	}

	body {
    color: var(--grey-1);
    background-color: var(--color-white);
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
		background-color: var(--color-white);
	}

	::-webkit-scrollbar-thumb {
		border-radius: 0.5px;
		background-color: var(--grey-5);
	}
`;
