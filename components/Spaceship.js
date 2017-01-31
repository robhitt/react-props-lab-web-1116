const React = require('react');

class Spaceship extends React.Component {
  render() {
   return (
    <div>
      {this.props.name} // string
      {this.props.speed} // num
      {this.props.hasRockets} // (boolean, defaults to false)
      {this.props.colors} // (array of strings, defaults to ['black', 'red'])
    </div>
  )}
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
