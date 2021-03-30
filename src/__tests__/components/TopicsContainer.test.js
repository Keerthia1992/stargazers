import { MockedProvider } from '@apollo/client/testing';
import {
    render,
    screen,
    cleanup,
    fireEvent,
    waitFor,
    act,
} from '@testing-library/react';
import { GET_TOPICS_LIST } from '../../api/hooks/useTopics';
import TopicContainer from '../../components/topic/TopicsContainer';

afterEach(cleanup);

const mocks = [
    {
        request: {
            query: GET_TOPICS_LIST,
            variables: {
                topicNameFilter: 'topic=react',
            },
        },
        result: {
            data: {
                search: {
                    nodes: [
                        {
                            repositoryTopics: {
                                nodes: [
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
                                    {
                                        topic: {
                                            name: 'react A',
                                            stargazerCount: 123,
                                            relatedTopics: [
                                                {
                                                    name: 'react1 1',
                                                    stargazerCount: 156,
                                                },
                                                {
                                                    name: 'react2 2',
                                                    stargazerCount: 184,
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                            __typename: 'Repository',
                        },
                    ],
                },
            },
        },
    },
];

describe('TopicsContainer', () => {
    it('should render topics list correctly', async () => {
        await act(async () => {
            const { getByText, getByTestId } = render(
                <MockedProvider mocks={mocks} addTypename={true}>
                    <TopicContainer />
                </MockedProvider>
            );

            const input = getByTestId('topicInput').querySelector('input');
            fireEvent.change(input, { target: { value: 'react' } });

            await waitFor(() => screen.getAllByTestId('topicsList'));
            // await new Promise((resolve) => setTimeout(resolve, 0));
            // const topics = screen.getAllByTestId('topicName');
            const reactTopic = getByText('react A');
            // expect(topics.length).toBeTruthy();
            expect(reactTopic).toBeInTheDocument();
        });
    });

    const mocksWithoutTopics = [
        {
            request: {
                query: GET_TOPICS_LIST,
                variables: {
                    topicNameFilter: 'topic=react-abcd',
                },
            },
            result: {
                data: {
                    search: {
                        nodes: [],
                    },
                },
            },
        },
    ];

    it('should display message when no topics', async () => {
        await act(async () => {
            const { getByText, getByTestId } = render(
                <MockedProvider mocks={mocksWithoutTopics} addTypename={true}>
                    <TopicContainer />
                </MockedProvider>
            );

            const input = getByTestId('topicInput').querySelector('input');
            fireEvent.change(input, { target: { value: 'react-abcd' } });
            await waitFor(() => screen.getAllByTestId('topicsList'));

            const noTopicsText = getByText('No topics found.');
            expect(noTopicsText).toBeInTheDocument();
        });
    });

    test('should open modal with related topics on clicking topic', async () => {
        const { getByText, getByTestId } = render(
            <MockedProvider mocks={mocks} addTypename={true}>
                <TopicContainer />
            </MockedProvider>
        );
        const input = getByTestId('topicInput').querySelector('input');
        fireEvent.change(input, { target: { value: 'react' } });
        await waitFor(() => screen.getAllByTestId('topicsList'));
        const topicListItem = getByText('react');
        fireEvent.click(topicListItem);
        const relatedTopicItem = getByText('react2');
        expect(relatedTopicItem).toBeInTheDocument();
    });
});
