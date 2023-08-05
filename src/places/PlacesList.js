import React from "react";
import PlacesItems from "./PlacesItems";
import Card from "../shared/components/Card";
import './PlacesList.css';

const PlacesList = props =>{
    if(props.items.length===0){
        return (
        <div>
            <Card>
                <h2>No places found. Maybe create one?</h2>
                <button>Share Place</button>
            </Card>
        </div>
        );
    }

    return (
        <ul className="place-list">
      {props.items.map(place => (
        <PlacesItems
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          location={place.location}
        />
      ))}
    </ul>
    );
};

export default PlacesList;