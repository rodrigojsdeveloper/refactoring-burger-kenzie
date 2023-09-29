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
    --gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-10: #BDBDBD;
    --grey-5: #d2cece;
    --grey-0: #F5F5F5;
    --white: #FFFFFF;

    // Shadow
    --shadow: #00000040;

    // Border Radius
    --border-radius: 5px;
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
