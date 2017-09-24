import {AsyncStorage} from 'react-native'
import Storage from 'react-native-storage'

class LocalStorage {
	constructor() {
		this.storage = new Storage({
			size: 10000,
			defaultExpires: null,
			storageBackend: AsyncStorage
		})

		this.REMINDER_KEY = 'reminder'
	}

	async load(key) {
		return this.storage.load({ key })
	}

	async removeReminder(reminderKey) {
		try {
			const reminders = await this.load(this.REMINDER_KEY)	
			const updated = reminders.filter(x => x.key !== reminderKey)	
			this.save(this.REMINDER_KEY, updated)	
		} catch (error) {
			console.log('Error removing reminder', error)
		}
	}

	async addReminder(reminder) {
		try {
			let reminders = await this.load(this.REMINDER_KEY)

			let _key = reminders.length > 0 
			? Math.max(...reminders.map(x => x.key)) + 1
			: 0
			console.log(_key)

			this.save(this.REMINDER_KEY, reminders.concat({
				key: _key,
				name: reminder, 
				date: new Date() 
			}))
		} catch (error) {
			console.log('Error adding reminder', error)
		}
	}

	save(key, val) {
		return this.storage.save({
			key,
			data: val
		})
	}
}

export default LocalStorage
