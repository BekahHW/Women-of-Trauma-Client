import React, { Component} from 'react';
import './App.css'
import Disorders from './Disorders'
import Narratives from './Narratives'



const narratives = [
  {title: "The Scars that Make Us Beautiful",
  tagline: "After giving birth to my fourth kid, two of my organs ruptured, and the doctors sent me home. They told me I was experiencing normal symptoms. One major surgery and 30 days of a catheter later, I had to find out who this new me was.",
story: "After I delivered my fourth child, I didn’t expect to have a hole in two of my organs. I didn’t expect that one organ would form a tunnel into the other, exchanging fluids like the Monongahela joining the Allegheny River to form the Ohio River in Pittsburgh. The Ohio River basically free-flowing out of my vagina. I certainly didn’t expect that the doctors and the nurses would tell me that this Ohio River phenomenon was “normal” for a mother of four, and then send me on my way. I didn’t expect that the life I knew was over, and not because I was bringing home a new baby, but because I was broken and the doctors didn’t care.",
trauma_id: 3,
user_id: 1
},
  {title: "The Great Flood",
  tagline: "I watched my whole town get swallowed up",
story: "Lorem ipsum dolor sit amet, exerci praesent argumentum per at, eum mazim complectitur no, at abhorreant sadipscing signiferumque vel. Ei eirmod appareat duo, scaevola omittantur eos id. Tamquam ornatus incorrupte cu pro, nec dolore delectus antiopam ei. An vis legendos iudicabit, quo audiam facilisis in, illum abhorreant mei et. Ad duo etiam eirmod verear, oratio regione nam ut. Feugait periculis mei. Sale placerat adolescens et vix. Voluptua facilisi vituperatoribus sea ex, et tamquam sanctus rationibus mel. Vix ne quidam facilisi antiopam, te ius dicunt cetero, sea no iusto inimicus. Eam fabulas delenit oportere an.",
trauma_id: 1,
user_id: 2}
]

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
      <h1>Hello. This is the container.</h1>
      <Disorders />
      <Narratives />

      </div>
    )
  }
}

  export default App
