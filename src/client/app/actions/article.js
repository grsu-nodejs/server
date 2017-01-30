export const expandArticle = (id, paragraphs) => {
    return {
        type: 'EXPAND_ARTICLE',
        id: id,
        paragraphs: paragraphs
    }
};

export const fetchParagraphs = (id) => {
    return (dispatch) => {
        fetch(`/article?id=${id}`)
            .then(data => data.json())
            .then(paragraphs => dispatch(expandArticle(id, paragraphs)))
    }
};