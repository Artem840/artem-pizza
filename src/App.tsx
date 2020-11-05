import React from 'react';
import RootLayout from "./layouts/RootLayout";
import ErrorBoundary from "./layouts/ErrorBoundary";

function App() {

    return (
        <ErrorBoundary>
            <RootLayout/>
        </ErrorBoundary>
    );
}

export default App;
