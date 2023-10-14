import styled from "styled-components";
import image1 from '/public/images/closeup-basketball.jpg';
import image2 from '/public/images/closeup-golfball.jpg';

export const GameCard = styled.div`
  margin: 10px;
  padding: 20px;
  width: 75%;
  height: auto;
  box-shadow: 0 0 0 5px #5fadee;
  outline: dashed 5px #ff6463;
  border-radius: 30px;
  justify-items: center;
  text-align: center;

  &.basketball {
    background-image: url(${image1});
    background-size: 100% 100%;
  }
 
  &.golf {
    background-image: url(${image2});
    background-size: 100% 100%;
  }
`;


export const GameName = styled.p`
  font-size: 20px;
  font-family: var(--secondary-font);
`;

export const Address = styled.p`
  font-size: 20px;
  font-family: var(--secondary-font);
`;

export const DateTime = styled.p`
  font-size: 20px;
  font-family: var(--secondary-font);
  font-weight: bold;
`;

export const EditButton = styled.button`
  background-color: #5fadee;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  
  &.EditButton:hover {
    background-color: #fff;
  }

  &.EditButton:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;

export const DeleteButton = styled.button`
  background-color: #ffaeaf;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &.DeleteButton:hover {
    background-color: #fff;
  }

  &.DeleteButton:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;