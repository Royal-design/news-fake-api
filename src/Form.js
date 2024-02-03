import { Button } from "./Button";

export const Form = ({ reqref, setreqref }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button buttonText="users" reqref={reqref} setreqref={setreqref} />
      <Button buttonText="comments" reqref={reqref} setreqref={setreqref} />
      <Button buttonText="posts" reqref={reqref} setreqref={setreqref} />
    </form>
  );
};
