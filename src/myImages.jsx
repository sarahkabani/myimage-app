import React, { Component } from 'react';
import './App.css';
import { Heading } from './Head';
import { Button } from './click';
import { Image1 } from './img';



class App extends Component {







  render() {
    return (
      <div>
        <div className = "picture" >
          <Image1/>
        </div>

        <div className = "center">
          <Heading heading = 'A Journey of a thousand lines of code...'/>
      <Button/>
    </div>
    
    <h1 className = "center2">Choose your ride...</h1>
    <div className="container">
      <div className="row">

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1503415879690-5888f9a7f3e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb5bb9cc177027683ebe9a9be25032a7&auto=format&fit=crop&w=400&q=60"/>

          <a><i class="fas fa-heart fa-3x"></i></a>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1458408990864-27997f8c2984?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb6dd2dadd09a6e9b0baf809d80abb96&auto=format&fit=crop&w=400&q=60"/>

          <button>hi</button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc36f6ef9f5f60d81144f40cb6cbfc38&auto=format&fit=crop&w=400&q=60"/>

          <button>hi</button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1506698552857-43bc6a86751b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f584e207b6672da1519677e210b58ec&auto=format&fit=crop&w=400&q=60"/>

          <button>hi</button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1514496069038-a127fcba61cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26466547775d96414bb4955c05aae2de&auto=format&fit=crop&w=400&q=60"/>

          <button>hi</button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1508048236731-b5ef91f7840c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b68073a34156640c844b78f431eadf36&auto=format&fit=crop&w=400&q=60 "/>

          <button>hi</button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1510903117032-f1596c327647?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3325d3e03864283a187c41fdc59ee43&auto=format&fit=crop&w=400&q=60"/>

          <button>hi</button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1507682226856-bbd49d1bfa5a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=380251aef1b26a4c16c89f3f3bd636af&auto=format&fit=crop&w=400&q=60"/>

        <button>hi</button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=908a0ab5ff1226fbdd7f9ebf0e5590c6&auto=format&fit=crop&w=400&q=60"/>

          <button>hi</button>

        </div>

      </div>



    </div>

    <footer id="choose"></footer>

      </div>

    );

  }

}



export default App;
