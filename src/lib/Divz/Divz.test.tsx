import { render, screen } from "@testing-library/react";
import { Divz } from ".";

test("render divz", () => {
  render(
    <Divz>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Divz>
  );
  const element = screen.getByTestId("divz");
  expect(element).toBeInTheDocument();
});
