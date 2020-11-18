import React from 'react'; // pulls in code from react to be used in movieItem.js and allow for the html to be outputted into the react app
import Card from 'react-bootstrap/Card'; // pulls down from bootstrap for added css styling on the card
import '../App.css';

export class MovieItem extends React.Component { // extends from and uses the code from react

    render() {
        return ( /*outputs the code down below and inputs it into a card format for the screen*/
            <div className="App">
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header> 
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}