import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import API from './API';

const style={
    textAlign: "center"
};

class TextFieldEnter extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            value: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        console.log(this.state.value)
    };

    render() {
        return (
            <div style={style}>
                <TextField
                    floatingLabelText="Search for repositories"
                    id="text-field-controlled"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <RaisedButton label="Go" style={style} />
                <p>{this.state.value}</p>
            </div>
        );
    }
}
export default TextFieldEnter;