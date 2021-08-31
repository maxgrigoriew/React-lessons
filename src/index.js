const name = 'max';

// стили онлайн в в иде обхекта
const red = {
    color: 'red'
}
// формат react js
const render = React.createElement('div', null,
    React.createElement('header', null,
        React.createElement('img', {
            src: 'logo512.png',
            alt: 'logo',
            className: 'logo',
        }),
        React.createElement('h1', null, 'hallo world')),
    React.createElement('main', null,
        React.createElement('p', null, 'a javascript lebrary for building user')),
);
// формат jsx
const renderJSX = (
    <div>
        <header>
            <img src="logo512.png" alt="logo" />
        </header>
        <main>
            <p>a javascript lebrary for building user</p>
            <p style= {red}> hello my name is {name}</p>
        </main>
    </div>
)

ReactDOM.render(renderJSX, document.getElementById('root'))