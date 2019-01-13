import React , { Component } from 'react';
import './index.less';
class SerachGroup extends Component{
    render(){
        return (
            <div className="serach-group">
                <div className="tag">
                    <i className="iconfont icon-search"></i>
                </div>
                <div className="input">
                    <input type="text"/>
                </div>
                <div className="button">
                    <button><i className="iconfont icon-ue60cwrite2
                    "></i>提问</button>
                </div>
            </div>
        )
    }
}

export default SerachGroup;