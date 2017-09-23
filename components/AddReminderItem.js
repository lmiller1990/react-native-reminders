import React, {Component} from 'react'
import { View, Text } from 'react-native'
import styles from './shared/Styles'

class AddReminderItem extends Component {
	static navigationOptions = {
		title: 'Add Reminder'
	}

	render() {
		return(
			<View style={styles.scene}> 
				<Text>
					Add new one.
				</Text>
				<Text>
					Add new one.
				</Text>
				<Text>
					Add new one.
				</Text>
				<Text>
					Add new one.
				</Text>
			</View>
		)
	}
}

export default AddReminderItem
