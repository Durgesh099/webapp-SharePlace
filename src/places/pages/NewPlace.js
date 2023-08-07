import React from 'react';

import Input from '../../shared/FormElements/Input';

import './PlaceForm.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter valid text"
      />
    </form>
  );
};

export default NewPlace;