import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

// import actions
import {fetchers} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchers();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <div>....is Loading</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state

const mapStateToProps = (state) =>{
  console.log('I am from map to props' ,state)
  return{
    // the characters and the fetching boolean
    characters:state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
};
export default connect(mapStateToProps, {fetchers})(CharacterListView);
