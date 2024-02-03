import { Cell } from "./Cell";

export const Row = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => (
        <Cell key={key} cellData={JSON.stringify(value)} />
      ))}
    </tr>
  );
};
