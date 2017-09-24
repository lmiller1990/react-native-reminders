import React, {Component} from 'react'
import { View, Button, TextInput } from 'react-native'

class AddReminderItem extends Component {
	render() {
		return(
			<View> 
				<TextInput 
					style={{height: 30}}
					placeholder="Enter Reminder"
					value={this.props.text}
					onChangeText={(text) => this.props.handleInput(text)}
				/>
				<Button onPress={() => this.props.addReminder()} title="Add" />
			</View>
		)
	}
}

export default AddReminderItem
