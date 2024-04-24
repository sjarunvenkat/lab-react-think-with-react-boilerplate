//REACT 2
// const container = document.getElementById('react-container')
// ReactDOM.render("Hello! Welcome to React", container)

//REACT 3
// const Container = () =>{
//     return React.createElement(
//         'div',
//         null,
//         'Hey Kalvian! Welcome to react',
//         React.createElement('div',null,"Let's roack and roll")
//     )
// }

// const container = document.getElementById('react-container')
// ReactDOM.render(React.createElement(Container), container)

//REACT 4
class ReactContainer extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hey Kalvian! Welcome to react",
      React.createElement("div", null, "Let's roack and roll with classess")
    );
  }
}

const container = document.getElementById("react-container");
ReactDOM.render(React.createElement(ReactContainer), container);
