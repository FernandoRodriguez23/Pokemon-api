export const reducer = (state, action) => {
    switch (action.type){
        case "SET_LOADING": return {
            ...state,
            loading: true
        }
        case "SET_RESULTS": return {
            ...state,
            loading: false,
            results: action.payload.results
        }

        case "HANDLE_SEARCH": return {
            ...state,
            query: action.payload
        }
        // case "HANDLE_PAGE" : {
            
        // }
    }
}