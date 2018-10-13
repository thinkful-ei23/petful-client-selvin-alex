import React from 'react';
import {connect} from 'react-redux';
import Pet from './components/Pet';
import {fetchCat} from './actions/cat';
import {fetchDog} from './actions/dog';
class Dashboard extends React.Component {

  componentDidMount(){
     this.props.dispatch(fetchCat())
     this.props.dispatch(fetchDog())
  }

  onAdoptPet() {
    console.log(true);
  }

  render() {
    const catToAdopt = [
      {
        imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street',
        chosen: false
      },
      {
        imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 3,
        breed: 'Bengal',
        story: 'Thrown on the street',
        chosen: false
      },
      {
        imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 4,
        breed: 'Bengal',
        story: 'Thrown on the street',
        chosen: false
      }
    ]; 
    
    const dogToAdopt = [
      {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away',
        chosen: false
      },
      {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away',
        chosen: false
      },
      {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
        name: 'Zeus',
        sex: 'Male',
        age: 3,
        breed: 'Golden Retriever',
        story: 'Owner Passed away',
        chosen: false
      }
    ];
    return (
      <React.Fragment>
        <Pet catToAdopt={catToAdopt} onAdoptPet={(animalType) => this.onAdoptPet(animalType)}/>
        <Pet dogToAdopt={dogToAdopt} onAdoptPet={(animalType) => this.onAdoptPet(animalType)}/>
      </React.Fragment>
    );

  }
}
  const mapStateToProps = state => ({ 
      catData: state.catReducer.data,
      dogData: state.dogReducer.data     
    });

export default connect(mapStateToProps)(Dashboard);
