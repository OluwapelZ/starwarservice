const ResponseCodes = {
    "E001": "Sorry, this is not a valid route",
    "E002": "Resource not found",
    "E003": "An error occured internally",
    "E004": "Successfully fetched movies",
    "E005": "An error occur while fetching movies",
    "E006": "Successfully fetched movie character list",
    "E007": "And error occur while fetching movie character list",
    "E008": "Successfully added comment to movie",
    "E009": "An error occurred while adding comment to movie",
    "E010": "Successfully retrieved movie comments",
    "E011": "An error occurred while fetching movie comments",
    "E012": "No movie exists with the provided movie id",
    "E013": "Invalid arguments passed",
    "E014": "Comment length cannot be more than 500 characters"
};

const ResponseMessages = {
    "METHOD_NOT_IMPLEMENTED": "E001",
    "NOT_FOUND_ERROR": "E002",
    "INTERNAL_SERVER_ERROR": "E003",
    "FETCH_MOVIE_SUCCESS": "E004",
    "FETCH_MOVIE_ERROR": "E005",
    "LIST_CHARACTER_SUCCESS": "E006",
    "LIST_CHARACTER_ERROR": "E007",
    "ADD_COMMENT_SUCCESS": "E008",
    "ADD_COMMENT_ERROR": "E009",
    "FETCH_MOVIE_COMMENT_SUCCESS": "E010",
    "FETCH_MOVIE_COMMENT_ERROR": "E011",
    "MOVIE_NOT_FOUND": "E012",
    "INVALID_ARGUMENTS": "E013",
    "COMMENT_LENGTH_ERROR": "E014"
}

const getMapping = (message) => {
    if(ResponseMessages[message]) {
        const code = ResponseMessages[message];
        return ResponseCodes[code];
    }
}

module.exports = getMapping;