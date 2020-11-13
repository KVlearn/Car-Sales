export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

//action creator function - that returns an action object with type property

export const addFeature=(featureId,featurePrice)=>{
return{type: ADD_FEATURE,payload:{id:featureId,price:featurePrice}}
}

export const removeFeature=(featureId,price)=>{
    return{type: REMOVE_FEATURE,payload:{id:featureId,price:price}}
}