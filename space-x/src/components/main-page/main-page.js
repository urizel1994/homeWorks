import React from 'react';
import './main-page.css';

export default class MainPage extends React.Component {
    render(){
        return(
            <main className="main">
                <div class="row">
                    <section className="offset-lg-1 col-lg-7 list-group">
                        <div className="heading"><span>ПУТЕШЕСТВИЕ</span></div>
                        <span className="text">на красную планету</span>
                        <button className="left-btn">Начать путешествие</button>
                    </section>
                    <section className=" info col-lg-4 col-md-12 row">
                        <div className="info-elem">
                            <span>мы</span>
                            <span className="big-caps">1</span>
                            <span>на рынке</span>
                        </div>
                        <div className="info-elem">
                            гарнтируем
                            <span className="big-caps">50%</span>
                            безопасность
                        </div>
                        <div className="info-elem">
                            календарик за
                            <span className="big-caps">2001г.</span>
                            в подарок
                        </div>
                        <div className="info-elem">
                            путешествие
                            <span className="big-caps">597</span>
                            дней
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}