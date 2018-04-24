import Login from '../components/login';
export const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('Token')

}