// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeBeacon title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeBeacon/i);
    expect(titleElement).toBeInTheDocument();
});
