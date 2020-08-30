import createElement from './vdom/createElement.js';
import render from './vdom/render.js';
import mount from './vdom/mount.js';
import diff from './vdom/diff.js';

const createVApp = (count) => createElement('div', {
    attrs: {
        id: 'app',
        dataCount: count,
    },
    children: [
        String(count),
        createElement('br', {}),
        createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'
            }
        }),
        createElement('br', {}),
        createElement('input', {
            attrs: {
                type: 'button',
                onclick: 'location.href=\'https://www.youtube.com/watch?v=IVJLruuWw6w\'',
                value: 'HOHOHO',
            },            
        })
    ],
});

let count = 0;
let vApp = createVApp(count);
const $app = render(vApp);

let $rootEl = mount($app, document.getElementById('app'));

setInterval(() => {
    count++;
    const vNewApp = createVApp(count);
    const patch = diff(vApp, vNewApp);
    $rootEl = patch($rootEl);
    vApp = vNewApp;
}, 1000);

console.log(vApp);