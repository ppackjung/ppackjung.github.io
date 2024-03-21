import React from "react";
import './PageList.scss';

function PageList({page, questionList , handleCkAnswer}) {

    return (
        <>
            <div className="quetionLayout">
                <div className="mbtiTitle">
                    <div>MBTI 테스트</div>
                    <div style={{display:page === questionList.length ?'none':''}} >문제수 : {`${page} / ${questionList.length-1}`}</div>
                </div>
                {questionList.map((val, idx) => 
                    <div className="questionList" style={{display:page===idx+1?'flex':'none'}} key={idx}> 
                            <div className="q_area">
                                {val.q.map((qval, qidx) => 
                                    <div key={qidx}>
                                        <div>★</div><div>{qval}</div>
                                    </div>
                                )}
                            </div>
                            <div className="a_area">
                                {val.a.map((aval, aidx) => 
                                    <button key={aidx} 
                                        onClick={
                                            () => handleCkAnswer(aval.type,idx)
                                        }>
                                        {aval.text}
                                    </button>
                                )}
                            </div>
                    </div>
                )}
            </div>
        </>

    );
}

export default PageList;