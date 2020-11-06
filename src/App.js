import './App.scss';
import { Input } from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2>Inputs</h2>
      </div>
      <div className='container'>
        <div className='item'>
          <div className='text'>
            &lt;Input /&gt;
          </div>
          <Input />
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input error /&gt;
          </div>
          <Input error />
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input disabled /&gt;
          </div>
          <Input disabled/>
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input helperText='Some text' /&gt;
          </div>
          <Input helperText='Sometext'/>
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input helperText='Some text' error /&gt;
          </div>
          <Input helperText='Sometext' error/>
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input startIcon='phone' /&gt;
          </div>
          <Input startIcon='phone'/>
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input endIcon='lock' /&gt;
          </div>
          <Input endIcon='lock'/>
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input value='text' /&gt;
          </div>
          <Input value='text'/>
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input size='sm' /&gt;
          </div>
          <Input size='sm'/>
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input fullWidth /&gt;
          </div>
          <Input fullWidth />
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input multiline row='4' /&gt;
          </div>
          <Input multiline row='4' />
        </div>
        <div className='item'>
          <div className='text'>
            &lt;Input 
            error 
            helperText='some text' 
            startIcon='done' 
            endIcon='feedback'
            placeholder='custom placeholder'
            size='sm'
            fullWidth /&gt;
          </div>
          <Input 
            error 
            helperText='some text' 
            startIcon='done' 
            endIcon='feedback'
            placeholder='custom placeholder'
            size='sm'
            fullWidth
          />
        </div>
      </div>

    </div>
  );
}

export default App;
