import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css'; 


const Events = () => {
    const dummyEvents = [
        {
            _id: "1",
            title: "Coding Contest",
            description: "A thrilling coding competition where participants solve problems and compete for prizes.",
            imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
            lastDate: "2024-10-05",
            organizer: "Tech Club",
        },
        {
            _id: "2",
            title: "Technical Quiz",
            description: "Test your technical knowledge in this exciting quiz with participants from various backgrounds.",
            imageUrl: "https://images.unsplash.com/photo-1605902394069-ff2ae2430e62?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            lastDate: "2024-09-30",
            organizer: "Quiz Masters",
        },
        {
            _id: "3",
            title: "Project Expo",
            description: "Showcase your projects and innovative ideas in this annual expo open to all students.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            lastDate: "2024-11-15",
            organizer: "Innovation Hub",
        },
        {
            _id: "4",
            title: "Hackathon 2024",
            description: "Join our 48-hour hackathon and work on projects with like-minded individuals for a chance to win great prizes.",
            imageUrl: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            lastDate: "2024-11-20",
            organizer: "Dev Community",
        },
        {
            _id: "5",
            title: "Sports Day",
            description: "Participate in various sports and compete for the championship in this fun-filled day.",
            imageUrl: "https://images.unsplash.com/photo-1617170816391-ebe31dd5bdc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            lastDate: "2024-10-15",
            organizer: "Sports Committee",
        },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center">Upcoming Events</h2>
            <div className="row">
                {dummyEvents.length === 0 ? (
                    <div className="col-12 text-center">
                        <h4>No Events Found</h4>
                        <p>Please check back later.</p>
                    </div>
                ) : (
                    dummyEvents.map(event => (
                        <div className="col-md-4 mb-4" key={event._id}>
                            <div className="card">
                                <img src={event.imageUrl} className="card-img-top event-img" alt={event.title} />
                                <div className="card-body">
                                    <h5 className="card-title text-white">{event.title}</h5>
                                    <p className="card-text">{event.description.slice(0, 100)}...</p>
                                    <Link to={`/events/${event._id}`} className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Events;