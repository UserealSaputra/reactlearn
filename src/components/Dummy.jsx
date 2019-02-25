import React, { Component } from 'react';
import Category from './Category';
import { Menu, Dropdown, Icon } from 'antd';

const Submenu = Menu.SubMenu
class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummy: [
                {
                    id: "ad18abec-fb24-4296-83ee-14a99756dea8",
                    name: "Fashion Pria",
                    categorySub: [
                        {
                            id: "eba6beee-6706-49c2-95a5-b4f72be6ba0e",
                            name: "Sepatu",
                            categorySubChild: [
                                {
                                    id: "3155f392-46b8-4bce-8ad2-ead52dca3953",
                                    name: "Sneakers"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "dda444c2-c739-4759-a8d3-71ba36013f35",
                    name: "Fashion Wanita",
                    categorySub: [
                        {
                            id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                            name: "Sepatu",
                            categorySubChild: [
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Sneakers"
                                }
                            ]
                        },
                        {
                            id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                            name: "Atasan",
                            categorySubChild: [
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Blouse"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "dda444c2-c739-4759-a8d3-71ba36013f36",
                    name: "Fashion Anak",
                    categorySub: [
                        {
                            id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                            name: "Tas Anak",
                            categorySubChild: [
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Tas Selempang Anak"
                                }
                            ]
                        },
                        {
                            id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                            name: "Aksesoris Anak",
                            categorySubChild: [
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Topi Anak"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "dda444c2-c739-4759-a8d3-71ba36013f37",
                    name: "Komputer & Aksesoris",
                    categorySub: [
                        {
                            id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                            name: "Peripheral & Aksesoris",
                            categorySubChild: [
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Keyboard"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "dda444c2-c739-4759-a8d3-71ba36013f38",
                    name: "Mainan & Hobi",
                    categorySub: [
                        {
                            id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                            name: "Diecast",
                            categorySubChild: [
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Diecast Truk & Konstruksi"
                                },
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Diecast Mobil"
                                },
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Diecast Truk & Konstruksi"
                                },
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Diecast Kendaraan Publik"
                                },
                                {
                                    id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                    name: "Diecast Milter"
                                }
                            ]
                        }
                    ]
                }
            ]

        }
    }
    menu = () => {
        const { dummy } = this.state;
        return (
            <Menu>
                {dummy.map((data) =>
                    <Submenu title={data.name}>
                        {data.categorySub.map((sub) =>
                            <Submenu title={sub.name}>
                                {sub.categorySubChild.map((child) =>
                                    <Menu.Item >
                                        {child.name}
                                    </Menu.Item>
                                )}
                            </Submenu>
                        )}
                    </Submenu>
                )}
            </Menu>
        )
    }
    render() {
        const { dummy } = this.state;
        return (
            <React.Fragment>
                {/* <Dropdown trigger={['click']} overlay={this.menu} overlayStyle={{ width: '20%', minWidth: '20%!important' }}>
                    <div>Category <Icon type='down' /></div>
                </Dropdown> */}
                <Category data={dummy} />
            </React.Fragment>
        );
    }
}

export default Dummy;