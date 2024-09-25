import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/events/${id}`); // Adjust the URL according to your API
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event detail', error);
            }
        };
        fetchEvent();
    }, [id]);

    if (!event) return <p>Loading...</p>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <h2>{event.title}</h2>
                    <img src={event.imageUrl} className="img-fluid float-end ms-3" alt={event.title} />
                    <p><strong>Organized by:</strong> {event.organizer}</p>
                    <p><strong>Last Date to Apply:</strong> {new Date(event.lastDate).toLocaleDateString()}</p>
                    <p>{event.description}</p>
                    <button className={`btn ${new Date(event.lastDate) < new Date() ? 'btn-secondary' : 'btn-success'}`} disabled={new Date(event.lastDate) < new Date()}>
                        {new Date(event.lastDate) < new Date() ? 'Application Closed' : 'Apply Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
