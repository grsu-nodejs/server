import {connect} from "react-redux";
import Articles from "../components/Articles";
import {expandArticle, loadArticles} from "../actions/index";

const mapDispatchToProps = (dispatch) => {
    return {
        expandArticle: (id) => {
            dispatch(expandArticle(id))
        },
        loadArticles: (date) => {
            dispatch(loadArticles(date))
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