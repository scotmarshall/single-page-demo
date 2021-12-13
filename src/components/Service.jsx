import React, { useState } from "react";
import styled from "styled-components";
import How from "../img/how.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";

const Container = styled.div`
    display: flex;
    
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    position: relative;

    @media only screen and (max-width:480px){
        display: none;
    }
`;

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 90%;
    margin-left: 60px;
    margin-top: 40px;
`;

const Video = styled.iframe`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    width: 500px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border: none;

    @media only screen and (max-width:480px){
        width: 100%;
    }
`;

const Right = styled.div`
    width: 50%;

    @media only screen and (max-width:480px){
        width: 100%;
    }
`;

const Wrapper= styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width:480px){
        padding: 20px;
    }
`;

const Title = styled.h1`
    
`;

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30px;
`;

const Service = () => {

    const [open, setOpen] = useState(false);

    const smallScreen = window.screen.width <= 480 ? true : false;

    return (
        <Container>
            <Left>
                <Image open={open} src={How}/>
                <Video
                    open={open}
                    src="https://www.youtube.com/embed/nHhAEkG1y2U"
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>We provide digital experience services to startups and small
                        businesses looking for a partner with their digital media, design &
                        development, lead generation and communications requirements. We work
                        with you, not for you. Packages include great resources!</Desc>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play}/>
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video
                        open={open}
                        src="https://www.youtube.com/embed/nHhAEkG1y2U"
                    />
                    <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
};

export default Service;
