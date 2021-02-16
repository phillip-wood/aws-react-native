import { API, graphqlOperation } from "aws-amplify"

import { setSneakers} from '../../actions/index'
import * as mutations from '../../src/graphql/mutations'
import * as queries from "../../src/graphql/queries"

//-----CREATE-----//
export function dbCreateSneaker( brand, model, submodel, colorway ) {
    const sneakerDetails = {
        brand: brand,
        model: model,
        submodel: submodel,
        colorway: colorway
    }
 
    return API
        .graphql( graphqlOperation( mutations.createSneaker, { input: sneakerDetails }))
        .then( result => console.log( result ))
        .catch( error => console.log('❌ Error Adding User Sneaker ', error ))  
}

//-----READ-----//
export function dbReadSneakers () {
    return dispatch => {
        return API
        .graphql( graphqlOperation( queries.listSneakers ))
        .then( sneakers => { 
            dispatch( setSneakers( sneakers.data.listSneakers.items ))
            return null
        })
        .catch( err => console.log( err ))
    }
}

//-----UPDATE-----//
//-----DELETE-----//