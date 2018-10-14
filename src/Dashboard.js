import React from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import { fetchCat, adoptCat } from './actions/cat';
import { fetchDog, adoptDog } from './actions/dog';
class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptCat() {
    console.log('cat');
    this.props.dispatch(adoptCat());
  }
  onAdoptDog() {
    console.log('dog');
    this.props.dispatch(adoptDog());
  }

  render() {
    return (
      <React.Fragment>
        <p>The Petful project demonstrates the use of a First-In-First-Out (FIFO) queue via a virtual animal shelter that allows adoption of cats and dogs. Users are presented with a choice of selecting either a dog, or a cat.  This dog or cat is the animal that has been in its respective queue the longest.</p>
        <Pet
          catToAdopt={this.props.catData}
          onAdoptPet={() => this.onAdoptCat()}
        />
        <Pet
          dogToAdopt={this.props.dogData}
          onAdoptPet={() => this.onAdoptDog()}        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  catData: state.catReducer.data,
  dogData: state.dogReducer.data
});

export default connect(mapStateToProps)(Dashboard);
