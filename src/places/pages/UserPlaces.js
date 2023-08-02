import React from "react";
import {useParams} from "react-router-dom";
import PlacesList from "../PlacesList";

const PLACES = [
    {
        id:'p1',
        title: 'Osho Garden',
        description: 'Wonderful nature spot',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNtm6B4FA2H1ZS94AuHsvtCfvwkonU39qYQT-Mh=s1360-w1360-h1020',
        address: 'D. H. Dhunjibhoy Road, Between Lane Number 2 and 3, Koregaon Rd, Koregaon Park, Pune, Maharashtra 411001',
        location: {
            lat:18.5358733,
            lng:73.8546432
        },
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

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPLACES = PLACES.filter(place => place.creator===userId);

    return <PlacesList items={loadedPLACES} />;
};

export default UserPlaces;