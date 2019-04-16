import React, { Component } from 'react';

import EditUser from './EditUser.js';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state= {
            inputValue: '',
            editValue:{}
        }
    }
    

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            inputValue: event.target.value
        });
        this.props.getInputSearch(this.state.inputValue);
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return <div className="btn btn-group btn-warning" onClick={() => this.props.doiTrangThai()} style={{width: '12rem', marginBottom: '10px'}}>Đóng lại</div>;
        }
        else{
            return <div className="btn btn-group btn-info" onClick={() => this.props.doiTrangThai()} style={{width: '12rem', marginBottom: '10px'}}>Thêm User</div>;
        }
    }

    isShowEditUser = () => {
        if(this.props.editUserStatus === true){
            return <EditUser thayDoiTrangThaiEditUser={()=>this.props.thayDoiTrangThaiEditUser()}
                             userEditObject={this.props.userEditObject}
                             getEditUserInfo={(data)=>this.getEditUserInfo(data)}></EditUser>
        }
        else{

        }
    }

    getEditUserInfo = (data) => {
        this.setState({
            editValue: data
        });
        this.props.getEditUserInfo(data);
    }

    render() {
        return (
            <div className="container searchForm">
                <div className="form-group">
                    <div className="btn-group">
                    <input onChange={(event)=> this.isChange(event)} style={{width: '610px'}} type="text" className="form-control" placeholder="Nhập dữ liệu tìm kiếm" />
                    <div className="btn btn-info" onClick={(data)=>this.props.getInputSearch(this.state.inputValue)}>Tìm</div>
                    </div>
                </div>

                <div className="form-group">
                    {this.hienThiNut()}
                    
                </div>

                {this.isShowEditUser()}
                    
            
            </div>

        );
    }
}

export default SearchForm;