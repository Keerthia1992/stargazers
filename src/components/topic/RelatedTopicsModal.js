import { Dialog, DialogTitle, Grid, Typography } from '@material-ui/core';
import TopicsList from './TopicsList';

const RelatedTopicsModal = ({ showRelated, relatedTopics, onClose }) => (
    <Dialog fullWidth open={showRelated} onClose={onClose}>
        <DialogTitle disableTypography>
            <Typography variant="h4">Related Topics</Typography>
        </DialogTitle>
        <Grid container>
            <Grid item xs={12}>
                <TopicsList topics={relatedTopics} isRelatedTopics />
            </Grid>
        </Grid>
    </Dialog>
);

export default RelatedTopicsModal;
