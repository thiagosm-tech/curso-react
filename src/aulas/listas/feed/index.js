import React, { Component } from 'react';

class Feed extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.username}</h3>
                <span>{this.props.curtidas > 1 ? this.props.curtidas + 'curtidas ' : 'curtida '}
                    / {this.props.comentarios > 1 ? this.props.comentarios + ' comentarios' : ' comentario'}</span>
                <hr />
            </div>
        )
    }
}

export default Feed;