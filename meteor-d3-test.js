if (Meteor.isClient) {

  Session.set("greeting")

  Template.hello.greeting = function () {
    return Session.get("greeting")
  };

  Template.hello.rendered = function() {
    var w = 600;
    var h = 600;
    var container = d3.select("#container")
      .append("svg:svg")
      .attr("width", w)
      .attr("height", h);
    container
      .append('svg:rect')
      .attr('width', w)
      .attr('height', h)
      .attr('fill', d3.rgb(180, 180, 180));

    function update() {
      greeting = Session.set("greeting",1)

    }

    d3.json("test.json", function(d) {
      data = d;
      update();
    })

  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
