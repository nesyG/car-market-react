import {render, screen, cleanup} from '@testing-library/react';
import NewListing from '../HomeComponents/NewListing';

test('should render NewListing component', () => {
    render(<NewListing/>);
    const newListingElem = screen.getByTestId('test-1');
    expect(newListingElem).toBeinDocument()
})