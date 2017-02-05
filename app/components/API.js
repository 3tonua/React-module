import axios from 'axios';
import React from 'react';
import UsersList from './UsersList';


let API = {
    getAllUsers: function (userValue) {
        console.log(userValue);
        return new Promise(function (resolve, reject) {
            axios.get('https://api.github.com/search/repositories', {
                params: {
                    q: userValue,
                    per_page: 30
                }
            }).then(function (allUsers) {
                resolve(allUsers.data.items);
                console.log(allUsers.data.items)
            })
        })
    },
    getOneUser: function (userLogin) {
        console.log(userLogin);
        return new Promise(function (resolve, reject) {
            axios.get('https://api.github.com/users/' + userLogin).then(function (oneUser) {
                resolve(oneUser);
                console.log(oneUser)
            })
        })
    }
};

export default API;