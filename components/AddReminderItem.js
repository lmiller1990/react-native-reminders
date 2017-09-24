import React, {Component} from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'

const styles = StyleSheet.create({
	fields: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	textInput: {
		height: 30, 
		width: 135,
		borderColor: 'silver', 
		borderBottomWidth: StyleSheet.hairlineWidth
	}
})

class AddReminderItem extends Component {
	constructor() {
		super()
	}

	render() {
		return(
			<View style={styles.wrapper}>
				<View style={styles.fields}>

					<TextInput 
						style={styles.textInput}
						placeholder="Enter event"
						value={this.props.text}
						onChangeText={(text) => this.props.handleInput(text)}
					/>

					<DatePicker 
						onDateChange={(date) => this.props.setDate(date)} 
						date={this.props.date} 
					/>
				</View>

				<View>
					<Button onPress={() => this.props.addReminder()} title="Add" />
				</View>
			</View>
		)
	}
}

export default AddReminderItem
