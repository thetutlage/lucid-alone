'use strict'

const path = require('path')
const fold = require('adonis-fold')
const co = require('co')
const Ioc = fold.Ioc
const Registrar = fold.Registrar

/**
 * Autoload a given directory, so that you can
 * grab models via Ioc container.
 */
Ioc.autoload('App', path.join(__dirname, './app'))

/**
 * Registering custom providers, Lucid is dependent upon
 * Config provider which is the part of adonis core,
 * so you need to provide a subsitute for that.
 */
Ioc.bind('Adonis/Src/Config', function () {
	return require('./config')
})

/**
 * Giving a alias to the providers, so that
 * you can make use of short names
 */
Ioc.aliases({
	Lucid: 'Adonis/Src/Lucid'
})

/**
 * Here we register the providers with the Ioc Container
 * and once that registeration process is done, you
 * are good to go.
 */
Registrar
	.register([
	'adonis-lucid/providers/DatabaseProvider',
	'adonis-lucid/providers/LucidProvider',
	])
	.then(() => {
		/**
		 * It is important to get the model from that IoC container
		 * since models call some hooks which are only understood
		 * by fold.
		 */
		const User = use('App/Model/User')
		return co (function * () {
			const user = yield User.all()
			console.log(user.toJSON())
		})
	})
	.catch((e) => console.error(e.stack))
