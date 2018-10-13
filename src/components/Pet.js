import React from 'react';

export default function Pet(props) {

  // console.log('props: ', props);
  if (props.catToAdopt) {
    const catAnimalName = props.catToAdopt[0].name;
    const catImageDescription = props.catToAdopt[0].imageDescription;
    const catSex = props.catToAdopt[0].sex;
    const catAge = props.catToAdopt[0].age;
    const catBreed = props.catToAdopt[0].breed;
    const catStory = props.catToAdopt[0].story;
    const catImageURL = props.catToAdopt[0].imageURL;
    return (
      <section className="catToAdopt">
        <header className="profile">
          <h2 className="animalName">{catAnimalName}</h2>
          <img
            className="animalimageURL"
            src={catImageURL}
            alt={catImageDescription}
          />
        </header>
        <main>
          <dl className="details">
            <dt>{catAnimalName}</dt>
            <dd>{catSex}</dd>
            <dd>{catAge}</dd>
            <dd>{catBreed}</dd>
            <dd>{catStory}</dd>
          </dl>
          <button onClick={props.onAdoptPet} type="button">
            Adopt
          </button>
        </main>
      </section>
    );
  } else if (props.dogToAdopt) {
    const dogAnimalName = props.dogToAdopt[0].name;
    const dogImageDescription = props.dogToAdopt[0].imageDescription;
    const dogSex = props.dogToAdopt[0].sex;
    const dogAge = props.dogToAdopt[0].age;
    const dogBreed = props.dogToAdopt[0].breed;
    const dogStory = props.dogToAdopt[0].story;
    const dogImageURL = props.dogToAdopt[0].imageURL;
    return (
      <section className="dogToAdopt">
        <header className="profile">
          <h2 className="animalName">{dogAnimalName}</h2>
          <img
            className="animalimageURL"
            src={dogImageURL}
            alt={dogImageDescription}
          />
        </header>
        <main>
          <dl className="details">
            <dt>{dogAnimalName}</dt>
            <dd>{dogSex}</dd>
            <dd>{dogAge}</dd>
            <dd>{dogBreed}</dd>
            <dd>{dogStory}</dd>
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
