import React, {useState, useEffect} from "react";
import styled from 'styled-components';

// import {useSelector} from 'react-redux'

export default function UpdateProfile() {
    const [userData, setUserData] = useState({})
    const [userLocation, setUserLocation] = useState('')
    const [userBio, setUserBio] = useState('')
    const [favoriteSport, setFavoriteSport] = useState('')
    // const {userInfo} = useSelector(state=>state.auth)
    // console.log(userInfo)

// define button functionality here
    const handleLocationChange = (e) => {
        console.log("target value", e.target.value)
        setUserLocation((prev) => e.target.value)
        console.log("user location", userLocation);
    }
    const handleBioChange = (e) => {
        console.log("target value", e.target.value)
        setUserBio((prev) => e.target.value)
        console.log("user bio", userBio);
    }
    const handlefavoriteSportChange = (e) => {
        console.log("target value", e.target.value)
        setFavoriteSport((prev) => e.target.value)
        console.log("favoriteSport", favoriteSport);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        fetch('/', {method: PATCH, body: formData});

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }


    return (
      
                        <form method="PATCH" onSubmit={handleSubmit}>
                            <label>
                                Location: <input name="userLocation" placeholder="Enter your location" defaultValue={userLocation} onChange={handleLocationChange} />
                            </label>
                            <br/>
                            <label>
                                Bio:
                                <textarea
                                name="bioContent"
                                placeholder="Enter bio here."
                                rows={10}
                                cols={40}
                                onChange={handleBioChange}
                                />
                            </label>
                            <br/>
                            <label>
                                Favorite Sports: <input name="favoriteSports" placeholder="Favorite sports?" 
                                onChange={handlefavoriteSportChange}
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

