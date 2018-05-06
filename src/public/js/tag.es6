import PraiseButton from "./PraiseButton.es6";
const p = new PraiseButton();
let t = "";

xtag.register("x-praise", {
  content:
    '<div class="container" id="praise-box">' +
    '<div class="part1"></div>' +
    '<div class="part2"></div>' +
    '<div class="part3"></div>' +
    '<div class="finger one"></div>' +
    '<div class="finger two"></div>' +
    '<div class="finger three"></div>' +
    '<div class="finger four"></div>' +
    "</div>" +
    "<span class='hide' id='animation'>+1</span>",

  lifecycle: {},

  methods: {
    praise: function() {
      let self = this;
      p.handlePraise();
      let animation = self.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function() {
        animation.className = "hide";
      }, 800);
    }
  },

  events: {
    click: function(e) {
      let self = this;
      let target = e.target;
      if (target.parentNode.id == "praise-box" || target.id == "praise-box") {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(() => {
          self.praise();
        }, 800);
      }
    }
  }
});
