import React, {Component} from 'react'
import { View, Button, TextInput } from 'react-native'
import localStorage from '../utils/localStorage'
import styles from './shared/Styles'

class AddReminderItem extends Component {
	constructor(props) {
		super(props)
		this.localStorage = new localStorage()

		this.state = { text: '' }
	}

	render() {
		return(
			<View style={styles.scene}> 
				<TextInput 
					style={{height: 30}}
					placeholder="Enter Reminder"
					onChangeText={(text) => this.setState({text})}
				/>
				<Button onPress={() => this.localStorage.addReminder(this.state.text)} title="Add" />
			</View>
		)
	}
}

export default AddReminderItem
