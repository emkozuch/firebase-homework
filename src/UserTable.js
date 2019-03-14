import React from 'react'
import { Table, Header, Segment} from 'semantic-ui-react'
import { db } from './firebase';

class UsersTable extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        db.ref('/users').on('value', (snapshot) => {
            const users = [];
            Object.entries(snapshot.val()).forEach(elem => {
                const user = {
                    id: elem[0],
                    ...elem[1]
                }
                users.push(user)
            });
            this.setState({ users });
        });
    }
    render() {
        return (
            <Segment inverted>
                <Header inverted size='medium' color='blue'>Users List</Header>
                <Table celled inverted selectable textAlign='center' columns={3}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>FIRST NAME</Table.HeaderCell>
                            <Table.HeaderCell>LAST NAME</Table.HeaderCell>
                            <Table.HeaderCell>AGE</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.users.map(user => (
                            <Table.Row key={user.id}>
                                <Table.Cell>{user.firstName}</Table.Cell>
                                <Table.Cell>{user.lastName}</Table.Cell>
                                <Table.Cell >{user.age}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Segment>
        )
    }
}
export default UsersTable


