import React from "react";
import style from './index.module.css';
import headshot from './headshot.jpg';
export default function FirstPost() {
    return (
        <div>
            <div id="whole_page">
                <div style={{ maxWidth: '65rem', marginTop: ' 3rem ', marginLeft:'auto', marginRight:'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                            <h1 style={{ marginBottom: 'auto', fontSize: '2rem' }}>冯凡帆</h1>
                            <div>2 年前端工作经验 | 硕士 | 27 岁 | 男</div>
                            <div>所在地：深圳</div>
                            <div>Email: <a href="mailto:fanfan-feng@foxmail.com">fanfan-feng@foxmail.com</a> Tel:+86 15889499254
                            </div>
                        </div>
                        <img src={headshot.src} className={style.headshot} />
                    </div>
                    <h2>教育经历</h2>
                    <div style={{ display: 'flex', marginBottom:'1rem', flexWrap:'wrap'  }}>
                        <div style={{ flex: '1 1 auto', fontWeight: 'bold' }}>诺丁汉大学 计算机科学 硕士</div>
                        <div>2019.9 - 2020.6</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom:'1rem', flexWrap:'wrap'  }}>
                        <div style={{ flex: '1 1 auto', fontWeight: 'bold' }}>深圳大学 软件工程 本科</div>
                        <div>2014.9 - 2018.6</div>
                    </div>
                    <h2>工作经历</h2>
                    <div style={{ display: 'flex', marginBottom:'1rem', flexWrap:'wrap' }}>
                        <div style={{ flex: '1 1 auto', fontWeight: 'bold' }}>深圳今日头条科技有限公司 Tiktok live FE 前端开发工程师</div>
                        <div>2021.3 - 2023.3</div>
                    </div>
                    <div style={{ marginBottom:'1rem' }}>
                        团队技术栈:<br />
                        React.js, Koa.js, Typescript, Formily(表单框架)
                    </div>
                    <div>
                        项目经历:<br />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>参与 直播活动组件化搭建平台(Fusion) 开发</div>
                            <ul>
                                <li>表单配置技术优化
                                    <div>背景：在项目中，处理了平台中11个动态组件重复实现的三个动态配置项问题，这些配置项迭代频繁，涉及多个代码文件，给后续迭代带来挑战。</div>
                                    <div>
                                        行动：
                                        <ol>
                                            <li>梳理这三个配置项的不同组件中实现的差异，确定改进方案。</li>
                                            <li>将重复项抽象为三个统一使用的组件，减少实现代码量。</li>
                                            <li>实现配置数据线上化，简化基础迭代流程，提高前端开发效率。</li>
                                            <li>引入单元测试，减少后续需求中测试介入的工作量。</li>
                                        </ol>
                                    </div>
                                    <div>结果：平台中的B端配置项代码量减少4分之1，后续需求开发周期缩短70%。基础迭代几乎不占用前端开发时间。一半的需求迭代无需测试介入。</div>
                                </li>
                                <li>负责新组件开发和旧组件迭代
                                    <p>背景：组件开发是Fusion平台主要的迭代方式，我负责了4个新组件开发和5个旧组件迭代，涉及C端和B端配置项的代码设计与测试上线。</p>
                                    <div>行动：
                                        <ol>
                                            <li>C端组件使用Mix框架开发，适配移动端，匹配平台主题功能和B端配置项参数,实现组件间联动。</li>
                                            <li>B端配置项基于Formly组件开发，处理配置项联动，进行Formly原生组件再开发。</li>
                                        </ol>
                                    </div>
                                    <p>结果：所有需求按期完成并上线，运营团队反馈良好，这些组件在80%的组件化直播活动中使用，提升了Fusion平台使用率和运营团队的活动产能。</p>
                                </li>
                                <li>平台本身迭代
                                    <p>除了组件以外,我也负责平台本身的有一些技术需求和产品需求迭代,例如:
                                        自动保存，带时区的时间输入组件，免审活动功能，超级管理员，BFF层优化和抽象及B端埋点等等</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>搭建 案例活动平台</div>
                        <ul>
                            <li>MVP开发
                                <p>背景：产品侧希望此平台支持运营侧一键生成直播活动，需具备案例展示、一键创建、配置编辑等功能，并强调用户友好性。</p>
                                <div>行动：
                                    <ol>
                                        <li>设计前端实现方案。</li>
                                        <li>负责平台MVP版本前端开发、联调和上线。</li>
                                    </ol>
                                </div>
                                <p>结果：平台上线后受到产品团队和运营团队好评，首月即有15个直播活动通过该平台生成并上线。</p>
                            </li>
                            <li>案例活动配置规则录入功能开发
                                <p>背景：MVP版本中，活动生成规则通过配置文件管理，修改需开发介入，因此需要给产品团队提供交互式修改案例规则的能力。</p>
                                <div>行动：
                                    <ol>
                                        <li>设计方案通过改动Fusion平台复用代码，减少开发量。</li>
                                        <li>负责此功能的前端开发、联调和上线。</li>
                                    </ol>
                                </div>
                                <p>结果：此迭代上线后，平台内容迭代无需开发参与，提高了平台内容的迭代效率。</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>改造和迭代 重要直播保障平台</div>
                        <ul >
                            <li>平台本身迭代
                                负责平台本身的功能迭代,例如:
                                <ol>
                                    <li>使用 Echarts 实现重要直播活动实时数据的可视化和数据复盘功能</li>
                                    <li>重要直播活动项目创建表单迭代</li>
                                    <li>项目开始前自动拉群和活动异常的自动化预警功能</li>
                                </ol>
                            </li>
                            <li>平台框架改造和迁移
                                我负责了平台的多个技术改造,例如:
                                <ol>
                                    <li>配合公司的技术改造要求将平台迁移到了公司的自研组件框架 semi 中</li>
                                    <li>改造该平台前端为 BFF 架构,并将其作为子应用进行迁移到大的直播活动中台,并与中台进行权限体系的统一</li>
                                    <li>建立该项目的自动化发布流程</li>
                                </ol>
                            </li>
                        </ul>


                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>搭建 项目管理平台</div>
                        <p>背景：平台旨在实现运营团队直播活动预算审批的流程化和自动化，采用BFF架构和前后端分离设计，涉及复杂交互式表单。</p>
                        <div>行动：
                            <ol>
                                <li>负责了MVP版本的方案设计、开发联调、测试部署</li>
                                <li>适配了自动化部署流水线</li>
                            </ol>
                        </div>
                        <p>结果：平台上线后，大部分组件化活动通过该平台申请预算和活动资源，平台运转良好。后转交给同事进行迭代。</p>
                    </div>
                    <h2>个人技能</h2>
                    <ol>
                        <li>熟练掌握 JS 语言,熟悉 Typescript 标准</li>
                        <li>熟练掌握 React 前端框架,并对 Vue 和 Angular 框架有接触</li>
                        <li>对前后端分离,BFF,微服务等架构在前端的应用有实践经验</li>
                        <li>有良好的软件工程,数据结构,算法运用的理论基础以及良好的学习能力</li>
                    </ol>
                </div>
            </div>
            <div style={{ marginBottom: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button 
                    style={{ borderRadius: '5px', boxShadow: ' 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', padding: '0.5rem', margin: '0 auto' }} 
                    id="print_btn"
                    onClick={()=>{
                        var blob = new Blob(['cv-chinese.pdf'], {type: 'application/pdf'});
                        var downloadLink = document.createElement('a');
                        downloadLink.setAttribute('href', window.URL.createObjectURL(blob));
                        downloadLink.setAttribute('download', '冯凡帆-前端.pdf');
                        downloadLink.click();
                    }}
                > 下载简历 </button>
            </div>
            
        </div>
    )
}