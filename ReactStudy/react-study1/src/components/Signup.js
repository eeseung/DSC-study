import React, { Component } from 'react';

class Signup extends Component {
    state = {
        id: '',
        pw: '',
        pwcheck: '',
        name: '',
        birth: '',
        gender: '여',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onClickSignup = () => {
        alert('id: ' + this.state.id
         + '\n이름: ' + this.state.name
         + '\n생년월일: ' + this.state.birth
         + '\n성별: ' + this.state.gender
         + '\n전화번호: ' + this.state.phone);
        this.setState({
            id: '',
            pw: '',
            pwcheck: '',
            name: '',
            birth: '',
            gender: '여',
            phone: ''
        })
    }
    
    render() {
        return (
            <div>
                <h1>회원가입</h1>
                <input 
                    type="text"
                    name="id"
                    placeholder="아이디"
                    value={this.state.id}
                    onChange={this.handleChange}
                />
                <input 
                    type="password"
                    name="pw"
                    placeholder="비밀번호"
                    value={this.state.pw}
                    onChange={this.handleChange}
                />
                <input 
                    type="password"
                    name="pwcheck"
                    placeholder="비밀번호 재확인"
                    value={this.state.pwcheck}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type="date"
                    name="birth"
                    value={this.state.birth}
                    onChange={this.handleChange}
                />
                <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                    <option value="여">여</option>
                    <option value="남">남</option>
                </select>
                <input
                    type="text"
                    name="phone"
                    placeholder="휴대전화"
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <button onClick={this.onClickSignup}>가입하기</button>
            </div>
        );
    }
}
export default Signup;