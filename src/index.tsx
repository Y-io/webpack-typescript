import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';

const elemId = 'app';

const container = document.getElementById(elemId) || createContainer(elemId);
const root = createRoot(container);
root.render(<App />);

function createContainer(id: string) {
  const tmpElement = document.createElement('div');
  tmpElement.id = id;
  document.body.prepend(tmpElement);
  return tmpElement;
}
