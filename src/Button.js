export const Button = ({ buttonText, reqref, setreqref }) => {
  return (
    <button
      className={reqref === buttonText ? "selected" : null}
      onClick={() => setreqref(buttonText)}
    >
      {buttonText}
    </button>
  );
};
