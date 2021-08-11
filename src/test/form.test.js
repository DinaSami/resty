import Form from '../components/form/index';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

it('run button', async () => {
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall} />);
    const button = screen.getByTestId('btnTest');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    // await waitFor(() => expect(handleApiCall).toHaveBeenCalled());
});