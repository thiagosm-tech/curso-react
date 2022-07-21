import React, { Component } from 'react';

class CadastroUsuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                nome: '',
                email: '',
                senha: '',
                sexo: '',
                error: '',
            }
        }

        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value
        this.setState({ form: form });
    }

    cadastraUsuario(e) {
        e.preventDefault();
        const { nome, email, senha } = this.state;

        if (nome !== '' && email !== '' && senha !== '') {
            console.log(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
            this.setState({ error: '' })
        } else {
            this.setState({ error: 'preencha os campos obrigatorios' });
        }
    }

    render() {
        return (
            <div>
                <h1>Novo usuário</h1>
                <div>
                    {this.state.error && <span>{this.state.error}</span>}
                </div><br />
                <form onSubmit={this.cadastraUsuario}>
                    <div>
                        <label>Nome:</label>
                        <input  type="text"
                                name='nome'
                                value={this.state.form.nome}
                                onChange={this.dadosForm} />
                    </div><br />
                    <div>
                        <label>Email:</label>
                        <input  type="email"
                                name='email'
                                value={this.state.form.email}
                                onChange={this.dadosForm} />
                    </div><br />
                    <div>
                        <label>Senha:</label>
                        <input  type="password"
                                name="senha"
                                value={this.state.form.senha}
                                onChange={this.dadosForm} />
                    </div><br />
                    <div>
                        <label>Sexo:</label>
                        <select value={this.state.form.sexo}
                                onChange={this.dadosForm}
                                name='sexo'>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                        </select>
                    </div><br />
                    <button type="submit">Cadastrar</button>
                </form>

                <div>
                    <span>Nome:</span>
                    {this.state.form.nome}
                </div>
                <div>
                    <span>Email:</span>
                    {this.state.form.email}
                </div>
                <div>
                    <span>Senha:</span>
                    {this.state.form.senha}
                </div>
                <div>
                    <span>Sexo</span>
                    {this.state.form.sexo}
                </div>
            </div>
        )
    }
}

export default CadastroUsuario;