import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { autobind } from 'core-decorators';
import { openMessageAction } from '../../actions/message.action';

const FormItem = Form.Item;

class FormData extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    loginHandler: React.PropTypes.func.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  @autobind()
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (!err) {
        this.props.loginHandler(value.username, value.password);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{required: true}]
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true}]
          })(
            <Input addonBefore={<Icon type="lock" />} ype="password" placeholder="密码" />
          )}
        </FormItem>
        <Button
          type="primary"
          loading={ this.props.loading }
          htmlType="submit"
        >登录</Button>
      </Form>
    );
  }
}

export default Form.create()(FormData);

