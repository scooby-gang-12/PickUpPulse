import { styled } from "styled-components";

export const StyledGameInfo = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    

    h1 {
      font-family: var(--primary-font);
      font-size: 5rem;
    }
    h3 {
      font-family: var(--tertiary-font);
      font-size: 2.5rem;
    }

    section {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      place-items: center;
      
    }
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      height: 8rem;
    }

    .details-num {
    
    font-size: 4rem;
    font-family: var(--tertiary-font);
    
    }

`