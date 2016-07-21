'use strict'

const _ = require('lodash')
const path = require('path')
const config = exports = module.exports = {}

const appConfig = {
	database: {
		connection: 'sqlite',
		sqlite: {
			client: 'sqlite3',
			connection: {
				filename: path.join(__dirname, './database/database.sqlite'),
			},
			useNullAsDefault: true
		}
	}
}

config.get = function (key) {
	return _.get(appConfig, key)
}