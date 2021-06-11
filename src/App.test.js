import { render, screen } from "@testing-library/react";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/posts/1", (req, res, ctx) => {
    return res(ctx.json({ title: "Fake Title" }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

beforeEach(() => render(<App />));

describe("App", () => {
  it("renders learn react link", () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the title from the api", async () => {
    const titleElement = await screen.findByText(/Fake Title/i);

    expect(titleElement).toBeInTheDocument();
  });
});
