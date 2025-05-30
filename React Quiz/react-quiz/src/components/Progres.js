function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}></progress>

      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
