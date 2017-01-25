/**
* Container Generator
*/

const componentExists = require('../utils/componentExists')

module.exports = {
    description: 'Add a container component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            default: 'Form',
            validate: (value) => {
                if ((/.+/).test(value)) {
                    return componentExists(value) ? 'A component or container with this name already exists' : true
                }

                return 'The name is required'
            },
        },
        {
            type: 'confirm',
            name: 'wantMessages',
            default: false,
            message: 'Do you want i18n messages (i.e. will this component use text)?',
        },
        {
            type: 'confirm',
            name: 'pure',
            default: true,
            message: 'Do you want a pure component ?',
        }
    ],
    actions: (data) => {
        console.log(data)
        indexTemplatePath = data.pure ? './container/pure.js.hbs' : './container/index.js.hbs'
        // Generate index.js and index.test.js
        const actions = [{
            type: 'add',
            path: '../../src/containers/{{properCase name}}/index.js',
            templateFile: indexTemplatePath,
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../../src/containers/{{properCase name}}/__tests__/index.test.js',
            templateFile: './container/test.js.hbs',
            abortOnFail: true,
        },  {
            type: 'add',
            path: '../../src/containers/{{properCase name}}/index.css',
            templateFile: './container/index.css.hbs',
            abortOnFail: true,
        },  {
            type: 'add',
            path: '../../src/containers/{{properCase name}}/index.md',
            templateFile: './container/index.md.hbs',
            abortOnFail: true,
        }]

        // If component wants messages
        if (data.wantMessages) {
            actions.push({
                type: 'add',
                path: '../../src/containers/{{properCase name}}/messages.js',
                templateFile: './container/messages.js.hbs',
                abortOnFail: true,
            })
        }

        return actions
    },
}
