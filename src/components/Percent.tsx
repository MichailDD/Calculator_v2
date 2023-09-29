import './Persent.scss';
import { useState } from 'react';

const Persent = () => {
  const [inputValues, setInputValues] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
  ]);

  const handleInputChange = (value: string, index: number) => {
    if (!isNaN(parseFloat(value)) && parseFloat(value) <= 5) {
      const updatedValues = [...inputValues];
      updatedValues[index] = value;
      setInputValues(updatedValues);
    }
  };
  const calculateSum = () => {
    const sum = inputValues
      .map((value) => parseFloat(value) / 10)
      .filter((value) => !isNaN(value))
      .reduce((acc, value) => acc + value, 0);
    const superSum: any = sum.toFixed(2);
    return Math.round(superSum);
  };

  const handleClearFields = () => {
    setInputValues(['', '', '', '', '']);
  };

  return (
    <div className="main">
      <div className="main-header">
        <div className="main-header__criterion">
          <h2>Критерії</h2>
        </div>
        <div className="main-header__assessment">
          <div className="main-header__assessment-item">
            <h3>Бал:(максимальний 5)</h3>
          </div>
          <div className="main-header__assessment-item">
            <h3>Відсоток за критерій</h3>
          </div>
          <div className="main-header__assessment-item">
            <h3>
              Сумарний відсоток за урок: <span>{calculateSum()}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="main-criterion__wrapper">
        <div className="main-criterion">
          <div className="main-criterion__item">
            <p>Кількість виконаної роботи за тиждень</p>
          </div>
          <div className="main-criterion__item">
            <p>
              Прояви ініціативи (тягнути руку на занятті, додавання анімацій,
              нових технологій тощо)
            </p>
          </div>
          <div className="main-criterion__item">
            <p>
              Вміння презентувати проект, доводити, чому є відхилення від
              дизайну та інше
            </p>
          </div>
          <div className="main-criterion__item">
            <p>Кількість годин проведених за навчанням</p>
          </div>
          <div className="main-criterion__item">
            <p>
              Обов'язкове виконання вимог, які були поставлені (штрафи по
              годинниках, заповнені зведені таблиці, виконані хвости з
              попереднього заняття)
            </p>
          </div>
        </div>
        <div className="main-criterion__inputs">
          {inputValues.map((value, index) => (
            <div key={index}>
              <input
                type="number"
                value={value}
                onChange={(e) => handleInputChange(e.target.value, index)}
                max="5"
              />
              <input
                type="text"
                value={value ? (parseFloat(value) / 10).toFixed(2) : ''}
                readOnly
              />
            </div>
          ))}
        </div>
        <div className="main-criterion__button">
          <button onClick={handleClearFields}>Скинути дані</button>
        </div>
      </div>
    </div>
  );
};

export default Persent;
