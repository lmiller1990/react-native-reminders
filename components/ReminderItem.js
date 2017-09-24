import React, {Component} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import moment from 'moment'

class ReminderItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View style={{flex: 1, flexDirection: 'column'}}>
					<Text style={styles.text}>
						{this.props.reminder.name}
					</Text>
					<Text>
						{moment(this.props.reminder.date).format('DD MMM YYYY')}
						{ ' - ' }	
						{moment(this.props.reminder.date).fromNow()}
					</Text>
				</View>
				<View>
					<Button 
						title="Delete" 
						onPress={() => this.props.removeReminder(this.props.reminder.key)} 
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  text: {
		fontSize: 25,
		fontWeight: '200',
  },
	wrapper: {
		borderStyle: 'solid',
		borderColor: 'silver',
		borderBottomWidth: 1,
		marginHorizontal: 10,
		paddingVertical: 10
	}
});

export default ReminderItem
