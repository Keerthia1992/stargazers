import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Topic from '../../components/topic/Topic';

afterEach(cleanup);

describe('Topic', () => {
    it('should render topic correctly', () => {
        render(
            <Topic
                topic={{
                    name: 'MyTopic',
                    stargazerCount: 123,
                }}
            />
        );
        const linkElement = screen.getByText(/MyTopic/i);
        expect(linkElement).toBeInTheDocument();
    });

    const onClickSpy = jest.fn();

    it('should trigger onClick handler on item click', () => {
        const { getByRole } = render(
            <Topic
                topic={{
                    name: 'MyTopic',
                    stargazerCount: 123,
                }}
                onClick={onClickSpy}
            />
        );
        const clickableElement = getByRole('button');
        fireEvent.click(clickableElement);
        expect(onClickSpy).toBeCalled();
    });
});
