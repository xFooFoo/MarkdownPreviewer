import { useState } from 'react'
import './App.css'
import { marked } from 'marked';
import defaultData from './assets/defaultData.tsx';
import ReactLogo from './assets/react.svg';

// set options
marked.use({
    breaks: true
})

function App() {
    const [editorContent, setEditorContent] = useState(defaultData);
    const [previewContent, setPreviewContent] = useState(marked.parse(defaultData));

    const handleEditorChange =  (event: { target: { value: string; }; }) => {
        setEditorContent(event.target.value);
        try {
            const markedDownData =  marked.parse(event.target.value);
            setPreviewContent(markedDownData);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        
    }


    return (
        <div className="background">
            <div className="content">
                <div className="toolbar">Editor</div>
                <textarea id="editor" rows={15} cols={70} value={editorContent} onChange={handleEditorChange}></textarea>
                <div className="toolbar">Preview</div>
                <div id="preview" dangerouslySetInnerHTML={{ __html: previewContent }} ></div>
                <footer>
                    Made by&nbsp;<a href="https://github.com/xFooFoo?tab=repositories">Yariv Fu</a>&nbsp;- 2023&nbsp;&nbsp;&nbsp;
                    <img className="App-logo" src={ReactLogo} alt="React Logo" />
                </footer>
                
            </div>
        </div>
    )
}

export default App
