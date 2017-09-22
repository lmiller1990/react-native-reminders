import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'

class ReminderItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<View style={styles.wrapper}>
				<Text style={styles.text}>
					{this.props.reminder.name}
				</Text>
				<Text>
					{moment(this.props.reminder.date).format('DD MMMM YYYY')}
				</Text>
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
