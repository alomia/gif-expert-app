import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components";


describe("Pruebas en <GifItem/>", () => {
  const title = "Naruto";
  const url = "https://example.com/image.jpg";

  test("deberia renderizar el componente con el título y la url", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole('img').src).toBe(url)

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("deberia mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
