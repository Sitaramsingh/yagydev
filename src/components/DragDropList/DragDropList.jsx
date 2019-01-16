import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li>
    {value}
  </li>
);

const SortableList = SortableContainer(({items}) => {
    debugger
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </ul>
    );
  });

class DragDrop extends React.Component{
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
      };
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
          items: arrayMove(this.state.items, oldIndex, newIndex),
        });
      };
    render(){
        return(
                <div>
                    <Container text>
                        <Header as='h2'>Drag and Drop</Header>
                        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
                    </Container>
                </div>
        )
    }
} 

export default DragDrop;