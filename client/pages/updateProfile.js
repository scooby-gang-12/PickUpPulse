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
        // console.log("target value", e.target.value)
        setUserBio((prev) => e.target.value)
        console.log("user bio", userBio);
    }
    const handlefavoriteSportChange = (e) => {
        // console.log("target value", e.target.value)
        setFavoriteSport((prev) => e.target.value)
        console.log("favoriteSport", favoriteSport);
    }

    const favSportsArr = userInfo.favoriteSports.map(sport => ` ${sport}`)
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     axios.patch('/api/users/updateUser', {
    //         "$set" : { userLocation: userLocation},
    //         "$set": { userBio: userBio},
    //         favoriteSports: (input) => favoriteSport.push(input)
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(err => console.error(err));
    // }

    const userID = userInfo._id;
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
 
        console.log("userID", userID);
        
        axios.patch('/api/users/updateUser', {
            "$set" : { userLocation: userLocation},
            "$set": { userBio: userBio},
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
                Location: <input name="userLocation" placeholder="Enter your location" value={userInfo.userLocation} onChange={handleLocationChange} />
            </label>
            <br/>
            <label>
                Bio:
                <textarea
                    name="bioContent"
                    placeholder="Enter bio here."
                    value={userInfo.userBio}
                    rows={10}
                    cols={40}
                    onChange={handleBioChange}
                />
            </label>
            <br/>
            <label>
                Favorite Sports: <input name="favoriteSports" defaultValue={favSportsArr} onChange={handlefavoriteSportChange}
            />
            </label>
            <hr />
            <button type="submit">Save changes</button>
        </form>
    )
}

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     padding: 2rem;
//     font-family: var(--primary-font);

    
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

