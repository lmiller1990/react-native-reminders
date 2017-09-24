import React, {Component} from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	fields: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
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
						style={{height: 30}}
						placeholder="Enter Reminder"
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
