import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

import "@testing-library/jest-dom";

test("should render 3 ProgressBar with 10%, 20% and 50% wide", () => {
  const { debug, container } = render(
    <div>
      <ProgressBar progress={10} />
      <ProgressBar progress={20} />
      <ProgressBar progress={50} />
    </div>
  );

  expect(container.querySelectorAll(".progress-bar")[0]?.classList).toContain("progress-10");
  expect(container.querySelectorAll(".progress-bar")[1]?.classList).toContain("progress-20");
  expect(container.querySelectorAll(".progress-bar")[2]?.classList).toContain("progress-50");

  debug(container);
});
