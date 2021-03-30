import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import App from '../App';

const mocks = [];

describe("App", () => {
  it("should render the app correctly", () => {
    render(<MockedProvider mocks={mocks} addTypename={true}><App /></MockedProvider>);
    const linkElement = screen.getByText(/Git Topics Search App/i);
    expect(linkElement).toBeInTheDocument();
  })
})
