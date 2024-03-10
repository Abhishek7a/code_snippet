import React, { useEffect,  useRef } from 'react'
import ClipBoard from '../../Components/ClipBoard';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';
import '../prism-custom-theme.css';
import ClipboardJS from 'clipboard';
import { useAppContext } from '../../AppContext';
import footer1 from '../../Components/footer/Footer1';

export default function CodeFooter1() {
  const codeRef = useRef(null);
  const { globalVariable, dark } = useAppContext();

  useEffect(() => {
      Prism.highlightAll();
      const clipboard = new ClipboardJS('.clipboard-btn', {
          target: function () {
              return codeRef.current;
          }
      });
      clipboard.on('success', function (e) {
          e.clearSelection();
      });

      clipboard.on('error', function (e) {
          console.error('Error copying text to clipboard:', e.action);
      });
      return () => {
          clipboard.destroy();
      };

  }, [globalVariable, dark]);

  const Footer1 = ClipBoard(footer1);
  return (
      <div className='w-11/12 m-auto'>
          <Footer1 />
          <pre className='mt-0'>
              <code ref={codeRef} className="language-html">{dark === false && globalVariable === 'HTML' ?
                  ``: dark === false && globalVariable === 'React' ?
                      ``
                      : dark === true && globalVariable === 'HTML' ?
                          `` :
                          ``}
              </code >
          </pre >
      </div>
  )
}


