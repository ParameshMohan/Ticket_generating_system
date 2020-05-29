const initialState = {
    input: "",
    results: [],
    error: ["cannot add", "ticket not added"]

}

const reducer = (state = initialState, action) => {
    // console.log('action:', action)
    switch (action.type) {
        case 'addToInput':
            return {
                ...state,
                input: state.input + action.val
            }

        case 'addZeroToInput':
            return {
                ...state,
                input: state.input + action.val
            }

        case 'clearInput':
            return {
                ...state,
                input: ""
            }
        case 'generateRandom':
            return {
                ...state,
                input: Math.floor(100000 + Math.random() * 900000)
            }

        case 'storeResult':
            // console.log('storeResult', action.result)
            let canAddResult = false;
            let resultArray = [];

            //Verify if duplicate
            resultArray = state.results.filter(result => result.value === action.result)

            console.log('resultArray:', resultArray)
            canAddResult = resultArray.length > 0 ? false : true;

            //if value is btween 100000-999999       
            if (canAddResult) {
                canAddResult = (action.result >= 100000 && action.result <= 999999) ? true : false;
            }



            console.log('resultArray maniuplation:', resultArray)
            return {

                ...state,
                results: canAddResult ? state.results.concat({ id: new Date(), value: action.result }) : state.results
            }
        case 'deleteResult':

            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray

            }
    }

    return state;
}


export default reducer;