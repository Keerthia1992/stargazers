import { useState } from 'react';
import TopicsList from './TopicsList';
import { TextField, Grid } from '@material-ui/core';
import useTopics from '../../api/hooks/useTopics';
import RelatedTopicsModal from './RelatedTopicsModal';

const TopicContainer = () => {
    const [topicText, setTopicText] = useState('react');
    const handleChange = ({ target }) => {
        const { value } = target;
        setTopicText(value);
    };

    const { loading, error, topics } = useTopics(topicText)
    const [selectedTopic, setSelectedTopic] = useState(null)
    const [showRelated, setShowRelated] = useState(false)

    const onTopicSelect = (topic) => {
        setShowRelated(true)
        setSelectedTopic(topic)
    }

    return (<>
        <Grid container justify="center" alignItems="center">
            <Grid item md={8} xs={12} sm={10}>
                <TextField
                    data-testid="topicInput"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="topicText"
                    value={topicText}
                    onChange={handleChange}
                />
                <TopicsList topics={topics} onTopicSelect={onTopicSelect} loading={loading} error={error} />
            </Grid>
        </Grid>
        <RelatedTopicsModal showRelated={showRelated} relatedTopics={selectedTopic?.relatedTopics} onClose={() => {
            setShowRelated(false)
            setSelectedTopic(null)
        }} />
    </>);
};

export default TopicContainer;
