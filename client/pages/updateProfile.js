import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";

import {useSelector} from 'react-redux'

export default function UpdateProfile() {
    const {userInfo} = useSelector(state=>state.auth) 

    const [userData, setUserData] = useState({})

    const [userLocation, setUserLocation] = useState('')
    const [userBio, setUserBio] = useState('')
    const [favoriteSport, setFavoriteSport] = useState('')

// define button functionality here

    const handleLocationChange = (e) => {
        setUserLocation((prev) => e.target.value)
        console.log("user location", userLocation);
    }

    const handleBioChange = (e) => {
        setUserBio((prev) => e.target.value)
        console.log("user bio", userBio);
    }

    const handlefavoriteSportChange = (e) => {
        setFavoriteSport((prev) => e.target.value.split(', '))
        console.log("favoriteSport", favoriteSport);
    }

    const favSportsArr = userInfo.favoriteSports.map(sport => ` ${sport}`)
    
    
    const userID = userInfo._id;
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
 
        console.log("userID", userID);
        
        axios.patch('/api/users/updateUser', {
            _id: userID,
            userLocation: userLocation,
            userBio: userBio,
            favoriteSport: favoriteSport
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => console.error(err));
    }


    return (
      
        <form onSubmit={handleSubmit}>
            <label>
                <Location>Location:</Location> <input name="userLocation" placeholder="Enter your location" defaultValue={userInfo.userLocation} onChange={handleLocationChange} />
            </label>
            <br/>
            <label>
                <Bio>Bio:</Bio>
                <textarea
                    name="bioContent"
                    placeholder="Enter bio here."
                    defaultValue={userInfo.userBio}
                    rows={10}
                    cols={40}
                    onChange={handleBioChange}
                />
            </label>
            <br/>
            <label>
                <FavSports>Favorite Sports:</FavSports>
                <textarea
                    name="favoriteSport"
                    placeholder="Enter bio here."
                    defaultValue={favSportsArr}
                    rows={3}
                    cols={40}
                    onChange={handlefavoriteSportChange}
                />
                {/* Favorite Sports: <input name="favoriteSports" defaultValue={favSportsArr} onChange={handlefavoriteSportChange}
            /> */}
            </label>
            <hr />
            <button type="submit">Save changes</button>
        </form>
    )
}

const Location = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    // flex-direction: column;
    // padding: 2rem;
    font-family: var(--primary-font);

    
// `
const Bio = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    // flex-direction: column;
    // padding: 2rem;
    font-family: var(--primary-font);

    
// `
const FavSports = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    // flex-direction: column;
    // padding: 2rem;
    font-family: var(--primary-font);

    
// `
// const PageDisplay = styled.div`
//     display:flex;
//     flex-direction: row;
//     justify-content: center;
//     gap: 2rem;
//     h3 {
//         font-size: 4rem;
//         justify-content: center
//     }
// `
// const UserInfoDisplay = styled.div`
//     display:flex;
//     flex-direction: column;
//     justify-content: start;
//     border: 3px;
//     gap: 2rem;
//     h3 {
//         font-size: 4rem;
//         justify-content: center
//     }
// `

// const UserProfile = styled.div`
//     display:flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: start;
//     border: 3px;
//     gap: 2rem;
//     font-size: 1rem;
//     font-family: var(--tertiary-font);
//     margin-top: -2rem;
//     padding: 0;
// `

