import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewReminders from './components/ViewReminders'
import AddReminderItem from './components/AddReminderItem'
import styles from './components/shared/Styles'
import localStorage from './utils/localStorage'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.localStorage = new localStorage()

		this.state = { text: '', reminders: [] }

		this.handleInput = this.handleInput.bind(this)
		this.addReminder = this.addReminder.bind(this)
		this.loadReminders = this.loadReminders.bind(this)
	}

	componentDidMount() {
		this.loadReminders()
	}

	loadReminders() {
		this.localStorage.load('reminder')
		.then(res => this.setState({ reminders: res }))
	}

	async addReminder() {
		await this.localStorage.addReminder(this.state.text)
		this.loadReminders()
		this.setState({text: ''})
	}

	handleInput(text) {
		this.setState({text})
	}

	render() {
		return (
			<View style={styles.scene}>
				<ViewReminders reminders={this.state.reminders} />
				<AddReminderItem 
					addReminder={this.addReminder} 
					handleInput={this.handleInput}
					text={this.state.text}
			/>
			</View>
		)
	}
}
