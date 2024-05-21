import "./About.css";
const AboutComponent = () => {
  return (
    <div className="backgroundab">
      <h1 className="mx-auto display-1 displaybaslik">About Me</h1>
      <div className=" imga d-flex justify-content-center">
        <img className="mx-auto" src="background.gif" />
      </div>

      <p className="mx-auto mb-0 text-center">
        Hello I`m Efe Tamtürk. I`m 18 years old. I`m from Turkey. I`m a
        developer about 4 years. I started coding with js and I learned how to
        code discord bots. Then learned Java and how to code minecraft plugins.
        Now I`m learning HTML, CSS and Boostrap. For now I`m working at Arcane
        Studios in Plugin Development.
      </p>
    </div>
  );
};

export default AboutComponent;
