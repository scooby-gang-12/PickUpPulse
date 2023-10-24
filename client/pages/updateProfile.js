import React, {useState} from "react";
import styled from 'styled-components';

// import {useSelector} from 'react-redux'

export default function updateProfile({location, bio, favSport, onSubmit, onClose}) {
    const  [userData, setUserData] = useState({

    })
    // const {userInfo} = useSelector(state=>state.auth)
    // console.log(userInfo)

// define button functionality here
    const handleInputChange = (e) => {
        const {userLocation, userBio, favSport} = e.target;
        setUserData ({
            ...userData
        })
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
                                Location: <input name="userLocation" defaultValue="Enter your location" />
                            </label>
                            <br/>
                            <label>
                                Bio:
                                <textarea
                                name="bioContent"
                                defaultValue="Enter bio here."
                                rows={10}
                                cols={40}
                                onChange={handleInputChange}
                                />
                            </label>
                            <br/>
                            <label>
                                Favorite Sports: <input name="favoriteSports" defaultValue="Favorite sports?" 
                                onChange={handleInputChange}
                                />
                            </label>
                            <hr />
                            <button type="submit">Save changes</button>
                        </form>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    font-family: var(--primary-font);

    
`
const PageDisplay = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    h3 {
        font-size: 4rem;
        justify-content: center
    }
`
const UserInfoDisplay = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: start;
    border: 3px;
    gap: 2rem;
    h3 {
        font-size: 4rem;
        justify-content: center
    }
`

const UserProfile = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border: 3px;
    gap: 2rem;
    font-size: 1rem;
    font-family: var(--tertiary-font);
    margin-top: -2rem;
    padding: 0;
`

