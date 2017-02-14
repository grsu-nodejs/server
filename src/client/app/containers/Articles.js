import {connect} from "react-redux";
import Articles from "../components/Articles";
import {fetchArticles} from "../actions/articles";

const mapDispatchToProps = (dispatch) => {
    return {
        loadArticles: (date) => {
            dispatch(fetchArticles(date))
        }
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);