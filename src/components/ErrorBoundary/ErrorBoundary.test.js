import React from "react";
import ErrorBoundary from "./index";

describe('Error Boundary', () => {

    const Something = () => null;
    it('should display an ErrorMessage if wrapped component throws', () => {
        const wrapper = mount(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>
        );

        const error = new Error('test');
        wrapper.find(Something).simulateError(error);

        expect(wrapper.find("h2")).toHaveLength(1);
        expect(wrapper.find("h2").text()).toEqual("Something went wrong.");

    });

});




