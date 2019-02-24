import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    render() {
        const cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                         title={card.title}
                         description={card.description}
                         color={card.color}
                         tasks={card.tasks}
                    />
        });

        return(
            <div className="list">
                <h2>{this.props.title}</h2>
                {cards}
            </div>
        );
    }
}

export default List;