import './sass/main.scss';
import React, {useState} from 'react';

function App() {

    const [selectedFiles, setSelectedFiles] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFiles(event.target.files);
		setIsFilePicked(true);
    
	};


  return (
    <div className="root_researchers-tool">
        <script src="./js/index.js"></script>
        <div className="researchers-tool_background">
            <div className="background_aurora-1"></div>
            <div className="background_aurora-2"></div>
            <div className="background_aurora-3"></div>
            <div className="background_aurora-4"></div>
        </div>
        <header className="researchers-tool_header">
            <div className="header_background"></div>
            <li  className="header_items">
                <ul className="items-faq">
                    <span>F.A.Q</span>
                </ul>

                <ul className="items-faq">
                    <span>Home</span>
                </ul>

                <ul className="items-faq">
                    <span>About</span>
                </ul>
            </li>
        </header>
        <section className="researchers-tool_hero-section">
            <div  className="hero-section_line-1">
                <h1 className="line-1_text">Good luck bro</h1>
                <i className="line-1_icon"></i>
            </div>
            <h2  className="hero-section_line-2">I hope you will make the most of this tool</h2>
        </section>
        <main className="researchers-tool_main">
            <section className="main_left-section">
                <h2  className="left-section_background-text" >Drag And Drop
                    <br/>
                    All The Files Here
                </h2>
         
                <input className="left-section_add-button" type="file" name="file" onChange={changeHandler} multiple></input>


                <div className="left-section_files">
                {isFilePicked && selectedFiles ? 
                    Object.keys(selectedFiles).map(function(keyName, keyIndex) {
                        // use keyName to get current key's name
                        // and a[keyName] to get its value
                        keyName
                    })
                    : ''}
                </div>
            </section>
            <section className="main_right-section">
                <div className="right-section_actions">
                    <i className="actions_download"></i>
                    <i className="actions_coppy"></i>
                </div>
                <ol className="right-section_document">
                    <li className="document_titel-section">
                        <h1 className="titel-section_titel">Title</h1>
                        <ol className="titel-section_paragraph-1">
                            <li className="paragraph-1_titel">Name year</li>
                            <p className="paragraph-1_content">
                                Ipsum is simply dummy text of the printing and typesetting industry.                        
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It.
                            </p>
                        </ol>
                    </li>

                    <li className="document_authors-and-affiliation-section">
                        <h1 className="titel-section_titel">Authors and Affiliation</h1>
                    </li>

                    <li className="document_abstract-section">
                        <h1 className="abstract-section_titel">Abstract</h1>
                    </li>

                    <li className="document_introduction-section">
                        <h1 className="introduction-section_titel">Introduction</h1>
                    </li>

                    <li className="document_methods-section">
                        <h1 className="methods-section_titel">Methods</h1>
                    </li>

                    <li className="document_results-section">
                        <h1 className="results-section_titel">Results</h1>
                    </li>

                    <li className="document_discussion-section">
                        <h1 className="discussion-section_titel">Discussion</h1>
                    </li>

                    <li className="document_acknowledgments-section">
                        <h1 className="acknowledgments-section_titel">Acknowledgments</h1>
                    </li>

                    <li className="document_literature-cited-section">
                        <h1 className="literature-cited-section_titel">Literature Cited</h1>
                    </li>

                </ol>
                
            </section>
        </main>

        <footer className="researchers-tool_footer">
            <div className="footer_text-1">Made with</div> <i className="footer_icon-hart"></i><div className="footer_text-2">©2022</div>
        </footer>
    </div>
  );
}

export default App;
