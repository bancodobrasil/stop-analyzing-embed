import React from 'react';
import LikeBoard from './LikeBoard';
import ChoiceBoard from './ChoiceBoard';

const components = {
    'likeMode': LikeBoard,
    'choiceMode': ChoiceBoard
}

function Index(props) {

    const { mode } = props;
    const TheComponent = components[mode] ?components[mode] : components.choiceMode;


    return (
        <section className="container">
            <div className="row vh-100">
                <div className="col-12 my-auto">
                    <TheComponent/>
                </div>
            </div>
        </section>
    )
}

export default Index