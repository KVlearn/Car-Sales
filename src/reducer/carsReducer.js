import {ADD_FEATURE, REMOVE_FEATURE} from '../action';
const initialState={
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
};

export const carsReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_FEATURE:
            //newFeature has to be an array
            let newFeature =  state.additionalFeatures.filter((item)=>{
                if(item.id === action.payload){
                    return item;
                } return null;
            })
            return {
                ...state,
                additionalPrice: state.additionalPrice + newFeature[0].price,
                car: {...state.car,
                     features: [...state.car.features,...newFeature]  
            }}
            case REMOVE_FEATURE :
                return {
                    ...state,
                    additionalPrice:state.additionalPrice - action.payload.price,
                    car:{...state.car,
                         features:[...state.car.features.filter((item)=> item.id !== action.payload.id
                         )]}
                }
        default:
            return state;
    }
}