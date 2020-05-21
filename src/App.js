import React from 'react';
import MainPage from "./components/MainPage";
import ErrorBoundary from "./components/ErrorBoundary";


function App() {
    return (
        <div>
            <ErrorBoundary>
                <MainPage/>
            </ErrorBoundary>
        </div>
    );
}

export default App;
