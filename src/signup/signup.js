import React from 'react'
import styles from './styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import LoginComponent from '../login/login';

class signupComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			email: null,
			password: null,
			passwordConfirmation: null,
			signupError: ''
		}

	}
	render() {
		const { classes } = this.props
		return (
			<main className={classes.main}>
				<CssBaseline></CssBaseline>
				<Paper className={classes.paper}>
						<Typography component='h1' variant='h5'>
								Signup
						</Typography>
						<form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
								<FormControl required fullWidth margin='normal'>
										<InputLabel htmlFor='signup-email-input'>Enter your email</InputLabel>
										<Input autoComplete='email' autoFocus id='signup-email-input' onChange={(e) => this.userTyping('email' , e)}></Input>
								</FormControl>
								<FormControl required fullWidth margin='normal'>
								<InputLabel htmlFor='signup-password-input'>Password</InputLabel>
								<Input type='password' id='signup-password-input' onChange={(e)=> this.userTyping('password' , e)}></Input></FormControl>
								<FormControl required fullWidth margin='normal'>
								<InputLabel htmlFor='signup-password-confirm'>Confirm your password</InputLabel>
								<Input type='password' id='signup-password-confirm' onChange={(e)=> this.userTyping('passwordConfirmation' , e)}></Input>
								</FormControl>
								<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
						</form>
						{
							this.state.signupError ?
							<Typography className={classes.errorText} component='h5' variant='h6'>
								{this.state.signupError}
							</Typography> : 
							null
						}
						<Typography component='h5' variant='h6' className={classes.hasAccountheader}>Already Have an Account?</Typography>
						<Link className={classes.logInLink} to='/login' >Log In!</Link>
				</Paper>
			</main>
		)
	}
		formIsValid = () => this.state.password === this.state.passwordConfirmation

    submitSignup = (e) => {
			e.preventDefault()
			if (!this.formIsValid()) {
				this.setState({signupError: 'Passwords do not match!'})	
			}
			console.log("submitting" , this.state)
    }

    userTyping = (type, e) => {
			switch (type) {
				case 'email':
					this.setState({ email: e.target.value})
					break
				case 'password':
					this.setState({ password: e.target.value})
					break
				case 'passwordConfirmation':
					this.setState({ passwordConfirmation: e.target.value})
			}
    }
}

export default withStyles(styles)(signupComponent)