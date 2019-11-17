"use strict";
const settings = require('electron-settings')

document.body.addEventListener('click', (event) => {
    if (event.target.dataset.section) {
        handleSectionTrigger(event)
    }
})

function handleSectionTrigger (event) {
    hideAllSectionsAndDeselectButtons()

    // Highlight clicked button and show view
    event.target.classList.add('is-selected')

    // Display the current section
    const sectionId = `${event.target.dataset.section}-section`
    document.getElementById(sectionId).classList.add('is-shown')
    console.log(document.getElementById(sectionId))

    // Save currently active button in localStorage
    const buttonId = event.target.getAttribute('id')
    settings.set('activeSectionButtonId', buttonId)
}

function hideAllSectionsAndDeselectButtons () {
    const sections = document.querySelectorAll('.js-section.is-shown')
    console.log(sections)
    Array.prototype.forEach.call(sections, (section) => {
        section.classList.remove('is-shown')
    })

    const buttons = document.querySelectorAll('.nav-button.is-selected')
    Array.prototype.forEach.call(buttons, (button) => {
        button.classList.remove('is-selected')
    })
}

function activateDefaultSection () {
    var elem = document.getElementById('button-library')
    elem.click()
}

function showMainContent () {
    document.querySelector('.js-nav').classList.add('is-shown')
    document.querySelector('.js-content').classList.add('is-shown')
}

function displayLibrary() {
    document.querySelector('#library-section').classList.add('is-shown')
}

// Default to the view that was active the last time the app was open
const sectionId = settings.get('activeSectionButtonId')
if (sectionId) {
    showMainContent()
    const section = document.getElementById(sectionId)
    if (section) section.click()
}
else {
    activateDefaultSection()
    displayAbout()
}
