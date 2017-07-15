var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
      return {
        todos: [
          {
            id: 1,
            text: 'Clean my room'
          }, {
            id: 2,
            text: 'Dryclean my clothes'
          }, {
            id: 3,
            text: 'Wash the car'
          }, {
            id: 4,
            text: 'Feed the dogs'
          }
        ]
      };
  },

  render: function () {
      var {todos} =  this.state;

    return (
      <div>
        <TodoList todos = {todos}/>
      </div>

    )
  }
});

module.exports = TodoApp;
