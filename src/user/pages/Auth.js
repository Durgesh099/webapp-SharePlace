import React , {useState} from "react";
import Input from "../../shared/FormElements/Input";
import Card from "../../shared/components/Card";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/FormElements/Validators";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/Button";
import './Auth.css';
 
const Auth= () =>{

    const[isLogin, setisLogin]= useState(true);

    const[formState, inputHandler ,setFormData]= useForm({
            email:{
                value:'',
                isValid:false
            },
            password:{
                value:'',
                isValid:false
            }
        }, false
    );

    const switchMode =()=> {
        if(!isLogin){
            setFormData(
            {
                ...formState.inputs,
                name: undefined
            },
            formState.inputs.email.isValid &&
            formState.inputs.password.isValid);
        }
        else{
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false}
                },
                false);
        }
        setisLogin(prevMode => !prevMode);
    };

    const authFormHandler=(event)=>{
        event.preventDefault();
    };


    return (
        <Card className="auth">
        <form onSubmit={authFormHandler}>
            {isLogin?<h2 className="center">Login</h2>:
            <h2 className="center">Sign up</h2>}

            {!isLogin &&
            <Input
                element='input'
                id='name'
                type='text'
                label='Your Name'
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                errorText='Please enter a name'
            />}

            <Input
                element='input'
                id='email' 
                type='email'
                label='E-Mail'
                validators={[VALIDATOR_EMAIL()]}
                errorText='Please enter valid emaid id'
                onInput={inputHandler}
            /><br/>
            <Input
                element='input'
                id='password' 
                type='password'
                label='Password'
                validators={[VALIDATOR_MINLENGTH(4)]}
                errorText='Please enter correct password'
                onInput={inputHandler}
            />
            <div className='center'>
            <Button disabled={!formState.isValid}>
                {isLogin ? 'Login' : 'Sign up'}
            </Button>
            <Button onClick={switchMode}>
                Switch to {isLogin ? 'Sign up' : 'Login'}
            </Button>
            </div>
        </form>
        </Card>
    );
};

export default Auth;