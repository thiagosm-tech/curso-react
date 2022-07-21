import React, { Component } from 'react';

import Feed from './feed';

class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feed: [
                { id: 1, username: 'Thiago', curtidas: 10, comentarios: 15 },
                { id: 2, username: 'Juliano', curtidas: 20, comentarios: 40 },
                { id: 3, username: 'Julia', curtidas: 30, comentarios: 1 },
                { id: 4, username: 'Fernando', curtidas: 1, comentarios: 20 },
                { id: 5, username: 'Eduarda', curtidas: 15, comentarios: 10 },
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.feed.map(user => {
                        return (
                            <Feed   key={user.id}
                                    username={user.username}
                                    curtidas={user.curtidas}
                                    comentarios={user.comentarios} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Lista;