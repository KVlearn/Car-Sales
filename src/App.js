import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature,removeFeature} from './action';

const App = (props) => {
 
  console.log('props in app=',props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car}
        removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} 
        addFeature={props.addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
  additionalPrice: state.additionalPrice,
  car:state.car,
  additionalFeatures: state.additionalFeatures,
  }
}

const mapDispatchToProps={addFeature,removeFeature}

export default connect(mapStateToProps,mapDispatchToProps)(App);
