import React, { Component } from 'react';

import './../App.css';
import Header from './Header.js';
import SearchFrom from './SearchForm.js';
import DataTable from './DataTable.js';
import Data from './Data.json';

const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      dataUser: [],
      inputSearch: '',
      newUserInfo:'',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(Data));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        dataUser:temp
      });
    }
  }
  

  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    })
  }

  getInputSearch = (data) => {
    this.setState({
      inputSearch: data
    });
    // alert(this.state.inputSearch);
  }

  getNewUserInfo = (ten,sdt,quyen) => {
    // this.setState({
    //   newUserInfo: data
    // });
    console.log(ten);
    console.log(sdt);
    console.log(quyen);
    var item = {};
    item.id = uuidv1();
    item.ten = ten;
    item.sdt = sdt;
    item.quyen = parseInt(quyen);
    var newUserInfo = this.state.dataUser;
    newUserInfo.push(item);
    this.setState({
      dataUser: newUserInfo
    });
    console.log(this.state.dataUser);
    localStorage.setItem('userData', JSON.stringify(newUserInfo));
  }

  editUser = (editUserInfo) => {
    console.log(editUserInfo);
    this.setState({
      userEditObject: editUserInfo
    });
  }

  thayDoiTrangThaiEditUser = () => {
    this.setState({
        editUserStatus : ! this.state.editUserStatus
    });
  }

  getEditUserInfo = (data) => {
    console.log("Edit info: " + data.ten);
    this.state.dataUser.forEach((value,key) => {
      if(value.id === data.id){
        value.ten = data.ten;
        value.sdt = data.sdt;
        value.quyen = parseInt(data.quyen);
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.dataUser));
  }

  deleteUser = (idUser) => {
    var tempData = this.state.dataUser;
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      dataUser: tempData
    });
    // tempData.forEach((value,key) => {
    //   if(value.id === idUser)
    // })
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  
  render() {
    // console.log(this.state.dataUser);
    // localStorage.setItem('dataUser', JSON.stringify(Data))
    var mangTimKiem = [];
    this.state.dataUser.forEach((item)=>{
      if(item.ten.indexOf(this.state.inputSearch) !== -1){
        mangTimKiem.push(item);
      }
    })
    console.log(mangTimKiem);
    return (
      <div >
          <Header></Header>

          <SearchFrom getInputSearch = {(data)=>this.getInputSearch(data)} 
          doiTrangThai = {()=>this.doiTrangThai()} 
          hienThiForm = {this.state.hienThiForm}
          editUserStatus = {this.state.editUserStatus}
          thayDoiTrangThaiEditUser = {()=>this.thayDoiTrangThaiEditUser()}
          userEditObject = {this.state.userEditObject}
          getEditUserInfo = {(data)=> this.getEditUserInfo(data)}></SearchFrom>

          <DataTable hienThiForm = {this.state.hienThiForm}  
          dataUser = {mangTimKiem}  
          newUserInfo = {(ten,sdt,quyen)=>this.getNewUserInfo(ten,sdt,quyen)}  
          editUser = {(editUserInfo)=>this.editUser(editUserInfo)}
          thayDoiTrangThaiEditUser = {()=>this.thayDoiTrangThaiEditUser()}
          deleteUser = {(idUser) => this.deleteUser(idUser)}></DataTable>
      </div>
    );
  }
}

export default App;
