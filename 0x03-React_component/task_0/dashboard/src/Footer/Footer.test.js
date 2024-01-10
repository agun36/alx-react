import React from "react";
import Footer from "./Footer";
import { getFooterCopy, getFullYear } from "../Utils/utils";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Footer test", () => {
        it("should render without crashing", () => {
            render(<Footer/>);
            expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        });

        it("should render the text Copyright", () => {
            render(<Footer />);
            expect(getByText(`Copyright ${getFullYear()} - ${getFooterCopy()}`)).toBeInTheDocument();
        });
    });
