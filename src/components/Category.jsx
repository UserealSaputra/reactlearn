import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const { items } = this.props;
        console.log(items);
    }
    menu = () => {
        const dummy = this.props.data;
        const SubMenu = Menu.SubMenu;
        return (
            <Menu>
                {dummy.map(item =>
                    <SubMenu title={item.name} key={dummy.indexOf(item)}>
                        {item.categorySub.map(item2 =>
                            <SubMenu title={item2.name} key={dummy.indexOf(item2)}>
                                {item2.categorySubChild.map(item3 =>
                                    <Menu.Item key={dummy.indexOf(item3)}>{item3.name}</Menu.Item>
                                )}
                            </SubMenu>
                        )}
                    </SubMenu>
                )}
            </Menu>
        )
    }
    render() {
        return (
            <React.Fragment>
                <Dropdown overlayStyle={{ width: '20%', minWidth: '20%!important' }} overlay={this.menu}>
                    <div>Category<Icon type='down' /></div>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default Category;