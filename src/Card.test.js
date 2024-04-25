import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
// import TEST_CARDS from "./_testCommon.js";

it("renders without crashing", function() {
  render(<Card
    caption="captionnn"
    src="srcc" 
    currNum={0}
    totalNum={3}
  />)
});

it("matches snapshot", function() {
    const {asFragment} = render(<Card
        caption="captionnn"
        src="srcc" 
        currNum={0}
        totalNum={3}
      />);
      
      expect(asFragment()).toMatchSnapshot();
});