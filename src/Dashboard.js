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
        <h1>Hi, Welcome to the Petful Project!</h1>
        <p>In order to adopt one of our wonderful furbabies, all you have to do is click on the "Adopt" button located below your choice of pets.</p>
        <p> You will automatically be rescuing the pet who has been waiting the longest to go to a loving home.</p>
        <p>Don't forget to pickup your choice of a free chew toy or scratching pad to distract them from destroying your furniture!</p> 
        <div className='petWrapper'>
          <Pet
            catToAdopt={this.props.catData}
            onAdoptPet={() => this.onAdoptCat()}
            />
          <Pet
            dogToAdopt={this.props.dogData}
            onAdoptPet={() => this.onAdoptDog()}
            />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  catData: state.catReducer.data,
  dogData: state.dogReducer.data
});

export default connect(mapStateToProps)(Dashboard);
