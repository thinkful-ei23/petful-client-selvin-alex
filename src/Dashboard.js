import React from 'react';
//import {connect} from react-redux;
export default function Dashboard(props) {
  console.log('props.catToAdopt: ', props.catToAdopt);
  function adoptIt() {
    if(props.catToAdopt.chosen === true) {
      props.dispatch(props.catToAdopt);
    } else {
      props.dispatch(props.dogToAdopt);
    }
  }   
    
  if (props.catToAdopt.chosen === true) {
    const animalName = props.catToAdopt.name;
    const imageDescription = props.catToAdopt.imageDescription;     
    const sex = props.catToAdopt.sex;    
    const age = props.catToAdopt.age;    
    const breed = props.catToAdopt.breed;    
    const story = props.catToAdopt.story;    
    const imageURL = props.catToAdopt.imageURL; 
    return (
      <React.Fragment>
        <section className="catToAdopt">
          <header className="profile">
            <h2 className="animalName">{animalName}</h2>
            <img className="animalimageURL" src={imageURL} alt={imageDescription} />
          </header>
        </section>
        <section className="dogToAdopt">
          <header className="profile">
            <h2 className="animalName">{animalName}</h2>
            <img className="animalimageURL" src={imageURL} alt={imageDescription} />
          </header>
        </section>
        <main>
          <dl className="details">
            <dt>{animalName}</dt>
            <dd>{sex}</dd>
            <dd>{age}</dd>
            <dd>{breed}</dd>
            <dd>{story}</dd>
          </dl>
          <button onClick={adoptIt} type="button">Adopt></button>
        </main> 
      </React.Fragment>
    );
   } else {
    const animalName = props.dogToAdopt.name;    
    const imageDescription = props.dogToAdopt.imageDescription; 
    const sex = props.dogToAdopt.sex;    
    const age = props.dogToAdopt.age;    
    const breed = props.dogToAdopt.breed;    
    const story = props.dogToAdopt.story;    
    const imageURL = props.dogToAdopt.imageURL; 
    return (
      <React.Fragment>
        <section className="catToAdopt">
          <header className="profile">
            <h2 className="animalName">{animalName}</h2>
            <img className="animalimageURL" src={imageURL} alt={imageDescription} />
          </header>
        </section>
        <section className="dogToAdopt">
          <header className="profile">
            <h2 className="animalName">{animalName}</h2>
            <img className="animalimageURL" src={imageURL} alt={imageDescription} />
          </header>
        </section>
        <main>
          <dl className="details">
            <dt>{animalName}</dt>
            <dd>{sex}</dd>
            <dd>{age}</dd>
            <dd>{breed}</dd>
            <dd>{story}</dd>
          </dl>
          <button onClick={adoptIt} type="button">Adopt></button>
        </main> 
      </React.Fragment>
    );
  }
}
