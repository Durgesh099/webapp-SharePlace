import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import PlacesList from "../PlacesList";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UserPlaces = () =>{
    const [loadedPlaces, setLoadedPlaces]= useState()
    const {isLoading,error,clearError,sendRequest}= useHttpClient()

    const userId = useParams().userId;

    useEffect(()=>{
        const fetchPlaces = async ()=>{
            try{
                const responseData = await sendRequest(`http://localhost:3000/api/places/user/${userId}`)
                setLoadedPlaces(responseData.places)
            }catch(err){

            }
        }
        fetchPlaces()
    },[sendRequest,userId])

    const PlaceDeletedHandler = (deletedPlaceId)=>{
        setLoadedPlaces(prevPlaces=> prevPlaces.filter(
            place => place.id !== deletedPlaceId
        ))
    }
    console.log(loadedPlaces)
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            {isLoading && 
                <div className="center">
                    <LoadingSpinner/>
                </div>}
            {!isLoading && loadedPlaces && <PlacesList items={loadedPlaces} onDeletePlace={PlaceDeletedHandler}/>}
        </React.Fragment>
    )
};

export default UserPlaces;