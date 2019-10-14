import axios from 'axios';
export function login(attribute) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', attribute)
            .then((response) => {
                res(response.data)
            })
            .catch((errors) => {
                rej('mot de passe et email sont invalides !')
            })
    })
}
export function register(attribute) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/register').then(response => {
            res(response.data)
        }).catch(errors => {
            rej('champ invalide !!')
        })
    })
}

export function getLocalUser() {
    const user = localStorage.getItem('user');
    if (!user) {
        return null
    } else {
        return user;
    }
}