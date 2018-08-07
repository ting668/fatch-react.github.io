import React, { Component } from 'react';
import { fetchData } from './data.js'
import { Link } from "react-router-dom";

class ListBox extends Component {
    constructor() {
        super();
        this.setPage = this.setPage.bind(this);
        this.state = {
            indexList: [],//当前渲染的页面数据
            totalData: [],
            current: 1, //当前页码
            pageSize: 7, //每页显示的条数
            goValue: 0,  //要去的条数index
            totalPage: 0,//总页数
        };
    }
    componentWillMount() {
        this.fetchListData()
    }
    setPage(num) {
        this.setState({
            indexList: this.state.totalData.slice(num, num + this.state.pageSize)
        })
    }
    fetchListData(numlist=0){
        fetchData(numlist).then((res) => {
         
            const listData = res.data.map((item) => {
                return {
                    title: item.title,
                    detail: item.id
                }
               
            })  
            this.setState({
             
                totalData: listData
            }) 
        }).then(() => {
            this.setState({
                totalPage: Math.ceil(this.state.totalData.length / this.state.pageSize),
            })
            this.setPage(this.state.goValue)
        })
    }
    
    
    render() {
        return (
            <div >
                <ul >
                    {
                        this.state.indexList.map((qq, index) => {
                            const { title, detail } = { ...qq }
                            return (<li key={index}> <Link to={`/detail/${detail}`}>{title} </Link></li>)
                        })
                    }
                </ul>
                <PageButton {...this.state} setPage={this.setPage} fetchListData={this.fetchListData.bind(this)}  />
            </div>
        );
    }
}
class PageButton extends Component {

    constructor(props) {
        super(props);
        this.setNext = this.setNext.bind(this);
        this.setUp = this.setUp.bind(this);
        this.state = {
            num: 0,
            pagenum: this.props.current
        }
    }
    setMore(){

    }
    //下一页
    setNext() {

        if (this.state.pagenum < this.props.totalPage) {
            this.setState({
                num: this.state.num + this.props.pageSize,
                pagenum: this.state.pagenum + 1
            },
                () => this.props.setPage(this.state.num)
            )
        }else{
 
           ( this.props.fetchListData((this.props.totalPage)*(this.props.pageSize)))
        }

    }
    //上一页
    setUp() {

        if (this.state.pagenum > 1) {
            this.setState({
                num: this.state.num - this.props.pageSize,
                pagenum: this.state.pagenum - 1
            },

                () => this.props.setPage(this.state.num)
            )
        }

    }
    render() {
        return (
            <div className="content-list-button" >
                <span onClick={this.setUp} >上一页</span>
                <span>{this.state.pagenum}页/ {this.props.totalPage}页</span>
                <span onClick={this.setNext}>下一页</span>
            </div>
        );
    }
}
export default ListBox;