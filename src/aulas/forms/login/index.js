import e from 'cors';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'teste@gmail.com',
            senha: 'admin1',
            sexo: 'masculino'
        }

        this.trocaEmail = this.trocaEmail.bind(this);
    }

    trocaEmail(e) {
        let valorDigitado = e.target.value;

        this.setState({ email: valorDigitado });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <label>E-mail</label>
                    <input type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.trocaEmail} />
                </div>
                <br />
                <div>
                    <label>Senha</label>
                    <input type="password"
                        name="senha"
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })} />
                </div>
                <br /><hr />
                <div>
                    <h3>Sexo:</h3>
                    <select name="sexo"
                        value={this.state.sexo}
                        onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div><br /><hr />
                <div>
                    <h3>Email</h3>
                    <span>{this.state.email}</span>
                </div>
                <div>
                    <h3>Senha</h3>
                    <span>{this.state.senha}</span>
                </div>
                <div>
                    <h3>Sexo</h3>
                    <span>{this.state.sexo}</span>
                </div>
            </div>
        )
    }
}

export default Login;