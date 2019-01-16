import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../redux/actions/postaction';
import ScrollButton from './ScrollButton/ScrollButton';

class TableData extends Component{
    constructor(){
      super();
      this.state = {
        scroll : false
      };
    }
    componentWillMount(){
      this.props.fetchPost();
    }
    render(){
             const items = this.props.posts.map(item => (
               <tr key={item.id}>
                 <th>{item.id}</th>
                 <th>
                   {item.name}
                 </th>
                 <th>
                   {item.email}
                 </th>
                 <th>
                   {item.body}
                 </th>
               </tr>
             ));
      return(
        <div className='container'>
        <div>          <h1>Table Form</h1>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>
                  Id :
                </th>
                <th>
                  Name :
                </th>
                <th>
                  Email :
                </th>
                <th>
                  Body :
                </th>
              </tr>
             {items}
            </tbody>
          </table>
          <p>gaddddddddddddddddddddddddddddddh
            asfhddddddddddddddddddddddddddddd
            ashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            ashhhhhhhhhhhhhhhhhhd
          </p>
          <p>gaddddddddddddddddddddddddddddddh
            asfhddddddddddddddddddddddddddddd
            ashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            ashhhhhhhhhhhhhhhhhhd
          </p>
          <p>gaddddddddddddddddddddddddddddddh
            asfhddddddddddddddddddddddddddddd
            ashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            ashhhhhhhhhhhhhhhhhhd
          </p>
          <p>gaddddddddddddddddddddddddddddddh
            asfhddddddddddddddddddddddddddddd
            ashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            ashhhhhhhhhhhhhhhhhhd
          </p>
          <p>gaddddddddddddddddddddddddddddddh
            asfhddddddddddddddddddddddddddddd
            ashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            ashhhhhhhhhhhhhhhhhhd
          </p>
          <p>gaddddddddddddddddddddddddddddddh
            asfhddddddddddddddddddddddddddddd
            ashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            ashhhhhhhhhhhhhhhhhhd
          </p>
          <p>gaddddddddddddddddddddddddddddddh
            asfhddddddddddddddddddddddddddddd
            ashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            ashhhhhhhhhhhhhhhhhhd
          </p>
          </div>
          <ScrollButton
           
          />

        </div>
      );
    }
}

const mapStateToProps = state => ({
posts : state.post.items 
})
export default connect(mapStateToProps,{fetchPost})(TableData);