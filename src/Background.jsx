import clsx from "clsx";

const Background = ({ step }) => (
  <div
    id="background"
    className={clsx(
      "background",
      step === 0 && "background-zero",
      step === 1 && "background-one",
      step === 2 && "background-two",
      step === 3 && "background-three",
      step === 4 && "background-four",
      step === 5 && "background-five",
      step === 6 && "background-six",
      step === 7 && "background-seven",
      step === 8 && "background-eight",
      step === 9 && "background-nine",
      step === 10 && "background-ten",
      step === 11 && "background-eleven",
      step === 12 && "background-twelve",
      step === 13 && "background-thirteen",
      step === 14 && "background-fourteen",
      step === 15 && "background-fifteen",
      step === 16 && "background-sixteen"
    )}
  />
);

export default Background;
