export default function Card() {
  const [questionsShowed, setQuestionShowed] = useState([])

  function showedQuestion(req) {
		let newArray = [...questionsShowed, req]
		setQuestionShowed(newArray)
		console.log(newArray)
	}

  return (
    <Question showQuestion={showQuestion} questionsShowed={questionsShowed} a={a}>
			<p>Pergunta {a.id}</p>
			<p>{a.question}</p>
			<img onClick={() => showedQuestion(a.id)} src={play} alt="" />
		</Question>
  )
}