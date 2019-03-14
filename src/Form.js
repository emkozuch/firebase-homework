import React from 'react'
import { Button, Form, Segment, Header, Message } from 'semantic-ui-react'
import { db } from './firebase';

class UserForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        formFilled: true
    }

    handleChange = (e, { name }) => {
        this.setState({ [name]: e.target.value })
    }

    handleSubmit = () => {
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.age !== '') {
            db.ref('/users/').push({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
            });
            this.setState({
                firstName: '',
                lastName: '',
                age: '',
                formFilled: true
            })
        } else {
            this.setState({
                formFilled: false
            })
        }
    }

    render() {
        const formFilled = this.state.formFilled;
        let message
        if (!formFilled) {
            message = <Message color='red'> Fill all fields to proceed</Message>
        }
        return (
            <Segment inverted>
                <Header inverted size='medium' color='blue'>Add User</Header>
                <Form inverted>
                    <Form.Group widths='equal'>
                        <Form.Input type='text' fluid label='First name' name='firstName' value={this.state.firstName} onChange={this.handleChange} required />
                        <Form.Input type='text' fluid label='Last name' name='lastName' value={this.state.lastName} onChange={this.handleChange} required />
                        <Form.Input type='number' fluid label='Age' name='age' value={this.state.age} onChange={this.handleChange} required />
                    </Form.Group>
                    {message}
                    <Button className="submit-btn" inverted color='blue' type='button' onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Segment>
        )
    }
}
export default UserForm