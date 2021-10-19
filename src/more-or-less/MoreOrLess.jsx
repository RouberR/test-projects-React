import React from "react";
import styles from "./MoreOrLess.module.scss";
const MoreOrLess = () => {

    const [changeNumber, setChangeNumber] = React.useState('');
    const [minRandom, setMinRandom] = React.useState('1');
    const [maxRandom, setMaxRandom] = React.useState('100');
    const [randomNumber, setRandomNumber] = React.useState('');
   
    const onChangeNumber = (event) => {
        setChangeNumber(event.target.value)
    }
    const onChangeMinRandom = (event) => {
        setMinRandom(event.target.value)
    }
    const onChangeMaxRandom = (event) => {
        setMaxRandom(event.target.value)
    }
    const onRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * (Math.floor(maxRandom) - Math.ceil(minRandom) + 1)) + Math.ceil(minRandom))
    }

    console.log(randomNumber)

    
    const logicGame = () => {if (changeNumber == randomNumber) {return 'Вы победили! Нажмите на новое рандомное число!'}else if (changeNumber > randomNumber){
        return 'Ваше число больше'} else if (changeNumber < randomNumber){return `Ваше число меньше`} else {return `Введите число!`}}

    return (
        <div className={styles.header}>
            <div className={styles.box}>
           <div>
           <h2>{`Игра больше-меньше, отгадай число от ${minRandom} до ${maxRandom}`}</h2>
           <h2 className={styles.logicText}>{logicGame()}</h2>
           <h3>{changeNumber ? `Ваше число: ${changeNumber}` : `Ваше число:`}</h3>
           <input onChange={onChangeNumber} value={Number} value={changeNumber}  placeholder = 'Ваше число'></input>
           </div>
           <div>
           <button onClick={onRandomNumber}  className={styles.textRandom}>Новое рандомное число</button>
           </div>
           <div className={styles.buttonRandom}>
                <p>От <input onChange={onChangeMinRandom} placeholder={minRandom} value={minRandom} ></input></p>
                <p>До <input onChange={onChangeMaxRandom} placeholder={maxRandom} value={maxRandom}></input></p>
                 <button className={styles.textRandom} onClick={() => setMinRandom("1") | setMaxRandom("100")}>По умолчанию</button>
               
                 </div>
                
            </div>
        </div>
    )
}

export default MoreOrLess;