const bichigs = [
  {
    id: "neg",
    title: "BLOG DETAILS H1",
    test: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity.Its a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas.In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take",
  },
  {
    id: "hoyor",
    title: "BLOG DETAILS H2",
    test: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity.Its a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas.In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
  },
  {
    id: "gurav",
    title: "BLOG DETAILS H3",
    test: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity.Its a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally many UX design blogs expose you to case studies detailing an app or webs successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas.In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
  },
];

const Center = () => {
  return (
    <div>
      <div className="gol">
        <img src="../img/computer.png" alt="" />
      </div>

      {bichigs.map((bichig, index) => (
        <div key={index}>
          <h3 id={bichig.id}> {bichig.title} </h3>
          <p> {bichig.test} </p>
        </div>
      ))}
    </div>
  );
};
export default Center;
