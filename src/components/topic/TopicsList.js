import { CircularProgress, List, makeStyles, Typography } from '@material-ui/core';
import Topic from './Topic';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    loaderContainer: {
        minHeight: 200,
        padding: theme.spacing(4),
        textAlign: "center"
    }
}))

const TopicsList = ({
    topics,
    onTopicSelect,
    isRelatedTopics,
    loading,
    error,
}) => {
    const classes = useStyles();
    if (loading)
        return (
            <div className={classes.loaderContainer}>
                <CircularProgress />
            </div>
        );
    if (error) return `Error! ${error}`;
    return (
        <List data-testid="topicsList">
            {isRelatedTopics
                ? topics &&
                  topics.map((topic, index1) => (
                      <Topic topic={topic} key={index1} />
                  ))
                : topics.map(({ topic }, index1) => (
                      <Topic
                          topic={topic}
                          key={index1}
                          onClick={() => onTopicSelect(topic)}
                      />
                  ))}
            {topics && topics.length === 0 && (
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="secondary"
                >
                    No topics found.
                </Typography>
            )}
        </List>
    );
};

TopicsList.propTypes = {
    topics: PropTypes.array,
    onTopicSelect: PropTypes.func,
    isRelatedTopics: PropTypes.bool,
};

export default TopicsList;
