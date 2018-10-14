import React from 'react';

export default function Pet(props) {

   console.log('props: ', props);
  if (props.catToAdopt) {
    const catAnimalName = props.catToAdopt.name;
    const catImageDescription = props.catToAdopt.imageDescription;
    const catSex = props.catToAdopt.sex;
    const catAge = props.catToAdopt.age;
    const catBreed = props.catToAdopt.breed;
    const catStory = props.catToAdopt.story;
    const catImageURL = props.catToAdopt.imageURL;
    return (
      <section className="catToAdopt">
        <header className="profile">
          <h2 className="animalName">{catAnimalName}</h2>
          <img 
            className={catImageURL}
            src={catImageURL}
            alt={catImageDescription}
          />
        </header>
        <main>
          <dl className="details">
            <dt>{catAnimalName}</dt>
            <dd><span className="title">sex: </span>{catSex}</dd>
            <dd><span className="title">age: </span>{catAge}</dd>
            <dd><span className="title">breed: </span>{catBreed}</dd>
            <dd><span className="title">bio: </span>{catStory}</dd>
          </dl>
          <button onClick={props.onAdoptPet} type="button">
            Adopt
          </button>
        </main>
      </section>
    );
  } else if (props.dogToAdopt) {
    const dogAnimalName = props.dogToAdopt.name;
    const dogImageDescription = props.dogToAdopt.imageDescription;
    const dogSex = props.dogToAdopt.sex;
    const dogAge = props.dogToAdopt.age;
    const dogBreed = props.dogToAdopt.breed;
    const dogStory = props.dogToAdopt.story;
    const dogImageURL = props.dogToAdopt.imageURL;
    return (
      <section className="dogToAdopt">
        <header className="profile">
          <h2 className="animalName">{dogAnimalName}</h2>
          <img 
            className={dogImageURL}
            src={dogImageURL}
            alt={dogImageDescription}
          />
        </header>
        <main>
          <dl className="details">
            <dt>{dogAnimalName}</dt> 
            <dd><span className="title">sex: </span>{dogSex}</dd>
            <dd><span className="title">age: </span>{dogAge}</dd>
            <dd><span className="title">breed: </span>{dogBreed}</dd>
            <dd><span className="title">bio: </span>{dogStory}</dd>
          </dl>
          <button onClick={props.onAdoptPet} type="button">
            Adopt
          </button>
        </main>
      </section>
    );
  } else {
    return <div>Loading...</div>;
  }
}
