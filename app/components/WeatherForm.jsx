var React = require('react');


var WeatherForm = React.createClass({

  /**
   *
   * @param e
   */
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Search weather by city" ref="location" required="true"/>
        <button type="submit" className="expanded button hollow">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;