import { Container } from "./style";

const MiniDetails = () => {
  return (
    <Container>
      <figure>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="60"
            height="60"
            rx="5"
            fill="#27AE60"
            fill-opacity="0.1"
          />
          <path
            d="M24 18L21 22V36C21 36.5304 21.2107 37.0391 21.5858 37.4142C21.9609 37.7893 22.4696 38 23 38H37C37.5304 38 38.0391 37.7893 38.4142 37.4142C38.7893 37.0391 39 36.5304 39 36V22L36 18H24Z"
            stroke="#219653"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 22H39"
            stroke="#219653"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M34 26C34 27.0609 33.5786 28.0783 32.8284 28.8284C32.0783 29.5786 31.0609 30 30 30C28.9391 30 27.9217 29.5786 27.1716 28.8284C26.4214 28.0783 26 27.0609 26 26"
            stroke="#219653"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </figure>

      <p>
        A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
        ingredientes.
      </p>
    </Container>
  );
};

export { MiniDetails };
