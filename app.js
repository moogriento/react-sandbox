import ReactDOM from 'react-dom';
import DummyComponent from './app/dummy-component';
import { TestComponent } from './app/test-component';
import Link from './app/link-component';

let name = 'a test';

// <DummyComponent name={name} />

ReactDOM.render(<DummyComponent name={name} />,
  document.getElementById('app'));

