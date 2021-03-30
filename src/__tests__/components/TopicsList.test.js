
import {
    render,
    cleanup,
    act,
    fireEvent,
} from '@testing-library/react';
import TopicsList from '../../components/topic/TopicsList';

afterEach(cleanup);

const topics = [
    {
        topic: {
            name: 'react',
            stargazerCount: 123,
            relatedTopics: [
                {
                    name: 'react1',
                    stargazerCount: 156,
                },
                {
                    name: 'react2',
                    stargazerCount: 184,
                },
            ],
        },
    },
]

describe('TopicsList', () => {
    it('should render topics list correctly when isRelatedTopics is false', async () => {
        await act(async () => {
            const { getByText } = render(
                <TopicsList topics={topics} />
            );
            const reactTopic = getByText('react');
            expect(reactTopic).toBeInTheDocument();
        });
    });
    
    const onTopicSelectSpy = jest.fn();
    
    test('should render trigger onTopicSelect handler on item click', () => {
        const { getByRole } = render(
            <TopicsList
                topics={topics}
                onTopicSelect={onTopicSelectSpy}
            />
        );
        const clickableElement = getByRole('button');
        fireEvent.click(clickableElement);
        expect(onTopicSelectSpy).toBeCalled();
    });
    
    const relatedTopics = [{
        name: 'related-react',
        stargazerCount: 123,
    }]
    
    test('should render topics list correctly when isRelatedTopics is true', async () => {
        await act(async () => {
            const { getByText } = render(
                <TopicsList topics={relatedTopics} isRelatedTopics />
            );
            const reactTopic = getByText('related-react');
            expect(reactTopic).toBeInTheDocument();
        });
    });
})


