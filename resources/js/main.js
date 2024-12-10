const source = document.getElementById('projects-template').innerHTML
const template = Handlebars.compile(source)

const context = {
    project: [
        {
            src: 'resources/img/Oversize-Basics.png',
            name: 'Oversize Basics',
            url: 'https://junlovin.github.io/Oversize-Basics'
        },
        {
            src: 'resources/img/Colmar-Academy.png',
            name: 'Colmar Academy', 
            url: 'https://junlovin.github.io/Colmar-Academy'
        },
        {
            src: 'resources/img/Mathias-R.png',
            name: 'Mathias WebPage',
            url: 'https://junlovin.github.io/Mathias'
        },
        {
            src: 'resources/img/fuxion.png',
            name: 'Fuxion Page',
            url: 'https://junlovin.github.io/FuXion/'
        },
        {
            src: 'resources/img/JunLovin-Sharps.png',
            name: 'JunLovin Page',
            url: 'https://junlovin.github.io/JunLovin-Page/'
        },
        {
            src: 'resources/img/helloWorld.png',
            name: 'Blink Animation',
            url: 'https://junlovin.github.io/Typing-Effect/'
        }
    ]
}

const compiledHTML = template(context)
const box = document.getElementById('box-links')
box.innerHTML = compiledHTML