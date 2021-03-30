import { Chip, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';

const Topic = ({ topic, onClick }) => (
    <ListItem button divider onClick={onClick}>
        <ListItemText data-testid="topicName" primary={topic?.name} />
        <Chip color="secondary" label={topic?.stargazerCount} />
    </ListItem>
);

Topic.propTypes = {
    topic: PropTypes.shape({
        name: PropTypes.string,
        stargazerCount: PropTypes.number,
        relatedTopics: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                stargazerCount: PropTypes.number,
            })
        ),
    }).isRequired,
    onClick: PropTypes.func,
};

export default Topic;
