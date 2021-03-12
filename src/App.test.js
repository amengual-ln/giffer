import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", async () => {
  render(<App />);
  const msg = await screen.findByText(/Busca algo ahi arriba 👆/i);
  expect(msg).toBeInTheDocument();
});
