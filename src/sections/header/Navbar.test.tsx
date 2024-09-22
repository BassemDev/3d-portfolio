import { render, screen } from "@testing-library/react";

import { Navbar } from "./Navbar";

describe("<Navbar />", () => {
    it("should render main link", () => {
        // Given & When
        render(<Navbar />);

        // Then
        expect(screen.getByTestId("main-link").innerHTML).toBe("Eng.Bassem");
    });
});