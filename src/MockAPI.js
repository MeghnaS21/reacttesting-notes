import axios from 'axios'
const fetchUser=()=>{
    return axios.get('https://jsonplace.typicode.com/users/1')
}
export default fetchUser