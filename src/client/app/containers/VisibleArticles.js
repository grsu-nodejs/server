import {connect} from "react-redux";
import Articles from "../components/Articles";
import {fetchArticles} from "../actions/articles";
import {fetchParagraphs} from "../actions/article";

const mapDispatchToProps = (dispatch) => {
    return {
        expandArticle: (id) => {
            dispatch(fetchParagraphs(id))
        },
        loadArticles: (date) => {
            dispatch(fetchArticles(date))
        }
    }
};

const mapStateToProps = (state) => {
    return state;
};

const VisibleArticles = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);

export default VisibleArticles;