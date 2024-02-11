import React, { Component } from "react";

class Form extends Component {
    initialState = {
        name: '',
        job: ''
    }

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state

        return (
            <form>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Digite seu nome"
                />
                <label htmlFor="job"> Função:</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                    placeholder="Digite sua função"
                />
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}
                />
            </form>
        )
    }
}

export default Form;