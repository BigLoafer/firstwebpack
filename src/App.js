import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Collapse,Input, Tabs, Icon} from 'antd';
import {observable } from 'mobx';
import {observer} from 'mobx-react';
const Panel = Collapse.Panel;
const TabPane  = Tabs.TabPane;

@observer
class App extends Component {
  @observable inputValue = '';
  callback=()=>{

  };

  inputChange=(e)=>{
    this.inputValue =e.target.value.replace(/\D/g, '');
  }

  render() {
    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 8,
      marginBottom: 20,
      border: 2,
      overflow: 'hidden',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{display:'flex',marginTop:'50px',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:'900px',backgroundColor:'white'}}>
            <Input 
              placeholder={'只能输数字'}
              addonBefore={<img src={logo} style={{width:30,height:30}}/>}
              value={this.inputValue}
              onChange={this.inputChange}
            />
            <Input 
              placeholder={'请输入密码'}
              prefix={<img src={logo} style={{width:25,height:25}}/>}
              style={{paddingLeft:10,width:450}}
            />
        </div>

       {/*  <Collapse style={{width:'900px'}}>

            <Panel header="app 开发的几种方式" key="0" style={customPanelStyle} border={false}> 
              <div style={{marginLeft:'50px',marginTop:'8px'}}>
                  <div style={{marginTop:'8px'}}>Native App；android,ios</div>
                  <div style={{marginTop:'8px'}}>Web App,移动端网页app,html编写</div>
                  <div style={{marginTop:'8px'}}>Hybrid  App，原生api+webview的方式</div>
                  <div style={{marginTop:'8px'}}>Weex</div>
                  <div style={{marginTop:'8px'}}>flutter</div>
                  <div style={{marginTop:'8px'}}>React Native</div>
              </div>
            </Panel>
            <Panel header="----rn是怎么来的?" key="1" style={customPanelStyle} border={false}> 
               <h4>react的成功后，js的一些布道者又想玩把react的思想触及到移动端,在加上其次现有的一些混合开发框架性能不好，体验不好，比如Cordova，
                PhoneGap,Ionic 等等，所以facebook的人创造了react native
               </h4>
            </Panel>
            <Panel header="----react native的优点是什么？" key="2" style={customPanelStyle}>
              <div>0,React Native完美兼容使用Objective-C、Java或是Swift编写的组件。 
                如果你需要针对应用的某一部分特别优化，中途换用原生代码编写也很容易。 想要应用的一部分用原生，
                一部分用React Native也完全没问题 —— Facebook的应用就是这么做的</div>
              <div>1,渲染的都是原生的控件</div>
              <div>2,和原生交互能力强，可以随时切换到原生页面</div>
              <div>2,原生的应用般的体验</div>
              <div>3,摆脱webview让人不爽的交互和性能问题</div>
              <div>4,组件复用</div>
              <div>5,跨平台，Android和ios的代码复用率可以达到95%以上</div>
              <div>6,社区繁荣</div>
            </Panel>
            <Panel header="----react native环境搭建" key="3" style={customPanelStyle} >
             <div> <a href='https://reactnative.cn/'>react native中文网</a></div>
             <div style={{marginTop:20}}> <a href='https://facebook.github.io/react-native/'>react native英文</a></div>
            </Panel>
            <Panel header="----react native创建一个项目" key="4" style={customPanelStyle} >
             <div> react-native init ProjectName --version 0.xx.x</div>
              <div style={{marginTop:'20px'}}>create-react-native-app ProjectName</div>
              <div style={{marginLeft:'50px'}}>这个命令是一种沙盒环境的搭建,沙盒环境大量依赖于国外网络环境，也不能直接发布应用，只是用于学习、演示、试验等目的。不建议国内用户使用。</div>
              <div style={{marginLeft:'50px'}}>这个命令创建的项目  不是完整的rn项目目录结构</div>
              <div style={{marginLeft:'50px'}}>需要配合编译工具expo来使用</div>
              <div style={{marginLeft:'50px'}}>发布项目的时候任然需要补全rn项目的目录结构</div>
              <div style={{marginLeft:'50px'}}>如果需要写原生的话，还是得补全项目结构</div>
            </Panel>
            <Panel header="----react native项目创建演示" key="5" style={customPanelStyle} >
                <div> </div>
            </Panel>
            <Panel header="react native开发" key="6" style={customPanelStyle} >
                <div style={{marginTop:8}}>使用flexbx布局</div>
                <div style={{marginTop:8}}>标签和小程序原生开发类似，都是view，text这种</div>
                <div style={{marginTop:8}}>语法就是react的语法，jsx</div>
                <div style={{marginTop:8}}>早期很早的版本的时候，rn是用的Navigator这个导航，这个导航是纯js代码完成的，js要做的事情很多，性能很卡，现在的导航是react-navigation，是原生的方式实现的</div>
                <div style={{marginTop:8}}>app 热更新：codepush</div>
                <div style={{marginTop:8}}>app 网络请求：fetch(rn自带的)</div>
                <div style={{marginTop:8}}>状态管理的库:redux,mobx</div>
                <div style={{marginTop:8}}>安装第三方库：npm install，react-native link</div>
                    <div style={{marginLeft:50}}><a href="https://github.com/react-community/react-native-image-picker">举个列子</a></div>
            </Panel>
            <Panel header="react native打包" key="7" style={customPanelStyle} >
                <div style={{marginTop:8}}>以Android为例,分debug包和releae包</div>
            </Panel>
            <Panel header="react native发布" key="8" style={customPanelStyle} >
                <div style={{marginTop:8}}>当你的应用开发完后,先去注册 申请各个android 应用市场的账号(ios 相应的是appStore)，提供相应的资料，完成资料审核后，上传你的apk上去，等待审核通过，通过了你就可以去应用市场下载你的应用了</div>
            </Panel>
            <Panel header="react native 原理" key="9" style={customPanelStyle} >
                <div style={{display:'flex',height: '350px',borderWidth:'5px',borderColor:'#f7f7f7'}}>
                    <img src={require("./d.jpg")} className='img'/>
                </div>
                <div style={{marginTop:40}}>rn大部分代码都是js,所以是需要js的运行环境，ios上是内置的javascriptcore,android 是webkit.org官方开源的jsc.so</div>
                <div style={{marginTop:15}}>rn会把你写的js代码打包成一个bundle js文件,rn框架就是负责解析这个文件，如果是api调用，
                    那么直接调用的native的方法,如果是ui界面，会先映射到virtual DOM这个虚拟的JS数据结构中，
                    通过bridge 传递到native ， 然后根据数据属性设置各个对应的真实native的View，
                    </div>
                <div style={{marginTop:15}}>原生这边是怎么应对的？拿android举例，android  app  启动后，会默认起一个Ui mainThread的线程,它里面有一个looper轮训器，主线程的轮训器也是默认启动的，
                      JS thread 运行的脚本相当于底层数据采集器不断上传数据，转化成UI 事件，通过bridge转发到UI thread, 
                      从而改变真实的View。 UI main thread 跟 JS thread更像是CS 模型，
                      JS thread更像服务端， UI main thread是客户端， UI main thread 不断询问JS thread并且请求数据，
                      如果数据有变，则更新UI界面。
                  </div>    
            </Panel>
        </Collapse>, */}
        </div>
      </div>
    );
  }
}

export default App;
