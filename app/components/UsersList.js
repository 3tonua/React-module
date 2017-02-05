import React from 'react';
import API from './API';
import AllUsers from './AllUsers';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

const styleBlock = {
    display: "inline-block"
};
const textCenter ={
    textAlign: "center",
    margin: 5
};

class UsersList extends React.Component{
    constructor(){
        super();
        this.state = {
            users: [],
            value: ''
        }
    }
    /*componentDidMount(){
        API.getAllUsers().then((allUsers) => {
            // console.log(allUsers);
            this.setState({
                users: allUsers
            })
        });
        this.props.dispatch(getUsers())
    }*/
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        let userValue = this.state.value;
        console.log(userValue);
        API.getAllUsers(userValue).then((allUsers) => {
            // console.log(allUsers);
            this.setState({
                users: allUsers
            })
        });
    };

    clearAll = () => {
        this.setState({
            users: [],
            value: ''
        })
    };

    render(){
        return(
            <div>
                <div style={textCenter}>
                    <TextField style={textCenter}
                        floatingLabelText="Search for repositories"
                        id="text-field-controlled"
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    />
                    <RaisedButton label="Clear all" onClick={this.clearAll} style={textCenter}/>
                    {/*<p>{this.state.value}</p>*/}
                </div>
                {
                this.state.users.map((user) => {
                    return <div style={styleBlock} key={user.id}>
                        <AllUsers name={user.name}
                              login={user.owner.login}
                              stars={user.stargazers_count}
                            />
                    </div>
                })
            }
            </div>
        )
    }
}

export default UsersList;