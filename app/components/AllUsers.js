import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: 200,
    width: 250,
    margin: 15,
    textAlign: 'left',
    display: 'block',
    position: 'relative',
    padding: 15
};

class AllUsers extends React.Component {
    constructor(){
        super();
        this.state = {
            user: null
        }
    }
    goToOpen(){
        this.props.router.push('/open/login');
        console.log();
        this.setState = {
            user: this.props.params.login
        };
        let userLogin = this.state.user;
        console.log(userLogin);
    }
    render(){
        return(
            <div>
                <Paper style={style} zDepth={2} >
                    <p>Repository: {this.props.name}</p>
                    <p>User: {this.props.login}</p>
                    <p>Stars: {this.props.stars}</p>
                    <Link to={"/open/" + this.props.login}>
                        <RaisedButton label="Open" fullWidth={true} onClick={this.goToOpen.bind(this)}/>
                    </Link>
                </Paper>
            </div>
        )
    }
}

export default AllUsers;