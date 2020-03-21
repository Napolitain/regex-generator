package org.olafneumann.regex.generator.ui

import org.olafneumann.regex.generator.regex.CodeGenerator
import org.olafneumann.regex.generator.regex.RecognizerCombiner
import org.w3c.dom.HTMLAnchorElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document

internal object HtmlHelper {
    internal inline fun <reified T : HTMLElement> getElementById(id: String): T {
        try {
            return document.getElementById(id) as T
        } catch (e: ClassCastException) {
            throw RuntimeException("Unable to find element with id '$id'.", e)
        }
    }

    internal fun toggleClass(element: HTMLElement, selected: Boolean, className: String) =
        element.classList.toggle(className, selected)
}

internal class LinkHandler(
    private val link: HTMLAnchorElement,
    private val codeGenerator: CodeGenerator
) {
    fun setPattern(pattern: String, options: RecognizerCombiner.Options) {
        link.href = codeGenerator.generateCode(pattern, options).snippet
    }
}