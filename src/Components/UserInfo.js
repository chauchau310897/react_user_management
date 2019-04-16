import React, { Component } from 'react';

class UserInfo extends Component {

    tenQuyen = () => {
        if(this.props.quyen === 1){return "Admin";}
        else if(this.props.quyen === 2){return "Moderator";}
        else {return "User";}
    }

    editUser = () => {
        this.props.editUser();
        this.props.thayDoiTrangThaiEditUser();
    }

    deleteUser = (idUser) => {
        this.props.deleteUser(idUser);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.ten}</td>
                <td>{this.props.sdt}</td>
                <td>{this.tenQuyen()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={()=>this.editUser()}><i className="fa fa-edit" /> Sửa</div>
                    <div className="btn btn-danger xoa" onClick={(idUser)=>this.deleteUser(this.props.id)}><i className="fa fa-trash"/> Xóa</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default UserInfo;