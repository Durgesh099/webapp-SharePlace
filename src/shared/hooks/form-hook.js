import {useCallback, useReducer} from "react";

const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };

      case 'SET_DATA':
        return{
          inputs: action.inputs,
          formIsValid: action.formValidity
        };

      default:
        return state;
    }
};

export const useForm= (initialized_inputs,initialized_isVALID)=> {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialized_inputs,
        isValid: initialized_isVALID
    });

      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id
        });
    }, []);

    const setFormData = useCallback((inputData, formValidity)=>{
      dispatch({
        type: 'SET_DATA',
        inputs : inputData, 
        formIsValid: formValidity
      });
    },[]

    );


      return [formState,inputHandler,setFormData];
};