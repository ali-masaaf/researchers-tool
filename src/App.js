import './sass/main.scss';

function App() {
  return (
    <div class="root_researchers-tool">
        <script src="./js/index.js"></script>
        <div class="researchers-tool_background">
            <div class="background_aurora-1"></div>
            <div class="background_aurora-2"></div>
            <div class="background_aurora-3"></div>
            <div class="background_aurora-4"></div>
        </div>
        <header class="researchers-tool_header">
            <div class="header_background"></div>
            <li  class="header_items">
                <ul class="items-faq">
                    <span>F.A.Q</span>
                </ul>

                <ul class="items-faq">
                    <span>Home</span>
                </ul>

                <ul class="items-faq">
                    <span>About</span>
                </ul>
            </li>
        </header>
        <section class="researchers-tool_hero-section">
            <div  class="hero-section_line-1">
                <h1 class="line-1_text">Good luck bro</h1>
                <i class="line-1_icon"></i>
            </div>
            <h2  class="hero-section_line-2">I hope you will make the most of this tool</h2>
        </section>
        <main class="researchers-tool_main">
            <section class="main_left-section">
                <h2  class="left-section_text" >Drag And Drop
                    <br/>
                    All The Files Here
                </h2>
                {/*<input  class="left-section_add-button" type="button"></input>*/}
            </section>
            <section class="main_right-section">
                <div class="right-section_actions">
                    <i class="actions_download"></i>
                    <i class="actions_coppy"></i>
                </div>
                <ol class="right-section_document">
                    <li class="document_titel-section">
                        <h1 class="titel-section_titel">Title</h1>
                        <ol class="titel-section_paragraph-1">
                            <li class="paragraph-1_titel">Name year</li>
                            <p class="paragraph-1_content">
                                Ipsum is simply dummy text of the printing and typesetting industry.                        
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It.
                            </p>
                        </ol>
                    </li>

                    <li class="document_authors-and-affiliation-section">
                        <h1 class="titel-section_titel">Authors and Affiliation</h1>
                    </li>

                    <li class="document_abstract-section">
                        <h1 class="abstract-section_titel">Abstract</h1>
                    </li>

                    <li class="document_introduction-section">
                        <h1 class="introduction-section_titel">Introduction</h1>
                    </li>

                    <li class="document_methods-section">
                        <h1 class="methods-section_titel">Methods</h1>
                    </li>

                    <li class="document_results-section">
                        <h1 class="results-section_titel">Results</h1>
                    </li>

                    <li class="document_discussion-section">
                        <h1 class="discussion-section_titel">Discussion</h1>
                    </li>

                    <li class="document_acknowledgments-section">
                        <h1 class="acknowledgments-section_titel">Acknowledgments</h1>
                    </li>

                    <li class="document_literature-cited-section">
                        <h1 class="literature-cited-section_titel">Literature Cited</h1>
                    </li>

                </ol>
                
            </section>
        </main>

        <footer class="researchers-tool_footer">
            <div class="footer_text-1">Made with</div> <i class="footer_icon-hart"></i><div class="footer_text-2">??2022</div>
        </footer>
    </div>
  );
}

export default App;
