import css from "../css/index.css";

class PraiseButton {
  constructor() {}

  handlePraise() {
    axios
      .get("/index/update")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default PraiseButton;
