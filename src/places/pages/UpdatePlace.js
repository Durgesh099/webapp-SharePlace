import React ,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import { useForm } from "../../shared/hooks/form-hook";
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/components/Button';
import { VALIDATOR_REQUIRE , VALIDATOR_MINLENGTH } from "../../shared/FormElements/Validators";
import Card from '../../shared/components/Card';

const PLACES = [
    {
        id:'p1',
        title: 'Osho Garden',
        description: 'Wonderful nature spot',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNtm6B4FA2H1ZS94AuHsvtCfvwkonU39qYQT-Mh=s1360-w1360-h1020',
        address: 'D. H. Dhunjibhoy Road, Between Lane Number 2 and 3, Koregaon Rd, Koregaon Park, Pune, Maharashtra 411001',
        location: 'https://www.google.com/maps/place/Osho+Teerth+Park/@18.5358784,73.8881172,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1004113e727:0xdb7ded8050f08a1f!8m2!3d18.5358733!4d73.8906921!16s%2Fg%2F1tfzkswy?entry=ttu' ,
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'SGS Mall',
        description: 'Shopping complex',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipM9ndLlUV30d9BzJfMnRag_J_aL6xOzGoOKMDvR=w408-h544-k-no',
        address: '231, Moledina Rd, Camp, Pune, Maharashtra 411001',
        location: {
            lat:18.5195803,
            lng:73.8773738
        },
        creator: 'u2'
    }
];

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;
  
    const [formState, inputHandler, setFormData] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        }
      },
      false
    );
  
    const identifiedPlace = PLACES.find(p => p.id === placeId);
  
    useEffect(() => {
      if (identifiedPlace) {
        setFormData(
          {
            title: {
              value: identifiedPlace.title,
              isValid: true
            },
            description: {
              value: identifiedPlace.description,
              isValid: true
            }
          },
          true
        );
      }
      setIsLoading(false);
    }, [setFormData, identifiedPlace]);
  
    const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
  
    if (!identifiedPlace) {
      return (
        <div className="center">
          <Card>
            <h2>Could not find place!</h2>
          </Card>
        </div>
      );
    }
  
    if (isLoading) {
      return (
        <div className="center">
          <h2>Loading...</h2>
        </div>
      );
    }
  
    return (
      <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <h2>Edit Place</h2>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialvalue={formState.inputs.title.value}
          initialvalid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialvalue={formState.inputs.description.value}
          initialvalid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    );
  };
  
  export default UpdatePlace;
  