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

		this.state = { text: '', date: new Date(), reminders: [] }

		this.handleInput = this.handleInput.bind(this)
		this.setDate = this.setDate.bind(this)
		this.addReminder = this.addReminder.bind(this)
		this.loadReminders = this.loadReminders.bind(this)
		this.removeReminder = this.removeReminder.bind(this)
	}

	componentDidMount() {
		this.loadReminders()
	}

	async loadReminders() {
		const reminders = await this.localStorage.load(this.localStorage.REMINDER_KEY)
		this.setState({ reminders })
	}

	async addReminder() {
		await this.localStorage.addReminder({
			name: this.state.text,
			date: this.state.date
		})
		this.loadReminders()
		this.setState({text: ''})
	}

	async removeReminder(reminderKey) {
		await this.localStorage.removeReminder(reminderKey)
		this.loadReminders()
	}

	handleInput(text) {
		this.setState({text})
	}

	setDate(date) {
		this.setState({date})
	}

	render() {
		return (
			<View style={styles.scene}>
				<ViewReminders 
					removeReminder={this.removeReminder}
					reminders={this.state.reminders} />

				<AddReminderItem 
					addReminder={this.addReminder} 
					handleInput={this.handleInput}
					setDate={this.setDate}
					date={this.state.date}
					text={this.state.text}
				/>
			</View>
		)
	}
}
