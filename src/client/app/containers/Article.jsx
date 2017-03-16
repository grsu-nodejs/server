import {connect} from 'react-redux';
import {fetchParagraphs} from '../actions/article';
import Article from '../components/Article';

const mapDispatchToProps = (dispatch) => {
    return {
        expandArticle: (article) => {
            dispatch(fetchParagraphs(article));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Article);