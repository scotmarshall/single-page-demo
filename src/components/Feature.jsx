import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
    display: flex;
    margin-top: 20px;

    @media only screen and (max-width:480px){
        flex-direction: column;
        padding: 30px 20px;
    }
`;

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width:480px){
        display: none;
    }
`;

const Image = styled.img`
    width: 80%;
    margin-top: 55px;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;

    @media only screen and (max-width:480px){
        width: 100%;
    }
`;

const Title = styled.span`
    font-size: 70px;

    @media only screen and (max-width:480px){
        font-size: 50px;
    }
`;

const Subtitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`;

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`;

const Button = styled.button`
    width: 200px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`;

const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={App}/>
            </Left>
            <Right>
                <Title>
                    <b>good</b> design<br/>
                    <b>good</b> business
                </Title>
                <Subtitle>We know that good design means good business.</Subtitle>
                <Desc>We help our clients succeed by creating brand identities, digital
                    experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.</Desc>
                <Desc>We care about your business and guarantee you will achieve your 
                    marketing goals.</Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
};

export default Feature;