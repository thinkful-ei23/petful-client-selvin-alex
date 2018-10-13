import React from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import { fetchCat } from './actions/cat';
import { fetchDog } from './actions/dog';
class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  onAdoptPet() {
    console.log(true);
  }

  render() {
    return (
      <React.Fragment>
        <Pet
          catToAdopt={this.props.catData}
          onAdoptPet={animalType => this.onAdoptPet(animalType)}
        />
        <Pet
          dogToAdopt={this.props.dogToAdopt}
          onAdoptPet={animalType => this.onAdoptPet(animalType)}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  catData: state.catReducer.data,
  dogData: state.dogReducer.data
});

export default connect(mapStateToProps)(Dashboard);
