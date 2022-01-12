import React from 'react'
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className='home'>
                <Banner/>
            <div className='home__section'>

                <Card
                src = "https://a0.muscache.com/im/pictures/e6b82241-d83c-4b55-8a95-005a4d84756e.jpg?im_w=720"
                title="Entire homes"
                description = "Comfortable private places , with room for friends or family"
                />
                <Card
                src = "https://a0.muscache.com/im/pictures/4f7e347c-b912-4872-b984-c1fdd8f99936.jpg?im_w=720"
                title="Entire homes"
                description = "Comfortable private places , with room for friends or family"
                />
                <Card
                src = "https://a0.muscache.com/im/pictures/0d2a35d9-1cb2-42a6-a2e9-65d77eafff54.jpg?im_w=720"
                title="Entire homes"
                description = "Comfortable private places , with room for friends or family"
                />
                <Card
                src = "https://a0.muscache.com/im/pictures/825fb7b1-e3c1-413e-8a7d-4ddb567f936d.jpg?im_w=720"
                title="Entire homes"
                description = "Comfortable private places , with room for friends or family"
                />
                
               
            
                
                
            </div>
            <div className='home__section'>

                <Card 
                src="https://a0.muscache.com/im/pictures/4095ecf0-bf34-4f20-94c6-b4767bdcce6e.jpg?im_w=720"
                title="Penthhouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price= "$350/night"
                />
                 <Card 
                src="https://a0.muscache.com/im/pictures/6d96f130-c0f1-49de-b63b-a9c89f78be3a.jpg?im_w=720"
                title="Penthhouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price= "$350/night"
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/e443bbb9-a971-42ad-b383-0793fd3ec7cd.jpg?im_w=720"
                title="Penthhouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price= "$350/night"
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/6a57e23c-0bdd-43dc-ac5d-31285d25c764.jpg?im_w=720"
                title="Penthhouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price= "$350/night"
                />
            </div>
        </div>
    )
}

export default Home
