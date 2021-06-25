package org.olafneumann.regex.generator

import org.olafneumann.regex.generator.ui.ApplicationSettings
import org.olafneumann.regex.generator.ui.UiController
import kotlinx.browser.window
import org.olafneumann.regex.generator.js.NPM


fun main() {
    window.onload = { initRegexGenerator() }
}

private fun initRegexGenerator() {
    try {
        initRegexGenerator_unsafe()
    } catch (exception: Exception) {
        console.error(exception)
        window.alert("Unable to initialize RegexGenerator: ${exception.message}")
    }
}

private fun initRegexGenerator_unsafe() {
    NPM.importAll()

    // initialize presentation code
    val presenter = UiController()
    presenter.initialize()

    // store information, that we were already here
    val showGuide = ApplicationSettings.isNewUser()
    ApplicationSettings.storeUserLastInfo()

    // show guide for new users
    if (showGuide) {
        presenter.showInitialUserGuide()
    }
}