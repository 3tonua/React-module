import React from 'react';
import {Link} from 'react-router';
import API from './API';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: 350,
    width: 500,
    margin: 15,
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    padding: 15
};
const textSize = {
    textSize: 50
};

class OneUser extends React.Component{
    constructor(){
        super();
        this.state = {
            user: {}
        }
    }
    componentDidMount(){
        let userLogin = this.props.params.login;
        console.log(userLogin);
        API.getOneUser(userLogin).then((oneUser) => {
            console.log(oneUser);
            this.setState({
                user: oneUser.data
            })
        });
    }
    render() {
        return(
            <div>
                <Link  to="/">
                    <IconButton tooltip="Home">
                        <ActionHome />
                    </IconButton>
                </Link>
                <Paper style={style} zDepth={2} >
                    <List>
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar
                                    src={this.state.user.avatar_url}
                                    size={100}/>
                            }>
                            <h2 style={textSize}>{this.state.user.name}</h2>
                        </ListItem>
                    </List>
                    <p>{this.state.user.login}</p>
                    <p>{this.state.user.email}</p>
                    <p><a href={this.state.user.html_url} target="_blank">GitHub</a></p>
                </Paper>
            </div>
        )
    }
}

export default OneUser;