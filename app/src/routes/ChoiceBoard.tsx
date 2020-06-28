import React from 'react';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import image1 from './../assets/images/andrew-johnson-ULKR-8CtHmM-unsplash.jpg';
import image2 from './../assets/images/providence-doucet-FjwtL3YSZ9U-unsplash.jpg';

import styled from 'styled-components';
import TimerComponent from '../components/TimerComponent/TimerComponent';

const H3 = styled.h3`
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    color: #2e2a27;
`;

function ChoiceBoard() {
    return (
        <section className="container">
            <div className="row vh-100">
                <div className="col-12 my-auto">
                    <div className="row text-center">
                        <H3>
                            Which one would you like to choose?{' '}
                            <TimerComponent timeout={15} />
                        </H3>
                        <div className="col-lg-12 mb-4">
                            <ProgressBar />
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-6 mb-4">
                            <Card
                                title="Choice 1"
                                paragraph="That's a good choice!"
                                imageURL={image1}
                                ariaLabel="light pink rose"
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <Card
                                title="Choice 2"
                                paragraph="Nope, that's a good choice!"
                                imageURL={image2}
                                ariaLabel="pink rose in full bloom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChoiceBoard;
