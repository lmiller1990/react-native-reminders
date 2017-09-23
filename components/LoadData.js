import Storage from 'react-native-storage'
import React, {Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'

const storage = new Storage({
	size: 10000,
	defaultExpires: null,
	storageBackend: AsyncStorage
})

class LoadData extends Component {
	componentDidMount() {
		console.log('mounted')
		let arr = [{ id: 0, name: 'Go to gym', date: new Date() }]

		storage.load({
			key: 'reminder'
		})
		.then(res => console.log(res))
		/*storage.save({
			key: 'reminder',
			data: arr
		})
		.then(res => console.log('res', res))
		.catch(err => console.log('err', err))*/
	}

	render() {
		return (
			<View><Text>Ok</Text></View>
		)
	}
}

export default LoadData
