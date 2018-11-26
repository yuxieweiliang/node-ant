import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.less';
import { Menu, Icon, Layout, Card, Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
import Container from '../../components/Container'
// import { newBook, getBook } from '@reducers/book/sagas';
import Step01 from './Step01'
import Step02 from './Step02'


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }

  componentWillMount() {
    // this.props.dispatch(Begin_GET_POSTS());
    // this.props.dispatch(rootSaga());
    // this.props.dispatch(newBook());
  }

  renderStep() {
    switch(this.state.step) {
      case 1: return <Step01 {...this.props.newBook} {...this.props}/>;
      case 2: return <Step02 {...this.props.newBook} {...this.props}/>;
      default: return <Step01 {...this.props.newBook} {...this.props}/>;
    }
  }
  createNewBook = () => {
    const { newBook } = this.props;
    console.log(newBook);
    this.props.dispatch({ type: 'book/POST_BOOKS', payLoad: newBook });
    return;
    this.props.history.push('/book/edit')
  };
  render() {
    return (
      <Container {...this.props}>
        <Card title={<Button size="small" style={{fontSize: 12}}>上一步</Button>}
              style={{width: 1020, flex: 1}}
              extra={[/*<Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>,*/
                <Button
                  type="primary"
                  size="small"
                  style={{fontSize: 12}}
                  key="new-book"
                  onClick={ this.createNewBook }
                >创建作品</Button>
              ]}>
          <Row gytter={16} style={{padding: '10px 15px 130px 15px', width: 800, height: '100%'}}>

            { this.renderStep()}

          </Row>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps  = (state) => {
  return ({
    ...state.book
  })
};

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);