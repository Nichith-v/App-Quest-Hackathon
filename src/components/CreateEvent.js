import React, { useState } from 'react';
import axios from 'axios';
import './CreateEvent.css';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        lastDate: '',
        organizer: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/events', eventData); // Adjust the URL according to your API
            alert('Event created successfully!');
        } catch (error) {
            console.error('Error creating event', error);
            alert('Failed to create event.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Create Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Event Name</label>
                    <input type="text" className="form-control" name="title" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input type="url" className="form-control" name="imageUrl" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Date to Apply</label>
                    <input type="date" className="form-control" name="lastDate" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Organizer Name</label>
                    <input type="text" className="form-control" name="organizer" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
