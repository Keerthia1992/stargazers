import { gql, useQuery } from "@apollo/client";

export const GET_TOPICS_LIST = gql`
query getTopics($topicNameFilter: String!) {
    search(query: $topicNameFilter, type: REPOSITORY, first: 20) {
        nodes {
            ... on Repository {
                repositoryTopics(first: 10) {
                    nodes {
                        topic {
                            name
                            stargazerCount
                            relatedTopics(first: 10) {
                                name
                                stargazerCount
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

const useTopics = (topicName) => {
    const topicNameFilter = `topic=${topicName}`;
    const { loading, error, data } = useQuery(GET_TOPICS_LIST, {
        variables: { topicNameFilter },
    });

    const topics = data && data.search.nodes.reduce((res, node) => [...res, ...node.repositoryTopics.nodes], [])
    return { loading, error, topics }
}

export default useTopics;