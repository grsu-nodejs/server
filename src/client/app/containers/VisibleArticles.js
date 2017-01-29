import {connect} from "react-redux";
import Articles from "../components/Articles";
import {expandArticle} from "../actions/index";

const mapDispatchToProps = (dispatch) => {
    return {
        expandArticle: (id, paragraphs) => {
            dispatch(expandArticle(id, paragraphs))
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