import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { socketConnect } from 'socket.io-react';
import Child from '@/Child';
import px2vw from 'utils/px2vw.scss';
import styles from './app2.scss';
import { Upload, Button, Input } from 'antd'
import { testable, timeout } from './utils/decorator';
import MyStore from './store/my/myStore';
import _ from 'lodash';
import { Debounce } from 'lodash-decorators'
import Loading from 'react-loading-spinkit';

@testable
@inject("homeStore")
@observer
export default class APP2 extends Component {
  @observable dataArr =
    [{ name: '不可思议的CSSHHH', showLine: false }, { name: '导航栏', showLine: false }, { name: '光标小划线跟随', showLine: false }, { name: 'PURE CSS', showLine: false }, { name: 'NAV underline', showLine: false }]

  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: '不可思议的CSS', showLine: false }, { name: '导航栏', showLine: false }, { name: '光标小划线跟随', showLine: false }, { name: 'PURE CSS', showLine: false }, { name: 'NAV underline', showLine: false }]
    };
  }

  componentDidMount() {
    // this.props.socket.on('message',(msg)=>console.log(msg))
  }


  test = (Index) => {
    for (let index = 0; index < this.dataArr.length; index++) {
      if (index === Index) {
        this.dataArr.splice(index, 1, { ...this.dataArr[index], ...{ showLine: true } })
      } else {
        this.dataArr.splice(index, 1, { ...this.dataArr[index], ...{ showLine: false } })
      }
    }
  }

  _beforeUpload = (file) => {
    // var url = window.URL.createObjectURL(file);
    // var img  = document.createElement("img");
    // img.src = url;
    // img.width = 60;
    // img.height = 60;
    // img.onload=(e)=>{
    //   window.URL.revokeObjectURL(url)
    // }

    var div = document.getElementById('pic111');
    var aLink = document.createElement('a');
    var blob = new Blob([file]);
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
    aLink.download = 'test3.jpg';
    aLink.href = URL.createObjectURL(file);
    aLink.dispatchEvent(evt);
    aLink.innerHTML = '点击试试';

    div.appendChild(aLink);
    return false;
  }

  @timeout(3000)
  clickItem() {
    console.log('zzz')
  }

  @Debounce(1000)
  inputChange() {
    // this.sayGood();
    console.log('hahahahahahaha');
  }

  render() {

    return (
      <div className={styles.con}>
        <div className={styles.container}>
          <span>11111111</span>
            {this.dataArr.map((item, index) =>
              <span key={index} className={item.showLine ? styles.tabItemCon2 : styles.tabItemCon} onClick={() => this.test(index)}>{item.name}</span>
            )
            }
          <span>{this.props.homeStore.name}</span>
        </div>
        <Upload beforeUpload={this._beforeUpload}>
          <Button>点击选择图片</Button>
        </Upload>
        <div className={styles.pic} id='pic111'>

        </div>
        {/* <div className="test">
                  <div className={styles.itemCon} onClick={this.clickItem.bind(this)}>
                      <img src={require('./d.jpg')} alt="" className={styles.img}/>
                      <div className={styles.content}>
                          <span className={styles.name}>{'哈哈哈哈'}</span>
                          <span className={styles.workNum}>单号:{'12354664'}</span>
                          <span className={styles.workNum}>SN:{'623646436'}</span>
                          <span className={styles.workNum}>渠道:{'美团'}</span>
                      </div>
                      <div className={styles.desc}>
                          <span className={styles.descStatus}>{'待验收'}</span>
                          <span className={styles.workNum}>{'admin'}</span>
                      </div>
                  </div>
                </div> */}
        <Input
          placeholder="请输入111"
          onChange={this.inputChange.bind(this)}
          className={styles.input}
        />
        <div className={styles.input2Con}>
          <input type="text" placeholder="hahaha" className={styles.input2}/>
        </div>
       
        {/* <div className={styles.center}>
                  <Loading name="line-scale"
                           fadeIn="none"
                           show={true}
                           />
                </div> */}
        <div className={styles.left}>
          <div className={styles.leftText}>
            <div className={styles.borderStyle}>
              <span>哈哈哈</span>
              <div className={styles.leftHideContent}>
                  <span>隐藏的内容</span>
              </div>
            </div>
            <div className={styles.leftUnder}>
              <span className={styles.item}>11111111</span>
              <span className={styles.item}>舒服舒服</span>
              <span className={styles.item}>舒服舒服</span>
              <span className={styles.item}>沮丧</span>
              <span className={styles.item}>沮丧卡咖啡给对方</span>
            </div>
          </div>
        </div>
      </div>
    )
  };

}
