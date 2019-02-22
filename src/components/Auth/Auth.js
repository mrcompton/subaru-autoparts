import React, { Component } from 'react'
// import axios from 'axios'
import './Auth.css'
import axios from 'axios'
import {updateUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (prop,val) => {
        this.setState({
            [prop]: val
        })
    }

    handleRegister = () => {
        const {email,password} = this.state
        axios.post('/api/register',{email,password})
        .then( response => {
            this.props.updateUser(response.data)
            this.props.history.push('/')
        })
        .catch(err => {
            console.log(err)
            window.alert('User already exists in our system.')
        })
    }   

    handleLogin = () => {
        const {email, password} = this.state
        axios.post('/api/login',{email,password})
        .then( response => {
            this.props.updateUser(response.data)
            this.props.history.push('/')
        })
        .catch(err =>{
            console.log(err)
            window.alert('Invalid username or password.')
        })
    }

    render() {
        return (
            <div className='auth-body'>
                <h2>Login / Register</h2>
               
                <div className='form-container'>
                    <div className='form'>
                        <h3>Login</h3>
                        <div>Email: </div>
                        <input onChange={(e) => this.handleChange('email',e.target.value)}/> 
                        <div>Password:  </div>
                        <input type='password' onChange={(e) => this.handleChange('password',e.target.value)}/>
                        <div>
                            <button className='btn-login' onClick={this.handleLogin}>Login</button>
                        </div>
                    </div>
                    <div className='form'>
                        <h3>Create Account</h3>
                        <div>Email:  </div>
                        <input onChange={(e) => this.handleChange('email',e.target.value)}/>
                        <div>Password:  </div>
                        <input type='password' onChange={(e) => this.handleChange('password',e.target.value)}/>
                        <div >
                            <button className='btn-register' onClick={this.handleRegister}>Register</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapToProps = (reduxState) => {
    const {id} = reduxState
    return{
    id
  }
}

export default connect(mapToProps,{updateUser})(Auth)
