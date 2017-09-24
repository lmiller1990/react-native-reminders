import React, {Component} from 'react'
import { View, Button, TextInput, DatePickerIOS } from 'react-native'

class AddReminderItem extends Component {
	constructor() {
		super()

		this.state = { date: new Date() }
	}

	render() {
		return(
			<View> 
				<TextInput 
					style={{height: 30}}
					placeholder="Enter Reminder"
					value={this.props.text}
					onChangeText={(text) => this.props.handleInput(text)}
				/>
				<DatePickerIOS onDateChange={(date) => this.setState({date})} date={this.state.date} />
				<Button onPress={() => this.props.addReminder()} title="Add" />
			</View>
		)
	}
}

export default AddReminderItem
