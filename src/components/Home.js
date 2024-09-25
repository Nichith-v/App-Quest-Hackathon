import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container mt-5">

            <div class="px-4 pt-3 mt-2 text-center">
                <h1 class="display-5 fw-bold my-3">Welcome to Festo Events - Event Management</h1>
                <div class="col-lg-8 mx-auto">
                    <p class="lead mb-1">Our events ignite passion and challenge thinking, uniting attendees from diverse backgrounds. Whether you're an expert or a newcomer, you'll discover engaging workshops and discussions that ignite creativity and expand your horizons</p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4 ">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Technical Events</h5>
                            <p className="card-text">Participate in coding challenges, hackthons, and workshops designed to enhance your skills and push your limits as a tech enthusiast.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title ">Non-Technical Events</h5>
                            <p className="card-text ">Discover non-technical events that inspire creativity and connection, form art and music contests to gaming tournaments and more</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title ">Sport Events</h5>
                            <p className="card-text ">Sport Events feature fast-paced challenges that let participants showcase their skills and creativity in a lively, competitive atmosphere.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
