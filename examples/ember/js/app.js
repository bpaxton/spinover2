App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("collections");
  this.resource("exhibits", function(){
    this.resource("exhibit", {path: "/:exhibit_id"})
  });
  this.route("notes");
});

// Collections Route
App.CollectionsRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Samoca Photography Collections",
        copy: "The Photography Gallery exhibits over 2,000 rotating examples from the permanent collection, which spans from the very beginnings of the medium to the present day. Collection highlights include silver  gelatin prints by Ansel Adams, landscapes by John Pfal, and portraits  by Robert Mapplethorpe.",
        image: "images/collections/collections-photography.jpg"
      }, {
        title: "Samoca Painting Collections",
        copy: "The SAMOCA collection of paintings includes work from 1950 to the present, and is ever expanding. The collection is especially renowned for its emphasis on California art and artists, including Sam Francis, Nathan Oliveira, and Wayne Thiebaud.",
        image: "images/collections/collections-painting.jpg"
      }, {
        title: "Samoca Sculpture Collections",
        copy: "Comprising American sculpture from the mid-19th through the late 20th centuries, SAMOCA's collection is famed for its almost complete series of Frederic Remington's, as well as the extensive outdoor sculpture gardens containing work from modernist Americans such as Richard Serra and Isamu Noguchi.",
        image: "images/collections/collections-sculpture.jpg"
      }
    ];
  }
});

App.SingleCollectionComponent = Ember.Component.extend({
    tagName: "article",
    classNames: ["collectionArticleClass cf"]
});

//Placeholder Data
var exhibits = [{
  id: "1",
  artist_name: "Avery Washington",
  title: "Abstractionist Works",
  exhibit_info: "SAMOCA presents a collection of paintings by Avery Washington, described by Art World as \"the pre-eminent American post-painterly abstractionist, rejecting Rothko\'s mantle and running to the edges of color field theory.\ This exhibit includes work shown at the Gauggossian (NYC), MoMA, and Greene & Stromberg, and several paintings making their debut at SAMOCA.",
  image: "images/avery-washington.jpg"
  }, {
  id: "2",
  artist_name: "Paul Shellington",
  title: "Bird Watching",
  exhibit_info: "Paul Shellington's first exhibit in the United States, Bird Watching, showcases some of the finest paintings and drawings from his delicate and whimsical body of work. Shellington's work as an illustrator has been featured in magazines such as New Yorker and The Atlantic and he has become famed for his fanciful hand-drawn animations, including the Oscar-winning short, A Balloon for Marcel.",
    image: "images/paul-shellington.jpg"
  }, {
  id: "3",
  artist_name:  "Jacob Mars",
  title: "General Works",
  exhibit_info: "The SAMOCA board of directors are pleased to announce the acquisition of a wide range of works, including new artist Jacob Mars.",
  image: "images/jacob-mars.jpg"
  }];

  // Route for all Exhibits
App.ExhibitsRoute = Ember.Route.extend({
  model: function() {
    return exhibits;
  }
});

App.ExhibitRoute = Ember.Route.extend({
  model: function(params) {
    return exhibits.findBy("id", params.exhibit_id);
  }
});

App.ExhibitsController = Ember.ArrayController.extend({
  totalExhibits: function(){
    return this.get("model.length");
  }.property("@each")
});
