import React , { useEffect , useState } from 'react';
import './MbtiTest.scss';
import PageList from './PageList';
import ResultPage from './ResultPage';

  function MbtiTest() {
    const setvh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    const handleCkAnswer = (type,idx) => {
        let ls = mbtiList;
        for(let i = 0; i < ls.length; i++){
            if(ls[i].name === type){
                ls[i].count =  ls[i].count + 1
            }
        }
        
        setMbtiList(ls);
        setPage(page+1);

        if(idx+1 === questionList.length){
          setMbti();
        }
    }

    const questionList = [
      {
          q:['주기적으로 새로운 친구를 만든다.'],
          a:[{type:'E',text:'그렇다(Yes)'},
             {type:'I',text:'아니다(No)'}]
      },
      {
          q:['자유 시간 중 상당 부분을 다양한 관심사를 탐구하는 데 할애한다'],
          a:[{type:'S',text:'그렇다(Yes)'},
             {type:'N',text:'아니다(No)'}]
      },
      {
          q:['다른 사람이 울고 있는 모습을 보면 자신도 울고 싶어질 때가 많다.'],
          a:[{type:'T',text:'그렇다(Yes)'},
             {type:'F',text:'아니다(No)'}]
      },
      {
          q:['테스트가 모두 끝났어. 결과 보러 갈래?'],
          a:[{type:'',text:'결과보러가기'}]
      }
    ];

    const [mbtiList,setMbtiList] = useState([
        {name:'I',count:0},{name:'E',count:0},{name:'S',count:0},{name:'N',count:0},
        {name:'F',count:0},{name:'T',count:0},{name:'P',count:0},{name:'J',count:0},
    ]);
  
    useEffect(() => {
      window.addEventListener('resize', setvh);
      setvh();
      return () => {
        window.removeEventListener('resize', setvh);
      }
    }, [])
  
    const [page,setPage] = useState(0);

    const [mbtiContents,setMbtiContents] = useState([]);

    function setMbti(){
        let ls = mbtiList;
        let mc = [
            {mbti:'ENTP',title:'발명가형',ex:'이 성격 유형을 가진 사람들은 혁신적이고 솔직하며 활기차다고 할 수 있습니다. 그들은 아이디어 지향적이며 현재보다 미래에 더 집중합니다. 이들은 다양한 사람들과 교류하는 것을 즐기고 다른 사람들과 토론하는 것을 좋아합니다. 그들은 잘 지내기 쉬운 경향이 있지만 때때로 논쟁적일 수도 있습니다. 사업가의 마인드를 지닌 성격입니다.',contents:['','','','','','']},
            {mbti:'INTP',title:'아이디어형',ex:'이 성격 유형을 가진 사람들은 조용하고 자제력이 있으며 분석적인 것으로 묘사됩니다. 그들은 사물의 작동 방식과 문제 해결에 매우 집중하고 논리와 수학을 잘하는 경향이 있습니다. 사회적 상호 작용보다 아이디어와 이론적 개념에 더 관심이 있습니다. 그들은 가장 가까운 친구와 가족에게 충성스럽고 다정하지만 친해지는 데 어려움을 겪는 경향이 있습니다.',contents:['','','','','','']},
            {mbti:'ESFJ',title:'친선도모형',ex:'이 사람들은 마음이 따뜻하고 성실하며 조화를 이룹니다. 그들은 소매에 마음을 걸고 다른 사람에게서 최고를 보는 경향이 있습니다. 그들은 다른 사람들을 돕고 사람들에게 필요한 보살핌을 제공하는 것을 즐기지만 그들의 기여에 대해 감사하고 주목받기를 원합니다. 그들은 다른 사람들을 주의 깊게 관찰하며 개인 접촉 및 공동체와 관련된 상황에서 탁월합니다.',contents:['','','','','','']},
            {mbti:'ESTP',title:'활동가형',ex:'행동 지향적이며 결과를 얻고 문제를 신속하게 해결하기 위해 실용적인 접근 방식을 취합니다. 그들은 종종 세련되고 매력적이며 즉흥적입니다. 외향적이고 활력이 넘치며 다양한 친구 및 지인들과 시간을 보내는 것을 즐깁니다. 그들은 지금 여기에 집중하고 추상적인 것보다 실용적인 것을 선호합니다.',contents:['','','','','','']},
            {mbti:'ISFJ',title:'권력형',ex:'친절하고 책임감이 있으며 내성적입니다. 봉사와 업무 지향적이며 의무를 다하기 위해 노력합니다. 성스럽고 사려 깊으며 다른 사람을 돌보는 데 많은 관심을 기울입니다. 그들은 비대립적이며 질서 있고 조화로운 환경을 중요하게 생각합니다.',contents:['','','','','','']},
            {mbti:'ISTP',title:'백과사전형',ex:'이 성격 유형을 가진 사람들은 두려움이 없고 독립적입니다. 그들은 모험, 새로운 경험, 위험 감수를 좋아합니다. 그들은 조용한 관찰자 경향이 있고 다른 사람들의 감정 상태에 잘 적응하지 못하며 때로는 무감각하거나 금욕적인 것처럼 보입니다. 결과 지향적이며 실행 가능한 솔루션을 찾고 실제 문제의 근본적인 원인을 이해하기 위해 신속하게 행동합니다.',contents:['','','','','','']},
            {mbti:'ENFJ',title:'언변능숙형',ex:'이 사람들은 책임감 있고 따뜻하며 충실합니다. 그들은 다른 사람들의 감정에 잘 적응하고 본질적으로 누구와도 우정을 쌓을 수 있습니다. 이들은 다른 사람들이 자신의 잠재력을 발휘하도록 돕고자 하는 열망이 있으며, 다른 사람들을 돕는 데서 만족을 얻습니다. 다양한 그룹의 사람들 사이에서 합의를 촉진할 수 있는 능력이 높기 때문에 훌륭한 리더가 되는 경향이 있습니다.',contents:['','','','','','']},
            {mbti:'INFJ',title:'예언자형',ex:'이 성격 유형을 가진 사람들은 진지하고 논리적이며 근면합니다. 또한 동정심이 많고 양심적이며 내성적입니다. 친밀하고 깊은 연결을 중요하게 생각하고 다른 사람들의 요구에 민감하지만 재충전을 위해 혼자만의 시간과 공간도 필요합니다.',contents:['','','','','','']},
            {mbti:'ENTJ',title:'지도자형',ex:'이 사람들은 책임감이 강합니다. 그들은 조직과 구조를 중시하고 장기 계획과 목표 설정을 높이 평가합니다. 강한 대인 관계 기술을 가지고 있고 다른 사람들과 교류하는 것을 즐기지만, 반드시 자신의 감정이나 다른 사람의 감정에 맞춰지는 것은 아닙니다. 이들은 강력한 리더십 기술을 가지고 있으며 훌륭한 임원, 주장 및 관리자가 되는 경향이 있습니다.',contents:['','','','','','']},
            {mbti:'INTJ',title:'과학자형',ex:'매우 독립적이고 자신감이 있으며 혼자 일하는 것을 선호합니다. 그들은 분석적이고 창의적이며 논리적이며 추진력이 있습니다. 감정보다는 논리와 사실을 중시하는 완벽주의자로 비춰질 수 있으며 자신과 타인에 대한 능력과 성과에 대해 높은 기대치를 갖는 경향이 있습니다.',contents:['','','','','','']},
            {mbti:'ENFP',title:'스파크형',ex:'열정적이고 창의적이며 활기차고 상상력이 풍부합니다. 그들은 훌륭한 사람과 의사소통 기술을 가지고 있으며 다른 사람들에게 감사와 지원을 잘합니다. 이들은 감정과 표현을 중요하게 생각합니다. 그들은 일상적인 것을 싫어하고 무질서와 미루는 습관으로 어려움을 겪을 수 있습니다.',contents:['','','','','','']},
            {mbti:'INFP',title:'잔다르크형',ex:'이 사람들은 창의적이고 이상주의적이며 배려심 있고 충실합니다. 그들은 높은 가치관과 도덕성을 가지고 있으며, 사람들을 이해하고 인류에게 가장 잘 봉사할 수 있는 방법을 끊임없이 찾고 있습니다. 가정적이며 소수의 친한 친구 그룹과 교류하는 것을 선호합니다.',contents:['','','','','','']},
            {mbti:'ESFP',title:'사교형',ex:'외향적이고 우호적이며 충동적이며 다른 사람들로부터 에너지를 얻는 경향이 있습니다. 그들은 관심의 중심이 되는 것을 좋아하고 새로운 환경에서 다른 사람들과 함께 일하는 것을 즐깁니다. 이들은 재미 있고, 낙관적이라고 할 수 있습니다. 그들은 자발적이고 현재에 집중하며 다른 사람들과의 직접적인 경험을 통해 배우는 것을 즐깁니다.',contents:['','','','','','']},
            {mbti:'ISFP',title:'성인군자형',ex:'이 사람들은 조용하고 친절하며 느긋하고 예민합니다. 그들은 재충전을 위해 혼자만의 공간과 시간에 대한 강한 욕구를 가지고 있습니다. 그들은 깊은 연결을 중요하게 여기고 친한 친구 및 가족의 소규모 그룹과 시간을 보내는 것을 선호합니다. 그들은 매우 사려 깊고 수용적이며 대립을 피하고 자신의 가치와 자신에게 중요한 사람들에게 헌신합니다.',contents:['','','','','','']},
            {mbti:'ESTJ',title:'사업가형',ex:'이 사람들은 책임감 있고 실용적이며 조직적입니다. 그들은 자기 주장이 강하고 책임을 지는 것을 좋아하며 가능한 가장 효율적인 방법으로 결과를 얻는 데 집중합니다. 그들은 명확한 기준을 가지고 있으며 전통과 규칙에 높은 가치를 부여합니다. 계획에 집착이 많기 때문에 다른 사람들에겐 완고하거나 강력하게 보일 수 있습니다. 그러나 그들은 근면하고 자신감 있고 신뢰할 수 있기 때문에 계획을 실행에 옮기는 데 탁월한 경향이 있습니다.',contents:['','','','','','']},
            {mbti:'ISTJ',title:'소금형',ex:'진지하고 사실적이며 내성적입니다. 이들은 질서와 조직을 높이 평가하고 세부 사항에 많은 관심을 기울입니다. 일을 미리 계획하고 전통과 법을 강조하는 것을 좋아합니다. 그들은 책임감 있고 현실적이며 신뢰할 수 있고 신뢰할 수 있다고 설명할 수 있습니다.',contents:['','','','','','']},
        ]

        let IorE =
          ls.find(function(data){return data.name === 'I'}).count > 
          ls.find(function(data){return data.name === 'E'}).count ? 'I' : 'E'
        let SorN =
          ls.find(function(data){return data.name === 'S'}).count > 
          ls.find(function(data){return data.name === 'N'}).count ? 'S' : 'N'
        let ForT =
          ls.find(function(data){return data.name === 'F'}).count > 
          ls.find(function(data){return data.name === 'T'}).count ? 'F' : 'T'
        let PorJ =
          ls.find(function(data){return data.name === 'P'}).count > 
          ls.find(function(data){return data.name === 'J'}).count ? 'P' : 'J'   

        let mbti = IorE + SorN + ForT + PorJ
        setMbtiContents(mc.filter(val => val.mbti === mbti)[0])

    }

  
    return (
      <>
        {page === 0 ?
          <div className='startPagelayout'>
            <div className='mbtiLogo'>
                <div>MBTI</div>
            </div>
            <button type='button' className='mbtiStart' onClick={()=>setPage(1)}>테스트 시작하기</button>
          </div>
          : page <= questionList.length ?
          <PageList page={page} questionList={questionList} handleCkAnswer={handleCkAnswer} />
          :
          <ResultPage mbtiContents={mbtiContents} setMbti={setMbti} />
        }
      </>
    );
}
export default MbtiTest;