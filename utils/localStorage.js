import {AsyncStorage} from 'react-native'
import Storage from 'react-native-storage'

class LocalStorage {
	constructor() {
		this.storage = new Storage({
			size: 10000,
			defaultExpires: null,
			storageBackend: AsyncStorage
		})
	}

	load(key) {
		return this.storage.load({ key })
	}

	addReminder(reminder) {
		this.load('reminder')
		.then(res => {
			let all = res.concat({ 
				key: res.length + 1, 
				name: reminder, 
				date: new Date() 
			})
			this.save('reminder', all)
		})
	}

	save(key, val) {
		return this.storage.save({
			key,
			data: val
		})
	}
}

export default LocalStorage
