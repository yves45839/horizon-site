import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero title and CTA', () => {
    render(<App />);
    expect(screen.getByText(/Propulsons votre transition écologique/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /découvrir nos expertises/i })).toBeInTheDocument();
});
