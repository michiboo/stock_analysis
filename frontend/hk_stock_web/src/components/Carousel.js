import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
 
export const  Make_caro = (props) =>
{   
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            style: {height: '20vh'},
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            style: {height: '20vh'},
        }
    ]
    
    return (
        <div style={props.style}>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
    )
}
 
function Item(props)
{
    return (
        <Paper style={props.item.style}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}