import { keyframes } from "styled-components";

const animationCart = keyframes`
	from {
		opacity: 0;
		transform: translatey(-50px);
	}

	to {
		opacity: 1;
		transform: translateX(0px);
	}
`;

const ldsRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export { animationCart, ldsRingAnimation };
