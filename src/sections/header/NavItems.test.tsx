import { render, screen } from "@testing-library/react";

import { NavItems } from "./NavItems";

describe("<NavItems />", () => {
    it("should render component with all the nav items", () => {
        // Given & When
        render(<NavItems />);

        // Then
        expect(screen.getByText("Home")).toBeDefined();
        expect(screen.getByText("About")).toBeDefined();
        expect(screen.getByText("Skills")).toBeDefined();
        expect(screen.getByText("Projects")).toBeDefined();
        expect(screen.getByText("Contact")).toBeDefined();
    });  
});