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
        location: 'https://www.google.com/maps/place/Osho+Teerth+Park/@18.5358784,73.8881172,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1004113e727:0xdb7ded8050f08a1f!8m2!3d18.5358733!4d73.8906921!16s%2Fg%2F1tfzkswy?entry=ttu' ,
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'SGS Mall',
        description: 'Shopping complex',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipM9ndLlUV30d9BzJfMnRag_J_aL6xOzGoOKMDvR=w408-h544-k-no',
        address: '231, Moledina Rd, Camp, Pune, Maharashtra 411001',
        location: 'https://www.google.com/maps/place/SGS+Mall,+231,+Moledina+Rd,+Camp,+Pune,+Maharashtra+411001/@18.5195803,73.8747989,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c04ff9abd0cd:0xe76fee73118c11d3!8m2!3d18.5195803!4d73.8773738!16s%2Fg%2F1ptxqbhsl?entry=ttu',
        creator: 'u2'
    }
];

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPLACES = PLACES.filter(place => place.creator===userId);

    return <PlacesList items={loadedPLACES} />;
};

export default UserPlaces;