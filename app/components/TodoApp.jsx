var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
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

  handleAddTodo: function (text) {
    alert('new todo: ' + text)
  },

  render: function () {
      var {todos} =  this.state;

    return (
      <div>
        <TodoList todos = {todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>

    )
  }
});

module.exports = TodoApp;
