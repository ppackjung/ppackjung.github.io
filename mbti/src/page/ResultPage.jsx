import React from "react";

function ResultPage({mbtiContents} ) {


    return (
        <>
            <div className="quetionLayout">
              <div className="mbtiTitle">
                  <div>MBTI 테스트 결과</div>
                  <button type="button" onClick={()=>window.location.reload()}>다시하기</button>
              </div>
              
              <div className="questionList" style={{display:'flex'}}> 
                  <div className="result_area">
                      <div className="result_tit">당신의 <span>MBTI</span>는 <span>{mbtiContents.mbti}</span>입니다</div>
                      <div className="result_ex">{mbtiContents.ex}</div>
                  </div>
              </div>
          </div>
        </>
    );
}

export default ResultPage;