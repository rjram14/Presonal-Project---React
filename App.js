const parent = React.createElement('div',{id:'parent'},
 React.createElement('div',{id:"child"},
 React.createElement('h1',{id:"heading"},'working fine!')))

 console.log(parent); //object
const heading = React.createElement('h1',{id:"heading"},'Hey Ram This Side ! React');

console.log("heading",heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

//JSX