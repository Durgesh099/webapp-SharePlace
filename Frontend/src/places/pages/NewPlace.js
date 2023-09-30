import React from 'react';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/FormElements/Validators';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/components/Button';
import {useForm} from '../../shared/hooks/form-hook';
import './NewPlace.css';


const NewPlace = () => {
  const[formState,inputHandler]=useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value:'',
        isValid:false
      }
    },
    false
  );

const submitHandler = event=>{
    event.preventDefault();
    console.log(formState.inputs);
}

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <h2>New Place</h2>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="textarea"
        label="Address"
        validators={[VALIDATOR_MINLENGTH(2)]}
        errorText="Please enter a valid address (at least 2 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;