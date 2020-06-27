import React from 'react';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';

import styled from 'styled-components';

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
                        <H3>Which one would you like to choose?</H3>
                        <div className="col-lg-12 mb-4">
                            <ProgressBar />
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-6 mb-4">
                            <Card
                                title="Choice 1"
                                paragraph="That's a good choice!"
                                imageURL="https://images.unsplash.com/photo-1565995240383-ed5204015aee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2160&q=80"
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <Card
                                title="Choice 2"
                                paragraph="Nope, that's a good choice!"
                                imageURL="https://picsum.photos/seed/x2/200/300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChoiceBoard;
