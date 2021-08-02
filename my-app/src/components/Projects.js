import Project from "./Project"

const Projects = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "2%", marginBottom: "4%" }}>My Projects</h1>
            <Project name="Connect 4 game with AI player"
                description="This is a 4 X 4 version of the game connect 4 which can be played by 2 players or a single player and an AI whose lookahead value is set by the user."
                gitlink="https://gitlab.com/arnavnm/connect-4-game-with-ai-player/-/tree/main" />
           
            <Project name="Snake"
                description="My version of a simple snake game in java"
                gitlink="https://gitlab.com/arnavnm/snake" />

            <Project name="RPN calculator"
                description="This is a infix to postfix implementation of an rpn calculator"
                gitlink="https://gitlab.com/arnavnm/rpn-calculator" />

            <Project name="First order Markov text generation model "
                description="Here I implement a first order Markov text-generation algorithm."
                gitlink="https://gitlab.com/arnavnm/first-order-markov-text-generation-model" />

            <Project name="Interpreter"
                description="Created a simple interpreter in Ocaml language"
                gitlink="https://gitlab.com/arnavnm/interpreter" />
        </div>
    )
}

export default Projects
